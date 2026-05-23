import Comment from '../models/Comment';
import { getGlobalStats } from '../models/Stat';
import { verifyToken } from '../utils/jwt';

export default defineEventHandler(async (event) => {
  const stats = await getGlobalStats();
  const sessionToken = getCookie(event, 'admin_session');
  
  // Sort comments by timestamp (newest first)
  const sortedComments = await Comment.find().sort({ timestamp: -1 });

  let isAuthorized = false;
  if (sessionToken) {
    const payload = verifyToken(sessionToken);
    if (payload && payload.role === 'admin') {
      isAuthorized = true;
    }
  }

  // Check if admin session is valid
  if (isAuthorized) {
    return {
      success: true,
      admin: true,
      comments: sortedComments.map(c => ({
        id: c._id.toString(),
        author: c.author,
        content: c.content,
        category: c.category,
        timestamp: c.timestamp,
        approved: c.approved,
        reply: c.reply
      })),
      downloadsCount: stats.downloadsCount,
      visitsCount: stats.visitsCount || 0,
      uniqueVisitsCount: stats.uniqueVisitsCount || 0
    };
  }

  // Return only approved comments for public view
  const publicComments = sortedComments.filter(c => c.approved);
  return {
    success: true,
    comments: publicComments.map(c => ({
      id: c._id.toString(),
      author: c.author,
      content: c.content,
      category: c.category,
      timestamp: c.timestamp,
      approved: c.approved,
      reply: c.reply
    })),
    downloadsCount: stats.downloadsCount
  };
});
