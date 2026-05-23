import Comment from '../models/Comment';
import { sanitizeHTML, checkRateLimit } from '../utils/security';

export default defineEventHandler(async (event) => {
  // --- Rate Limiting ---
  // Get IP address from headers or socket
  const ip = getHeader(event, 'x-forwarded-for') || event.node.req.socket.remoteAddress || 'unknown';
  // Allow max 3 comments per 10 minutes per IP
  if (!checkRateLimit(ip as string, 3, 10 * 60 * 1000)) {
    throw createError({
      statusCode: 429,
      statusMessage: 'Muitas requisições. Por favor, aguarde alguns minutos antes de enviar outro comentário.'
    });
  }

  const body = await readBody(event);
  
  if (!body || !body.content) {
    throw createError({
      statusCode: 400,
      statusMessage: 'O conteúdo do comentário é obrigatório.'
    });
  }

  // --- Sanitization (XSS Prevention) ---
  const safeAuthor = sanitizeHTML((body.author || '').trim()) || 'Invocador Anônimo';
  const safeContent = sanitizeHTML(body.content.trim());
  
  // Validate category
  const allowedCategories = ['bug', 'sugestao', 'critica', 'agradecimento'];
  const category = allowedCategories.includes(body.category) ? body.category : 'sugestao';

  const newComment = await Comment.create({
    author: safeAuthor,
    content: safeContent,
    category: category,
    approved: false,
    reply: null
  });

  return {
    success: true,
    comment: {
      id: newComment._id.toString(),
      author: newComment.author,
      content: newComment.content,
      category: newComment.category,
      timestamp: newComment.timestamp,
      approved: newComment.approved,
      reply: newComment.reply
    }
  };
});
