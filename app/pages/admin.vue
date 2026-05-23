<template>
  <div class="min-h-screen bg-[#010A13] text-gray-200 font-sans py-12 px-4 sm:px-6 lg:px-8 selection:bg-hextech-magic/30 selection:text-white">
    
    <!-- 1. LOGIN CONTAINER -->
    <div v-if="!isAuthorized" class="max-w-md mx-auto my-24 bg-[#091428]/80 border border-hextech-gold/30 rounded-xl p-8 shadow-2xl backdrop-blur">
      <div class="text-center mb-8">
        <h1 class="text-xl font-extrabold text-white tracking-widest uppercase font-mono mb-2">
          RIFT SYNC AI
        </h1>
        <p class="text-xs text-hextech-gold font-bold uppercase tracking-wider">Painel Administrativo</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label class="block text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-2 font-mono">
            Senha do Administrador
          </label>
          <input 
            v-model="loginPassword" 
            type="password" 
            placeholder="Digite a senha administrativa" 
            required
            class="w-full px-4 py-3 bg-[#010A13] border border-hextech-panel hover:border-hextech-gold/40 focus:border-hextech-gold text-white text-xs rounded focus:outline-none transition-all text-center font-mono tracking-widest"
          />
        </div>

        <button 
          type="submit" 
          :disabled="loading"
          class="w-full py-3 bg-gradient-to-r from-hextech-gold to-amber-600 text-hextech-darker font-black text-xs uppercase tracking-widest rounded hover:from-hextech-goldHover hover:to-hextech-gold transition-all duration-300 shadow-[0_0_15px_rgba(200,170,110,0.3)] disabled:opacity-50"
        >
          {{ loading ? 'VERIFICANDO...' : 'Entrar no Painel' }}
        </button>
      </form>

      <div v-if="loginError" class="mt-4 p-2.5 rounded bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold text-center font-mono">
        {{ loginError }}
      </div>
      <p class="mt-6 text-center text-[10px] text-gray-500 font-mono">
        * A senha padrão inicial é "admin". Mude após acessar o painel.
      </p>
    </div>

    <!-- 2. MAIN DASHBOARD CONTENT -->
    <div v-else class="max-w-7xl mx-auto space-y-8">
      
      <!-- Top Navigation Header -->
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-hextech-panel/50 pb-6 gap-4">
        <div>
          <h1 class="text-2xl font-black text-white font-sans flex items-center">
            Dashboard do Desenvolvedor
            <span class="ml-3 text-[10px] bg-hextech-gold/15 text-hextech-gold px-2 py-0.5 rounded font-mono border border-hextech-gold/30">ADMIN MODE</span>
          </h1>
          <p class="text-xs text-gray-400 mt-1">Gerencie downloads, faça triagem de relatos de bugs e responda feedbacks dos invocadores.</p>
        </div>
        <div class="flex items-center space-x-3">
          <NuxtLink to="/" class="text-xs text-gray-400 hover:text-white transition-colors bg-hextech-dark/40 border border-hextech-panel/40 px-3 py-2 rounded">
            Voltar para o Site
          </NuxtLink>
          <button @click="handleLogout" class="text-xs text-rose-400 hover:text-rose-300 transition-colors bg-rose-500/5 border border-rose-500/20 px-3 py-2 rounded">
            Sair
          </button>
        </div>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div class="bg-hextech-dark/30 border border-hextech-panel/50 p-6 rounded-lg relative overflow-hidden">
          <p class="text-[10px] text-gray-500 font-bold uppercase tracking-wider font-mono">Downloads Totais</p>
          <p class="text-3xl font-bold text-white font-mono mt-2">{{ downloadsCount }}</p>
          <div class="absolute -right-4 -bottom-4 text-hextech-gold/5 pointer-events-none">
            <svg class="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </div>
        </div>

        <div class="bg-hextech-dark/30 border border-hextech-panel/50 p-6 rounded-lg relative overflow-hidden">
          <p class="text-[10px] text-gray-500 font-bold uppercase tracking-wider font-mono">Total de Relatórios / Bugs</p>
          <p class="text-3xl font-bold text-hextech-magic font-mono mt-2">{{ comments.length }}</p>
          <div class="absolute -right-4 -bottom-4 text-hextech-magic/5 pointer-events-none">
            <svg class="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
        </div>

        <div class="bg-hextech-dark/30 border border-hextech-panel/50 p-6 rounded-lg relative overflow-hidden">
          <p class="text-[10px] text-gray-500 font-bold uppercase tracking-wider font-mono">Bugs / Relatos Pendentes</p>
          <p class="text-3xl font-bold text-amber-500 font-mono mt-2">{{ pendingCount }}</p>
          <div class="absolute -right-4 -bottom-4 text-amber-500/5 pointer-events-none">
            <svg class="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        <!-- Left Side: Moderation list -->
        <div class="lg:col-span-2 space-y-6">
          <div class="bg-hextech-dark/30 border border-hextech-panel/50 rounded-lg overflow-hidden">
            <!-- Filter tabs -->
            <div class="bg-[#091428] px-6 py-4 border-b border-hextech-panel/50 flex flex-wrap justify-between items-center gap-4">
              <span class="text-xs font-bold text-gray-300 uppercase tracking-widest font-mono">Triagem de Feedbacks & Bugs</span>
              
              <div class="flex space-x-2 text-xs">
                <button 
                  @click="activeFilter = 'all'" 
                  :class="['px-3 py-1.5 rounded font-mono', activeFilter === 'all' ? 'bg-hextech-magic text-hextech-darker font-bold' : 'text-gray-400 hover:bg-hextech-dark/50']"
                >
                  Todos ({{ comments.length }})
                </button>
                <button 
                  @click="activeFilter = 'pending'" 
                  :class="['px-3 py-1.5 rounded font-mono', activeFilter === 'pending' ? 'bg-amber-500 text-hextech-darker font-bold' : 'text-gray-400 hover:bg-hextech-dark/50']"
                >
                  Pendentes ({{ pendingCount }})
                </button>
                <button 
                  @click="activeFilter = 'approved'" 
                  :class="['px-3 py-1.5 rounded font-mono', activeFilter === 'approved' ? 'bg-emerald-500 text-hextech-darker font-bold' : 'text-gray-400 hover:bg-hextech-dark/50']"
                >
                  Aprovados ({{ comments.length - pendingCount }})
                </button>
              </div>
            </div>

            <!-- List -->
            <div class="p-6 divide-y divide-hextech-panel/20 space-y-6">
              <div v-if="filteredComments.length === 0" class="text-center py-12 text-xs text-gray-500 font-mono">
                Nenhum relato ou bug nesta lista.
              </div>

              <div 
                v-else
                v-for="comment in filteredComments" 
                :key="comment.id"
                class="pt-6 first:pt-0 space-y-3"
              >
                <div class="flex flex-wrap justify-between items-center gap-2">
                  <div class="flex items-center space-x-3">
                    <span class="text-xs font-bold text-gray-200">{{ comment.author }}</span>
                    <span :class="getCategoryBadgeClass(comment.category)" class="text-[9px] font-bold px-1.5 py-0.5 rounded font-mono border">
                      {{ getCategoryLabel(comment.category) }}
                    </span>
                    <span :class="['text-[9px] font-bold px-1.5 py-0.5 rounded font-mono', comment.approved ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20']">
                      {{ comment.approved ? 'EXIBIDO' : 'PENDENTE' }}
                    </span>
                  </div>
                  <span class="text-[10px] text-gray-500 font-mono">{{ formatDate(comment.timestamp) }}</span>
                </div>

                <p class="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans bg-[#010A13]/40 p-3 rounded border border-hextech-panel/30">
                  {{ comment.content }}
                </p>

                <!-- Current Reply (if exists) -->
                <div v-if="comment.reply" class="p-3 bg-hextech-gold/5 border-l border-hextech-gold/40 rounded text-xs text-gray-400 font-sans italic">
                  <span class="font-bold text-hextech-gold not-italic">Resposta / Status:</span> "{{ comment.reply }}"
                </div>

                <!-- Action Controls -->
                <div class="flex flex-wrap justify-between items-center gap-3 pt-2">
                  <div class="flex space-x-2">
                    <button 
                      v-if="!comment.approved"
                      @click="moderateComment(comment.id, 'approve')"
                      class="px-3 py-1.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 text-[10px] uppercase font-bold tracking-widest rounded border border-emerald-500/30 transition-colors"
                    >
                      Aprovar Exibição
                    </button>
                    <button 
                      @click="moderateComment(comment.id, 'delete')"
                      class="px-3 py-1.5 bg-rose-500/20 hover:bg-rose-500/30 text-rose-400 text-[10px] uppercase font-bold tracking-widest rounded border border-rose-500/30 transition-colors"
                    >
                      Remover
                    </button>
                  </div>

                  <!-- Reply Action Input Trigger -->
                  <div class="w-full sm:w-auto flex items-center space-x-2 flex-grow sm:flex-grow-0">
                    <input 
                      v-model="repliesText[comment.id]" 
                      type="text" 
                      placeholder="Responder ou atualizar status (ex: Corrigido)..." 
                      class="px-2.5 py-1.5 bg-[#010A13] border border-hextech-panel text-white text-[11px] rounded focus:outline-none focus:border-hextech-gold flex-grow sm:w-64"
                    />
                    <button 
                      @click="submitReply(comment.id)"
                      class="px-3 py-1.5 bg-hextech-gold text-hextech-darker hover:bg-hextech-goldHover text-[10px] uppercase font-black tracking-widest rounded transition-colors"
                    >
                      Atualizar
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- Right Side: Change Password & Details -->
        <div class="space-y-6">
          
          <!-- Password Change card -->
          <div class="bg-hextech-dark/30 border border-hextech-panel/50 p-6 rounded-lg">
            <h3 class="text-xs font-bold text-hextech-gold mb-4 uppercase tracking-widest font-mono">Alterar Senha</h3>
            
            <form @submit.prevent="changePassword" class="space-y-4">
              <div>
                <label class="block text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-1.5 font-mono">Senha Atual</label>
                <input 
                  v-model="oldPassword" 
                  type="password" 
                  required
                  class="w-full px-3 py-2 bg-[#010A13] border border-hextech-panel text-white text-xs rounded focus:outline-none focus:border-hextech-gold transition-colors font-mono"
                />
              </div>

              <div>
                <label class="block text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-1.5 font-mono">Nova Senha</label>
                <input 
                  v-model="newPassword" 
                  type="password" 
                  required
                  class="w-full px-3 py-2 bg-[#010A13] border border-hextech-panel text-white text-xs rounded focus:outline-none focus:border-hextech-gold transition-colors font-mono"
                />
              </div>

              <div>
                <label class="block text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-1.5 font-mono">Confirmar Nova Senha</label>
                <input 
                  v-model="confirmPassword" 
                  type="password" 
                  required
                  class="w-full px-3 py-2 bg-[#010A13] border border-hextech-panel text-white text-xs rounded focus:outline-none focus:border-hextech-gold transition-colors font-mono"
                />
              </div>

              <button 
                type="submit" 
                :disabled="passwordLoading"
                class="w-full py-2.5 bg-gradient-to-r from-hextech-gold to-amber-600 text-hextech-darker font-extrabold text-[10px] uppercase tracking-widest rounded hover:from-hextech-goldHover hover:to-hextech-gold transition-all duration-300 disabled:opacity-50"
              >
                {{ passwordLoading ? 'ALTERANDO...' : 'Alterar Senha' }}
              </button>
            </form>

            <div v-if="passwordSuccess" class="mt-3 p-2 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-semibold text-center">
              Senha alterada com sucesso!
            </div>
            <div v-if="passwordError" class="mt-3 p-2 rounded bg-rose-500/10 border border-rose-500/30 text-rose-400 text-[10px] font-semibold text-center font-mono">
              {{ passwordError }}
            </div>
          </div>

          <!-- Documentation note -->
          <div class="bg-[#091428]/40 border border-hextech-panel/40 p-6 rounded-lg text-xs text-gray-400 space-y-2 leading-relaxed">
            <h4 class="font-bold text-gray-300">Como funciona a sincronização?</h4>
            <p>
              As alterações feitas no painel são salvas em tempo real no banco de dados do MongoDB.
            </p>
            <p>
              Qualquer resposta ou status enviado aprova automaticamente o relato correspondente, tornando-o visível na Central de Relatos pública com o selo oficial de resposta do desenvolvedor.
            </p>
          </div>
          
        </div>

      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

