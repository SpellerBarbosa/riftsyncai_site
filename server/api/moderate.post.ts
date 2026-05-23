import Comment from '../models/Comment';
import { getGlobalStats } from '../models/Stat';
import { verifyPassword } from '../utils/security';

export default defineEventHandler(async (event) => {
  const authHeader = getHeader(event, 'authorization');
  const stats = await getGlobalStats();

  // Validate admin authorization
  if (!authHeader || !verifyPassword(authHeader, stats.adminPassword)) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Não autorizado. Senha inválida.'
    });
  }

  const body = await readBody(event);
  if (!body || !body.id || !body.action) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID do comentário e ação são obrigatórios.'
    });
  }

  const comment = await Comment.findById(body.id);
  if (!comment) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Comentário não encontrado.'
    });
  }

  if (body.action === 'approve') {
    comment.approved = true;
    await comment.save();
  } else if (body.action === 'delete') {
    await Comment.findByIdAndDelete(body.id);
  } else if (body.action === 'reply') {
    comment.reply = (body.replyContent || '').trim() || null;
    comment.approved = true; // Auto-approve if replied to
    await comment.save();
  } else {
    throw createError({
      statusCode: 400,
      statusMessage: 'Ação inválida. Use "approve", "delete" ou "reply".'
    });
  }

  return {
    success: true
  };
});
