import { connectToDatabase } from '../utils/mongodb';

export default defineNitroPlugin(async (nitroApp) => {
  try {
    // Tenta estabelecer a conexão inicial durante o startup/cold start
    await connectToDatabase();
  } catch (err) {
    console.error('[MongoDB Plugin] Erro ao inicializar conexão no startup:', err);
  }
});