interface Comment {
  id: string;
  author: string;
  content: string;
  category?: string;
  timestamp: string;
  approved: boolean;
  reply: string | null;
}

// Authorization states
const isAuthorized = ref(false);
const loginPassword = ref('');
const activePassword = ref('');
const loading = ref(false);
const loginError = ref('');

// DB Statistics
const downloadsCount = ref(0);
const comments = ref<Comment[]>([]);
const pendingCount = computed(() => comments.value.filter(c => !c.approved).length);

// Change password state
const oldPassword = ref('');
const newPassword = ref('');
const confirmPassword = ref('');
const passwordLoading = ref(false);
const passwordSuccess = ref(false);
const passwordError = ref('');

// Filter Tab
const activeFilter = ref<'all' | 'pending' | 'approved'>('all');

// Store active replies text per comment ID
const repliesText = ref<Record<string, string>>({});

const filteredComments = computed(() => {
  if (activeFilter.value === 'pending') {
    return comments.value.filter(c => !c.approved);
  }
  if (activeFilter.value === 'approved') {
    return comments.value.filter(c => c.approved);
  }
  return comments.value;
});

// Load auth state from session
onMounted(() => {
  const cachedPass = window.sessionStorage.getItem('admin_auth_pass');
  if (cachedPass) {
    activePassword.value = cachedPass;
    isAuthorized.value = true;
    fetchAdminData();
  }
});

