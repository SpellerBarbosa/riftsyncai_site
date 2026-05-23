import { getGlobalStats } from '../models/Stat';
import { verifyPassword, hashPassword } from '../utils/security';
import { verifyToken } from '../utils/jwt';

export default defineEventHandler(async (event) => {
  const sessionToken = getCookie(event, 'admin_session');
  const stats = await getGlobalStats();

  // Validate admin session
  let isAuthorized = false;
  if (sessionToken) {
    const payload = verifyToken(sessionToken);
    if (payload && payload.role === 'admin') {
      isAuthorized = true;
    }
  }

  if (!isAuthorized) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Não autorizado. Sessão inválida ou expirada.'
    });
  }

  const body = await readBody(event);
  if (!body || !body.oldPassword || !body.newPassword) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Senhas antiga e nova são obrigatórias.'
    });
  }

  // Validate old password against stored hash
  if (!verifyPassword(body.oldPassword, stats.adminPassword)) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Senha atual incorreta.'
    });
  }

  if (body.newPassword.trim().length < 4) {
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
