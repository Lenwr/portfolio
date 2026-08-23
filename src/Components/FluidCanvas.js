import {useEffect, useRef} from 'react';

const palette = ['#1689e8', '#37c9db', '#7868e6', '#9b63df'];

function FluidCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (process.env.NODE_ENV === 'test') return undefined;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        if (!context) return undefined;

        const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
        const pointer = {x: -1000, y: -1000, active: false};
        let nodes = [];
        let pulses = [];
        let frame;

        const createNodes = () => {
            const count = Math.min(72, Math.max(32, Math.floor(window.innerWidth / 22)));
            nodes = Array.from({length: count}, (_, index) => ({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                vx: (Math.random() - .5) * .22,
                vy: (Math.random() - .5) * .22,
                radius: 1.2 + Math.random() * 1.9,
                color: palette[index % palette.length],
                phase: Math.random() * Math.PI * 2,
            }));
        };

        const resize = () => {
            const ratio = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = window.innerWidth * ratio;
            canvas.height = window.innerHeight * ratio;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            context.setTransform(ratio, 0, 0, ratio, 0, 0);
            createNodes();
        };

        const handlePointerMove = (event) => {
            pointer.x = event.clientX;
            pointer.y = event.clientY;
            pointer.active = true;
            if (Math.random() > .72) {
                pulses.push({x: pointer.x, y: pointer.y, radius: 4, opacity: .5});
                if (pulses.length > 14) pulses.shift();
            }
        };

        const handlePointerLeave = () => { pointer.active = false; };

        const drawBackground = (width, height) => {
            context.fillStyle = '#f5f7fb';
            context.fillRect(0, 0, width, height);
            const glow = context.createRadialGradient(width * .5, height * .4, 0, width * .5, height * .4, Math.min(width, height) * .7);
            glow.addColorStop(0, 'rgba(113, 184, 255, .10)');
            glow.addColorStop(.5, 'rgba(153, 122, 240, .055)');
            glow.addColorStop(1, 'rgba(255,255,255,0)');
            context.fillStyle = glow;
            context.fillRect(0, 0, width, height);
        };

        const draw = (timestamp = 0) => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            context.clearRect(0, 0, width, height);
            drawBackground(width, height);

            nodes.forEach((node) => {
                if (!reduceMotion) {
                    node.x += node.vx;
                    node.y += node.vy;
                    if (node.x < -20) node.x = width + 20;
                    if (node.x > width + 20) node.x = -20;
                    if (node.y < -20) node.y = height + 20;
                    if (node.y > height + 20) node.y = -20;

                    if (pointer.active) {
                        const dx = pointer.x - node.x;
                        const dy = pointer.y - node.y;
                        const distance = Math.hypot(dx, dy);
                        if (distance < 220 && distance > 1) {
                            const pull = (1 - distance / 220) * .012;
                            node.vx += (dx / distance) * pull;
                            node.vy += (dy / distance) * pull;
                        }
                    }
                    node.vx *= .995;
                    node.vy *= .995;
                }
            });

            const maxDistance = window.innerWidth < 640 ? 105 : 145;
            for (let first = 0; first < nodes.length; first += 1) {
                for (let second = first + 1; second < nodes.length; second += 1) {
                    const a = nodes[first];
                    const b = nodes[second];
                    const distance = Math.hypot(a.x - b.x, a.y - b.y);
                    if (distance < maxDistance) {
                        const opacity = (1 - distance / maxDistance) * .2;
                        const gradient = context.createLinearGradient(a.x, a.y, b.x, b.y);
                        gradient.addColorStop(0, `${a.color}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`);
                        gradient.addColorStop(1, `${b.color}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`);
                        context.strokeStyle = gradient;
                        context.lineWidth = .7;
                        context.beginPath();
                        context.moveTo(a.x, a.y);
                        context.lineTo(b.x, b.y);
                        context.stroke();
                    }
                }
            }

            nodes.forEach((node) => {
                const pulse = 1 + Math.sin(timestamp * .0015 + node.phase) * .25;
                const halo = context.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 5);
                halo.addColorStop(0, `${node.color}70`);
                halo.addColorStop(1, `${node.color}00`);
                context.fillStyle = halo;
                context.beginPath();
                context.arc(node.x, node.y, node.radius * 5 * pulse, 0, Math.PI * 2);
                context.fill();
                context.fillStyle = node.color;
                context.beginPath();
                context.arc(node.x, node.y, node.radius * pulse, 0, Math.PI * 2);
                context.fill();
            });

            if (pointer.active) {
                nodes.forEach((node) => {
                    const distance = Math.hypot(pointer.x - node.x, pointer.y - node.y);
                    if (distance < 170) {
                        context.strokeStyle = `rgba(22, 137, 232, ${(1 - distance / 170) * .3})`;
                        context.lineWidth = 1;
                        context.beginPath();
                        context.moveTo(pointer.x, pointer.y);
                        context.lineTo(node.x, node.y);
                        context.stroke();
                    }
                });
            }

            pulses = pulses.filter((pulse) => pulse.opacity > .02);
            pulses.forEach((pulse) => {
                pulse.radius += 1.1;
                pulse.opacity *= .94;
                context.strokeStyle = `rgba(55, 201, 219, ${pulse.opacity})`;
                context.lineWidth = 1;
                context.beginPath();
                context.arc(pulse.x, pulse.y, pulse.radius, 0, Math.PI * 2);
                context.stroke();
            });

            if (!reduceMotion) frame = requestAnimationFrame(draw);
        };

        resize();
        draw();
        window.addEventListener('resize', resize);
        window.addEventListener('pointermove', handlePointerMove, {passive: true});
        document.addEventListener('mouseleave', handlePointerLeave);
        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('pointermove', handlePointerMove);
            document.removeEventListener('mouseleave', handlePointerLeave);
            cancelAnimationFrame(frame);
        };
    }, []);

    return <canvas ref={canvasRef} className="fluid-canvas" aria-hidden="true"/>;
}

export default FluidCanvas;