const handleLogin = async () => {
  loading.value = true;
  loginError.value = '';
  try {
    const data: any = await $fetch('/api/comments', {
      headers: {
        Authorization: loginPassword.value
      }
    });

    if (data && data.success) {
      activePassword.value = loginPassword.value;
      window.sessionStorage.setItem('admin_auth_pass', loginPassword.value);
      isAuthorized.value = true;
      comments.value = data.comments;
      downloadsCount.value = data.downloadsCount;
      loginPassword.value = '';
    }
  } catch (err: any) {
    loginError.value = err.data?.statusMessage || 'Senha inválida.';
  } finally {
    loading.value = false;
  }
};

const handleLogout = () => {
  window.sessionStorage.removeItem('admin_auth_pass');
  activePassword.value = '';
  isAuthorized.value = false;
  comments.value = [];
};

const fetchAdminData = async () => {
  try {
    const data: any = await $fetch('/api/comments', {
      headers: {
        Authorization: activePassword.value
      }
    });
    if (data && data.success) {
      comments.value = data.comments;
      downloadsCount.value = data.downloadsCount;
    }
  } catch (err) {
    console.error('Error loading admin data:', err);
    // If unauthorized, clear session
    handleLogout();
  }
};

const moderateComment = async (id: string, action: 'approve' | 'delete') => {
  try {
    const res: any = await $fetch('/api/moderate', {
      method: 'POST',
      headers: {
        Authorization: activePassword.value
      },
      body: { id, action }
    });

    if (res && res.success) {
      await fetchAdminData();
    }
  } catch (err) {
    console.error('Moderation failed:', err);
  }
};

