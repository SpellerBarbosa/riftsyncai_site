import { getGlobalStats } from '../models/Stat';

export default defineEventHandler(async (event) => {
  const stats = await getGlobalStats();
  stats.downloadsCount += 1;
  await stats.save();
  
  return {
    success: true,
    downloadsCount: stats.downloadsCount
  };
});
