<template>
  <section id="feedback" class="py-24 bg-[#010A13] relative overflow-hidden">
    <!-- Ambient cyan glow -->
    <div class="absolute -top-1/4 left-1/4 w-[350px] h-[350px] bg-hextech-magic/5 rounded-full filter blur-[100px] pointer-events-none"></div>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div class="text-center mb-16">
        <h2 class="text-hextech-magic font-extrabold tracking-widest uppercase text-xs mb-3 font-mono">
          FEEDBACK & BUGS ENCONTRADOS
        </h2>
        <p class="text-3xl leading-9 font-extrabold tracking-tight text-white sm:text-4xl font-sans">
          Central de Relatos do Beta
        </p>
        <p class="mt-3 text-sm text-gray-400">
          Veja o que outros invocadores reportaram no Beta e envie seu feedback ou bug encontrado.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        <!-- Left Side: Comments List -->
        <div class="md:col-span-7 space-y-6">
          <div v-if="loadingComments" class="text-center py-10">
            <span class="text-xs text-gray-500 font-mono animate-pulse">Carregando relatos...</span>
          </div>

          <div v-else-if="comments.length === 0" class="text-center py-10 bg-hextech-dark/20 border border-hextech-panel/40 rounded p-6">
            <p class="text-sm text-gray-500 font-sans">Nenhum feedback ou bug publicado ainda. Seja o primeiro!</p>
          </div>

          <div 
            v-else
            v-for="comment in comments" 
            :key="comment.id"
            class="p-5 rounded bg-hextech-dark/40 border border-hextech-panel/60 space-y-3 transition-all hover:border-hextech-panel"
          >
            <div class="flex justify-between items-center">
              <span class="text-xs font-bold text-gray-200 flex flex-wrap items-center gap-y-1">
                <span class="w-2 h-2 rounded-full bg-hextech-gold mr-2 inline-block"></span>
                {{ comment.author }}
                <span :class="getCategoryBadgeClass(comment.category)" class="ml-2 text-[8px] font-bold px-1.5 py-0.5 rounded font-mono border">
                  {{ getCategoryLabel(comment.category) }}
                </span>
              </span>
              <span class="text-[10px] text-gray-500 font-mono">{{ formatDate(comment.timestamp) }}</span>
            </div>
            <p class="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">{{ comment.content }}</p>

            <!-- Dev Reply Box -->
            <div 
              v-if="comment.reply" 
              class="mt-3 p-3.5 rounded bg-hextech-gold/5 border-l-2 border-hextech-gold space-y-1"
            >
              <div class="text-[10px] font-bold text-hextech-gold uppercase tracking-wider font-mono">
                Resposta do Desenvolvedor / Status
              </div>
              <p class="text-xs text-gray-400 leading-relaxed">{{ comment.reply }}</p>
            </div>
          </div>
        </div>

        <!-- Right Side: Submit Comment Form -->
        <div class="md:col-span-5 bg-hextech-dark/40 border border-hextech-panel/60 p-6 rounded-lg">
          <h3 class="text-sm font-bold text-white mb-4 uppercase tracking-wider font-sans">Enviar Relato / Bug</h3>
          
          <form @submit.prevent="submitComment" class="space-y-4">
            <div>
              <label class="block text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1.5 font-mono">
                Nome do Invocador
              </label>
              <input 
                v-model="newAuthor" 
                type="text" 
                placeholder="Ex: FakerDaGama" 
                required
                class="w-full px-3 py-2 bg-[#010A13] border border-hextech-panel text-white text-xs rounded focus:outline-none focus:border-hextech-magic transition-colors font-mono"
              />
            </div>

            <div>
              <label class="block text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1.5 font-mono">
                Categoria do Relato
              </label>
              <select 
                v-model="newCategory"
                required
                class="w-full px-3 py-2 bg-[#010A13] border border-hextech-panel text-white text-xs rounded focus:outline-none focus:border-hextech-magic transition-colors font-mono cursor-pointer"
              >
                <option value="bug">Bug</option>
                <option value="sugestao">Sugestão</option>
                <option value="critica">Crítica</option>
                <option value="agradecimento">Agradecimentos</option>
              </select>
            </div>

            <div>
              <label class="block text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1.5 font-mono">
                Descrição do Relato ou Bug
              </label>
              <textarea 
                v-model="newContent" 
                rows="4" 
                placeholder="Descreva detalhadamente o feedback ou o bug encontrado..." 
                required
                class="w-full px-3 py-2 bg-[#010A13] border border-hextech-panel text-white text-xs rounded focus:outline-none focus:border-hextech-magic transition-colors resize-none font-sans"
              ></textarea>
            </div>

            <p class="text-[10px] text-gray-500 leading-relaxed">
              * Para manter a integridade, todos os relatos passam por análise prévia antes de ficarem visíveis no painel público.
            </p>

            <button 
              type="submit" 
              :disabled="submitting"
              class="w-full py-2.5 bg-gradient-to-r from-hextech-magic to-[#009b91] hover:from-hextech-magicHover hover:to-hextech-magic text-hextech-darker font-extrabold text-xs uppercase tracking-widest rounded transition-all duration-300 disabled:opacity-50"
            >
              {{ submitting ? 'ENVIANDO...' : 'Enviar Relatório' }}
            </button>
          </form>

          <div v-if="formSuccess" class="mt-4 p-2.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold text-center">
            Relato enviado com sucesso! Aguardando moderação e análise.
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Comment {
  id: string;
  author: string;
  content: string;
  category?: string;
  timestamp: string;
  approved: boolean;
  reply: string | null;
}

const comments = ref<Comment[]>([]);
const loadingComments = ref(true);
const submitting = ref(false);
const formSuccess = ref(false);

const newAuthor = ref('');
const newContent = ref('');
const newCategory = ref('bug');

const fetchComments = async () => {
  try {
    const data: any = await $fetch('/api/comments');
    if (data && data.comments) {
      comments.value = data.comments;
    }
  } catch (err) {
    console.error('Error fetching comments:', err);
  } finally {
    loadingComments.value = false;
  }
};

onMounted(() => {
  fetchComments();
});

const submitComment = async () => {
  submitting.value = true;
  formSuccess.value = false;
  try {
    const res: any = await $fetch('/api/comments', {
      method: 'POST',
      body: {
        author: newAuthor.value,
        content: newContent.value,
        category: newCategory.value
      }
    });

    if (res && res.success) {
      newAuthor.value = '';
      newContent.value = '';
      newCategory.value = 'bug'; // Reset to default
      formSuccess.value = true;
      // Refresh list, though new comment is not visible until approved
      await fetchComments();
      setTimeout(() => {
        formSuccess.value = false;
      }, 5000);
    }
  } catch (err) {
    console.error('Error posting comment:', err);
  } finally {
    submitting.value = false;
  }
};

const formatDate = (isoStr: string) => {
  try {
    const date = new Date(isoStr);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  } catch (e) {
    return 'Data desconhecida';
  }
};

const getCategoryLabel = (category?: string) => {
  switch (category) {
    case 'bug': return 'Bug';
    case 'sugestao': return 'Sugestão';
    case 'critica': return 'Crítica';
    case 'agradecimento': return 'Agradecimentos';
    default: return 'Geral';
  }
};

const getCategoryBadgeClass = (category?: string) => {
  switch (category) {
    case 'bug': return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
    case 'sugestao': return 'bg-hextech-magic/10 text-hextech-magic border-hextech-magic/20';
    case 'critica': return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
    case 'agradecimento': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
    default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
  }
};
</script>