const submitReply = async (id: string) => {
  const replyText = repliesText.value[id]?.trim();
  if (!replyText) return;

  try {
    const res: any = await $fetch('/api/moderate', {
      method: 'POST',
      headers: {
        Authorization: activePassword.value
      },
      body: {
        id,
        action: 'reply',
        replyContent: replyText
      }
    });

    if (res && res.success) {
      repliesText.value[id] = '';
      await fetchAdminData();
    }
  } catch (err) {
    console.error('Submitting reply failed:', err);
  }
};

const changePassword = async () => {
  passwordError.value = '';
  passwordSuccess.value = false;

  if (newPassword.value !== confirmPassword.value) {
    passwordError.value = 'A confirmação não bate com a nova senha.';
    return;
  }

  if (oldPassword.value !== activePassword.value) {
    passwordError.value = 'Senha atual incorreta.';
    return;
  }

  passwordLoading.value = true;
  try {
    const res: any = await $fetch('/api/change-password', {
      method: 'POST',
      headers: {
        Authorization: activePassword.value
      },
      body: {
        newPassword: newPassword.value
      }
    });

    if (res && res.success) {
      activePassword.value = newPassword.value;
      window.sessionStorage.setItem('admin_auth_pass', newPassword.value);
      passwordSuccess.value = true;
      oldPassword.value = '';
      newPassword.value = '';
      confirmPassword.value = '';
      setTimeout(() => {
        passwordSuccess.value = false;
      }, 5000);
    }
  } catch (err: any) {
    passwordError.value = err.data?.statusMessage || 'Erro ao alterar senha.';
  } finally {
    passwordLoading.value = false;
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
