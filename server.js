const http = require('http');
const fs = require('fs');
const path = require('path');

const port = Number(process.env.PORT || 3001);
const buildDirectory = path.join(__dirname, 'build');
const limits = new Map();

const portfolioContext = `
Tu es l'assistant officiel du portfolio de Jefferson Abalo. Réponds toujours en français, avec un ton professionnel, chaleureux et concis. N'invente jamais une information. Si la réponse n'est pas dans ce contexte, dis-le et propose de contacter Jefferson.

Profil : Jefferson Abalo est développeur web full-stack, basé en France, spécialisé dans les applications métier, les plateformes SaaS, la logistique et le suivi d’expéditions. Il travaille principalement avec Vue.js, Nuxt, React, Next.js, JavaScript, TypeScript, Firebase, Cloud Functions, Supabase et Tailwind CSS. Il possède un diplôme en Stratégies Digitales orienté Développement Web et recherche des opportunités professionnelles et des missions freelance.

Compétences complémentaires : intégration de l’API OpenAI et de l’API Responses pour créer des assistants conversationnels contextualisés avec une clé protégée côté serveur ; no-code avec Airtable et Softr ; CMS et SEO avec WordPress, Astra, Spectra, WPForms, Google Site Kit, Yoast SEO, Search Console et Google Analytics ; fonctionnalités métier incluant authentification, rôles, QR codes, codes-barres, scan mobile, tracking, PDF, CSV, graphiques Recharts et notifications Twilio SMS/WhatsApp.

Projets :
- TrackSend, produit personnel distinct de WeFret Africa : plateforme de gestion logistique des colis, clients, chargements, bordereaux de livraison et communications. Lien : https://tracksend.vercel.app/#/login. Stack visible : Vue.js, Firebase, jsPDF et QR codes.
- WeFret Africa — Suivi colis : portail public permettant aux clients de consulter l’avancement de leur expédition à partir d’un numéro de suivi. Lien : https://wefretafrica.vercel.app/.
- Aaron Travel, mission freelance : application de gestion logistique avec authentification, rôles, colis, QR codes, scan, suivi des statuts, notifications et génération de PDF. Son portail client est accessible ici : https://gate-self-three.vercel.app/#/dashboard. Stack : Vue.js 3, Pinia, Firebase, Tailwind CSS et jsPDF.
- Greff’Up, mission freelance : site institutionnel responsive de l’association des jeunes greffés, avec présentation de sa mission, de ses actions et de ses témoignages. Lien : https://greffup.fr/. Stack : WordPress, Astra, SEO et Google Site Kit.
- Checkup Impact, mission freelance liée à Greff’Up : application de questionnaires avant/après, QR codes, statistiques, exports PDF/CSV et suivi des accompagnements. Stack : Next.js, TypeScript, Supabase, Recharts et Zod.
- France Distribution, mission freelance : application de gestion de stock, scan de codes-barres, API OpenFoodFacts, alertes et notifications. Stack : React, Redux, Supabase et Tailwind CSS.
- Transport Fomek, projet client en cours : solution de gestion de fret entre la France et le Cameroun. Ne présente pas les fonctionnalités prévues comme déjà livrées.
- Sow Ocaz : application web responsive en ligne. Lien : https://sowocaz.vercel.app/. Ne détaille pas de fonctionnalités non documentées.
- YSAB : catalogue digital de pagnes présentant les modèles et leurs variantes de couleurs. Lien : https://ysab.vercel.app/. Stack : Vue.js et Vite.
- Paris Fret Transport : application métier de transport et de fret accessible par un espace sécurisé, avec génération de PDF et QR codes. Lien : https://parisfrettransport.vercel.app/#/login. Stack : Vue.js, Vite, jsPDF et QR codes.
- Teranga Cargo Groupage : site de groupage France–Sénégal présentant l’enlèvement en France, l’expédition maritime, la réception à Dakar, la demande de devis et le suivi de colis. Lien : https://www.terangacargogroupage.com/. Stack : Next.js.

Pour télécharger le CV, l'utilisateur peut cliquer sur « Mon CV ». Pour envoyer un message, il peut ouvrir la rubrique « Contact ». Ne communique aucune donnée privée non présente ci-dessus.
`;

