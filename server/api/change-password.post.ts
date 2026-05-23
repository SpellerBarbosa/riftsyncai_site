import { getGlobalStats } from '../models/Stat';
import { verifyPassword, hashPassword } from '../utils/security';

export default defineEventHandler(async (event) => {
  const authHeader = getHeader(event, 'authorization');
  const stats = await getGlobalStats();

  // Validate current password against stored hash (or fallback plain text)
  if (!authHeader || !verifyPassword(authHeader, stats.adminPassword)) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Senha atual inválida.'
    });
  }

  const body = await readBody(event);
  if (!body || !body.newPassword || body.newPassword.trim().length < 4) {
    throw createError({
      statusCode: 400,
      statusMessage: 'A nova senha deve ter no mínimo 4 caracteres.'
    });
  }

  // Hash the new password before saving it
  stats.adminPassword = hashPassword(body.newPassword.trim());
  await stats.save();

  return {
    success: true
  };
});
