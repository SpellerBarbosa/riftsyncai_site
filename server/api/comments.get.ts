import Comment from '../models/Comment';
import { getGlobalStats } from '../models/Stat';
import { verifyPassword } from '../utils/security';

export default defineEventHandler(async (event) => {
  const stats = await getGlobalStats();
  const authHeader = getHeader(event, 'authorization');
  
  // Sort comments by timestamp (newest first)
  const sortedComments = await Comment.find().sort({ timestamp: -1 });

  // Check if admin password is sent and correct
  if (authHeader && verifyPassword(authHeader, stats.adminPassword)) {
    return {
      success: true,
      comments: sortedComments.map(c => ({
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
