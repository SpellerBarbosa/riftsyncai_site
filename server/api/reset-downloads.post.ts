import { getGlobalStats } from '../models/Stat';
import { verifyToken } from '../utils/jwt';

export default defineEventHandler(async (event) => {
  const sessionToken = getCookie(event, 'admin_session');

  // Validate admin authorization
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

  const stats = await getGlobalStats();
  stats.downloadsCount = 0;
  await stats.save();
  
  return {
    success: true,
    message: 'Contador de downloads resetado com sucesso.',
    downloadsCount: 0
  };
});