const json = (response, status, body) => {
    response.writeHead(status, {'Content-Type': 'application/json; charset=utf-8'});
    response.end(JSON.stringify(body));
};

const rateLimited = (request) => {
    const key = request.socket.remoteAddress || 'local';
    const now = Date.now();
    const recent = (limits.get(key) || []).filter((time) => now - time < 60_000);
    if (recent.length >= 12) return true;
    recent.push(now);
    limits.set(key, recent);
    return false;
};

const handleChat = async (request, response) => {
    if (!process.env.OPENAI_API_KEY) {
        return json(response, 503, {error: "L'assistant IA n'est pas encore configuré : OPENAI_API_KEY est manquante côté serveur."});
    }
    if (rateLimited(request)) return json(response, 429, {error: 'Trop de demandes. Réessayez dans une minute.'});

    let rawBody = '';
    request.on('data', (chunk) => {
        rawBody += chunk;
        if (rawBody.length > 20_000) request.destroy();
    });
    request.on('end', async () => {
        try {
            const body = JSON.parse(rawBody || '{}');
            const messages = Array.isArray(body.messages) ? body.messages.slice(-10) : [];
            const input = messages
                .filter((message) => ['user', 'assistant'].includes(message.role) && typeof message.content === 'string')
                .map((message) => ({role: message.role, content: message.content.slice(0, 1500)}));
            if (!input.length) return json(response, 400, {error: 'Question manquante.'});

            const apiResponse = await fetch('https://api.openai.com/v1/responses', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: 'gpt-4.1-mini',
                    instructions: portfolioContext,
                    input,
                    max_output_tokens: 300,
                }),
            });
            const data = await apiResponse.json();
            if (!apiResponse.ok) {
                const errorCode = data.error?.code;
                const messagesByStatus = {
                    400: "La requête envoyée à l'IA est invalide.",
                    401: "La clé OpenAI est invalide ou a été révoquée.",
                    403: "Cette clé n'a pas accès au modèle configuré.",
                    404: "Le modèle IA configuré n'est pas disponible pour ce projet.",
                    429: errorCode === 'insufficient_quota'
                        ? "Le compte OpenAI n'a plus de crédit API ou sa facturation n'est pas activée."
                        : "La limite de requêtes OpenAI a été atteinte. Réessayez plus tard.",
                };
                console.error('Erreur OpenAI:', apiResponse.status, errorCode || data.error?.type || 'unknown');
                return json(response, apiResponse.status, {
                    error: messagesByStatus[apiResponse.status] || "Le service OpenAI a refusé la requête.",
                });
            }
            const answer = data.output_text || data.output
                ?.flatMap((item) => item.content || [])
                .find((item) => item.type === 'output_text')?.text;
            return json(response, 200, {answer: answer || "Je n'ai pas pu formuler de réponse."});
        } catch (error) {
            console.error('Erreur assistant IA:', error.message);
            return json(response, 500, {error: "L'assistant est momentanément indisponible."});
        }
    });
};

const mimeTypes = {'.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.svg': 'image/svg+xml', '.pdf': 'application/pdf', '.webp': 'image/webp'};

const server = http.createServer((request, response) => {
    if (request.method === 'POST' && request.url === '/api/chat') return handleChat(request, response);
    const requestedPath = request.url === '/' ? 'index.html' : request.url.split('?')[0].replace(/^\/+/, '');
    const resolvedPath = path.resolve(buildDirectory, requestedPath);
    const safePath = resolvedPath.startsWith(buildDirectory) ? resolvedPath : path.join(buildDirectory, 'index.html');
    const finalPath = fs.existsSync(safePath) && fs.statSync(safePath).isFile() ? safePath : path.join(buildDirectory, 'index.html');
    fs.readFile(finalPath, (error, content) => {
        if (error) return json(response, 404, {error: 'Fichier introuvable.'});
        response.writeHead(200, {'Content-Type': `${mimeTypes[path.extname(finalPath)] || 'application/octet-stream'}; charset=utf-8`});
        response.end(content);
    });
});

server.listen(port, '127.0.0.1', () => {
    console.log(`Portfolio et API disponibles sur http://127.0.0.1:${port}`);
    if (!process.env.OPENAI_API_KEY) console.warn('OPENAI_API_KEY manquante : le chat retournera une erreur de configuration.');
});
