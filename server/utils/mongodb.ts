import mongoose from 'mongoose';

let cachedPromise: Promise<typeof mongoose> | null = null;

export async function connectToDatabase() {
  const config = useRuntimeConfig();
  const uri = config.mongodbUri;

  if (!uri) {
    throw new Error('Database connection string is missing (MONGODB_URI is not set)');
  }

  // Ready states: 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
  if (mongoose.connection.readyState === 1) {
    return mongoose;
  }

  if (!cachedPromise) {
    console.log('[MongoDB] Connecting to database...');
    
    const opts = {
      dbName: 'riftsync',
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 10s/30s
      maxPoolSize: 10,                // Reusable connection pool size
    };

    cachedPromise = mongoose.connect(uri, opts).then((conn) => {
      console.log('[MongoDB] Connection established successfully.');
      return conn;
    }).catch((err) => {
      console.error('[MongoDB] Connection error:', err);
      cachedPromise = null; // Reset cached promise on failure to retry on next request
      throw err;
    });
  } else {
    console.log('[MongoDB] Connection is already in progress, awaiting...');
  }

  return cachedPromise;
}
