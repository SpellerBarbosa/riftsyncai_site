import mongoose from 'mongoose';

export default defineNitroPlugin(async (nitroApp) => {
  const config = useRuntimeConfig();

  try {
    const uri = config.mongodbUri;
    
    // Check if the connection is already established
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(uri, {
        dbName: 'riftsync',
      });
      console.log('[MongoDB] Conectado com sucesso ao banco de dados.');
    }
  } catch (err) {
    console.error('[MongoDB] Erro ao conectar ao banco de dados:', err);
  }
});
