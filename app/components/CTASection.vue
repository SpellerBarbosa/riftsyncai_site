<template>
  <section id="cta-final" class="py-28 relative overflow-hidden bg-[#010A13]">
    <!-- Ambient gold and magic glow background -->
    <div class="absolute inset-0 z-0">
      <div class="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-hextech-magic/10 rounded-full mix-blend-screen filter blur-[130px] animate-pulse-slow"></div>
      <div class="absolute top-0 left-1/4 w-[400px] h-[400px] bg-hextech-gold/10 rounded-full mix-blend-screen filter blur-[130px]"></div>
    </div>

    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <h2 class="text-3xl md:text-6xl font-extrabold mb-6 text-white tracking-tight leading-[1.1] font-sans">
        Pronto para sair do <span class="text-transparent bg-clip-text bg-gradient-to-r from-hextech-gold to-amber-300">Elo Hell</span>?
      </h2>
      <p class="text-base sm:text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
        Junte-se a milhares de jogadores ativos que já melhoraram sua winrate média em 12.4%. Jogue com o copiloto definitivo e domine o Rift.
      </p>

      <!-- Conversion Card -->
      <div class="p-8 md:p-12 rounded-xl bg-[#091428]/60 border border-hextech-gold/30 shadow-[0_0_50px_rgba(200,170,110,0.15)] max-w-3xl mx-auto backdrop-blur-md">
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
          <div class="text-left w-full md:w-auto">
            <h3 class="text-xl md:text-2xl font-bold text-hextech-gold mb-2 font-sans">Acesso Beta Gratuito</h3>
            <p class="text-xs text-gray-300 font-mono">
              <span class="text-hextech-magic font-bold">{{ downloadsCount }}</span> downloads já realizados nesta temporada.
            </p>
          </div>
          
          <div class="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <button 
              @click="triggerDownload"
              :disabled="loading"
              class="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-hextech-gold to-amber-600 text-hextech-darker font-black text-xs uppercase tracking-widest rounded hover:from-hextech-goldHover hover:to-hextech-gold transition-all duration-300 shadow-[0_0_20px_rgba(200,170,110,0.4)] disabled:opacity-50"
            >
              {{ loading ? 'INICIANDO...' : 'Baixar Cliente Beta (.EXE)' }}
            </button>
          </div>
        </div>

        <!-- Success Message -->
        <div v-if="success" class="mt-4 p-3 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
          Download iniciado com sucesso! O instalador do Rift Sync AI foi carregado.
        </div>

        <div class="mt-8 border-t border-hextech-panel/30 pt-6 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-[10px] text-gray-500 font-bold uppercase tracking-wider">
          <span class="flex items-center">
            <svg class="h-4.5 w-4.5 text-hextech-magic mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
            Instalação em 1 Clique
          </span>
          <span class="flex items-center">
            <svg class="h-4.5 w-4.5 text-hextech-magic mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
            Leve & Otimizado
          </span>
          <span class="flex items-center">
            <svg class="h-4.5 w-4.5 text-hextech-magic mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
            Anticheat Safe (100%)
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const downloadsCount = ref(0);
const loading = ref(false);
const success = ref(false);

const fetchStats = async () => {
  try {
    const data: any = await $fetch('/api/comments');
    if (data && typeof data.downloadsCount === 'number') {
      downloadsCount.value = data.downloadsCount;
    }
  } catch (err) {
    console.error('Failed to load stats:', err);
  }
};

onMounted(() => {
  fetchStats();
});

const triggerDownload = async () => {
  loading.value = true;
  try {
    const res: any = await $fetch('/api/download', { method: 'POST' });
    if (res && res.success) {
      downloadsCount.value = res.downloadsCount;
      success.value = true;
      
      // Trigger the download of the actual app installer from GitHub releases
      const link = document.createElement('a');
      link.href = 'https://github.com/SpellerBarbosa/riftsyncai/releases/download/v0.2.9/rift-sync-ai_0.2.9_x64-setup.exe';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  } catch (err) {
    console.error('Error during download request:', err);
  } finally {
    loading.value = false;
  }
};
</script>
