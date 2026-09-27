import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';

// Mock del contexto de autenticación para evitar errores de renderizado
vi.mock('../context/AuthContext', () => ({
  useAuth: () => ({ login: vi.fn() })
}));

describe('Componente Login', () => {
  it('debería renderizar el título de inicio de sesión', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const titleElement = screen.getByText(/INICIO DE SESIÓN/i);
    expect(titleElement).toBeDefined();
  });
});
