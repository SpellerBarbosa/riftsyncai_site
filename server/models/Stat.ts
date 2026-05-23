import mongoose from 'mongoose';
import { hashPassword } from '../utils/security';

const StatSchema = new mongoose.Schema({
  // Um ID fixo para ter apenas um documento de status global
  settingsId: {
    type: String,
    default: 'global_settings',
    unique: true
  },
  adminPassword: {
    type: String,
    required: true,
    default: () => hashPassword('Server150202-')
  },
  downloadsCount: {
    type: Number,
    default: 0
  },
  visitsCount: {
    type: Number,
    default: 0
  },
  uniqueVisitsCount: {
    type: Number,
    default: 0
  }
});

const Stat = (mongoose.models.Stat || mongoose.model('Stat', StatSchema)) as mongoose.Model<any>;

// Seeding inicial (se não existir, cria o padrão)
export async function getGlobalStats() {
  let stats = await Stat.findOne({ settingsId: 'global_settings' });
  if (!stats) {
    stats = await Stat.create({
      settingsId: 'global_settings',
      adminPassword: hashPassword('Server150202-'),
      downloadsCount: 0,
      visitsCount: 0,
      uniqueVisitsCount: 0
    });
  }
  return stats;
}

export default Stat;
