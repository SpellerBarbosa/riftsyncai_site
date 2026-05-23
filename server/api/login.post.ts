import { getGlobalStats } from '../models/Stat';
import { verifyPassword } from '../utils/security';
import { signToken } from '../utils/jwt';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (!body || !body.password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Senha é obrigatória.'
    });
  }

  const stats = await getGlobalStats();

  // Validate password
  if (!verifyPassword(body.password, stats.adminPassword)) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Senha administrativa incorreta.'
    });
  }

  // Generate JWT token
  const token = signToken({ role: 'admin' });

  // Set secure HttpOnly cookie
  setCookie(event, 'admin_session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 24 * 3600 // 24 hours
  });

  return {
    success: true
  };
});
