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
    }
  } catch (err) {
    console.error('[MongoDB] Erro ao conectar ao banco de dados:', err);
  }
});
