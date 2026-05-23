import mongoose from 'mongoose';

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
    default: 'admin' // Em produção o admin deve logar e alterar isso para virar um hash
  },
  downloadsCount: {
    type: Number,
    default: 0
  }
});

const Stat = mongoose.models.Stat || mongoose.model('Stat', StatSchema);

// Seeding inicial (se não existir, cria o padrão)
export async function getGlobalStats() {
  let stats = await Stat.findOne({ settingsId: 'global_settings' });
  if (!stats) {
    stats = await Stat.create({
      settingsId: 'global_settings',
      adminPassword: 'admin',
      downloadsCount: 0
    });
  }
  return stats;
}

export default Stat;
