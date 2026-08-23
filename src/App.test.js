import { render, screen } from '@testing-library/react';
import App from './App';

test('affiche les informations principales du portfolio', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /jefferson abalo/i })).toBeInTheDocument();
  expect(screen.getByRole('navigation', { name: /explorer le portfolio/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /projets/i })).toBeInTheDocument();
});
