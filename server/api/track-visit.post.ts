import { getGlobalStats } from '../models/Stat';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const stats = await getGlobalStats();

  // Increment total pageviews
  stats.visitsCount = (stats.visitsCount || 0) + 1;

  // Increment unique visitors if flag is true
  if (body && body.isUnique) {
    stats.uniqueVisitsCount = (stats.uniqueVisitsCount || 0) + 1;
  }

  await stats.save();

  return {
    success: true
  };
});
