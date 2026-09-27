import { describe, it, expect, vi } from 'vitest';
import request from 'supertest';
import express from 'express';

vi.mock('../db.js', () => ({
  default: {
    query: vi.fn().mockResolvedValue([[]])
  }
}));

import authRouter from './auth.js';

const app = express();
app.use(express.json());
app.use('/api', authRouter);

describe('API Auth Endpoints', () => {
  it('debería retornar error en /api/login cuando faltan datos', async () => {
    const res = await request(app)
      .post('/api/login')
      .send({ username: '', contraseña: '' });

    expect(res.status).toBe(401);
  });
});
