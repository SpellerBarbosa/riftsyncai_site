import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
    default: 'Invocador Anônimo'
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['bug', 'sugestao', 'critica', 'agradecimento'],
    default: 'sugestao'
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  approved: {
    type: Boolean,
    default: false
  },
  reply: {
    type: String,
    default: null
  }
});

// Verifique se o modelo já existe para evitar erros de recompilação do Nuxt/Nitro
export default mongoose.models.Comment || mongoose.model('Comment', CommentSchema);
