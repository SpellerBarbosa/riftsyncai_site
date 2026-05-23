import { connectToDatabase } from '../utils/mongodb';

export default defineEventHandler(async (event) => {
  // Executar apenas para rotas da API
  if (event.path.startsWith('/api')) {
    try {
      await connectToDatabase();
    } catch (err: any) {
      throw createError({
        statusCode: 500,
        statusMessage: `Erro de conexão com o banco de dados: ${err.message || err}`,
      });
    }
  }
});
