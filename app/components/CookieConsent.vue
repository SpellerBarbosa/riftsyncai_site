<template>
  <div>
    <!-- Ambient floating icon to reopen settings (only show when banner is closed) -->
    <button 
      v-if="!showBanner"
      @click="openSettings"
      aria-label="Configurações de Cookies"
      class="fixed bottom-4 left-4 z-40 h-10 w-10 rounded-full bg-[#091428]/90 border border-hextech-magic/40 text-hextech-magic hover:text-hextech-gold hover:border-hextech-gold/60 flex items-center justify-center shadow-[0_0_15px_rgba(10,200,185,0.2)] hover:shadow-[0_0_20px_rgba(200,170,110,0.4)] transition-all duration-300 group transform hover:scale-105"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
      <!-- Tooltip -->
      <span class="absolute left-12 bg-[#091428] border border-hextech-panel text-[10px] text-gray-300 font-bold font-mono tracking-wider px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap uppercase">
        Privacidade
      </span>
    </button>

    <!-- Main Consent Banner overlay -->
    <transition name="slide-up">
      <div 
        v-if="showBanner"
        class="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-gradient-to-t from-[#010a13] to-[#091428]/98 border-t border-hextech-gold/30 shadow-[0_-10px_40px_rgba(0,0,0,0.8)] backdrop-blur-md"
      >
        <div class="max-w-7xl mx-auto">
          <div class="lg:flex lg:items-center lg:justify-between lg:gap-8">
            <!-- Information text -->
            <div class="mb-6 lg:mb-0 lg:max-w-3xl">
              <h3 class="text-sm font-extrabold text-hextech-gold uppercase tracking-widest font-mono flex items-center gap-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-hextech-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Controle de Privacidade (LGPD)
              </h3>
              <p class="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                Nós usamos cookies para melhorar sua experiência, analisar tráfego e oferecer feedbacks personalizados de League of Legends. 
                Ao clicar em "Aceitar Todos", você concorda com o uso de cookies. Você também pode personalizar suas preferências clicando em "Gerenciar".
              </p>
            </div>

            <!-- Actions block -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button 
                @click="toggleCustomize"
                class="px-5 py-2.5 bg-hextech-panel/60 hover:bg-hextech-panel text-gray-300 hover:text-white border border-hextech-panel text-xs font-bold uppercase tracking-wider rounded transition-all duration-300 text-center"
              >
                {{ showCustomize ? 'Ocultar Opções' : 'Gerenciar' }}
              </button>
              <button 
                @click="acceptNecessary"
                class="px-5 py-2.5 bg-transparent hover:bg-rose-500/10 text-rose-400 hover:text-rose-300 border border-rose-500/30 hover:border-rose-500/50 text-xs font-bold uppercase tracking-wider rounded transition-all duration-300 text-center"
              >
                Apenas Essenciais
              </button>
              <button 
                @click="acceptAll"
                class="px-6 py-3 bg-gradient-to-r from-hextech-gold to-amber-600 hover:from-hextech-goldHover hover:to-hextech-gold text-hextech-darker font-black text-xs uppercase tracking-widest rounded transition-all duration-300 shadow-[0_0_15px_rgba(200,170,110,0.3)] hover:shadow-[0_0_20px_rgba(200,170,110,0.5)] text-center"
              >
                Aceitar Todos
              </button>
            </div>
          </div>

          <!-- Preferences customization menu (LGPD checkbox tree) -->
          <div 
            v-if="showCustomize"
            class="mt-6 pt-6 border-t border-hextech-panel/40 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in"
          >
            <!-- Essential -->
            <div class="bg-[#010a13]/50 border border-hextech-panel/40 rounded p-4 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-bold text-white uppercase tracking-wider font-mono">Essenciais</span>
                  <span class="text-[9px] bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5 rounded font-mono font-bold">OBRIGATÓRIO</span>
                </div>
                <p class="text-[11px] text-gray-400 leading-normal">
                  Necessários para o funcionamento básico do site, persistência de sessões administrativas e recursos de segurança contra ataques CSRF/XSS.
                </p>
              </div>
              <div class="mt-4 flex items-center justify-between">
                <span class="text-[10px] text-gray-500 font-mono">Cookies Essenciais</span>
                <input type="checkbox" checked disabled class="h-4 w-4 bg-[#091428] border-hextech-panel text-hextech-magic rounded focus:ring-hextech-magic accent-hextech-magic" />
              </div>
            </div>

            <!-- Performance / Analytics -->
            <div class="bg-[#010a13]/50 border border-hextech-panel/40 rounded p-4 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-bold text-white uppercase tracking-wider font-mono">Análise e Performance</span>
                  <span class="text-[9px] bg-hextech-magic/15 text-hextech-magic border border-hextech-magic/30 px-1.5 py-0.5 rounded font-mono font-bold">OPCIONAL</span>
                </div>
                <p class="text-[11px] text-gray-400 leading-normal">
                  Permitem monitorar o tráfego do site, número de downloads do assistente de voz e as páginas de maior interesse para melhorias do produto.
                </p>
              </div>
              <div class="mt-4 flex items-center justify-between">
                <span class="text-[10px] text-gray-300 font-mono">Habilitar Analytics</span>
                <input 
                  type="checkbox" 
                  v-model="consent.analytics"
                  class="h-4 w-4 bg-[#091428] border-hextech-panel text-hextech-magic rounded focus:ring-hextech-magic cursor-pointer accent-hextech-magic" 
                />
              </div>
            </div>

            <!-- Marketing -->
            <div class="bg-[#010a13]/50 border border-hextech-panel/40 rounded p-4 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-bold text-white uppercase tracking-wider font-mono">Marketing e Mídia</span>
                  <span class="text-[9px] bg-hextech-magic/15 text-hextech-magic border border-hextech-magic/30 px-1.5 py-0.5 rounded font-mono font-bold">OPCIONAL</span>
                </div>
                <p class="text-[11px] text-gray-400 leading-normal">
                  Utilizados para integrar campanhas de mídia social e exibir informativos relevantes sobre novos patches do League of Legends.
                </p>
              </div>
              <div class="mt-4 flex items-center justify-between">
                <span class="text-[10px] text-gray-300 font-mono">Habilitar Mídia</span>
                <input 
                  type="checkbox" 
                  v-model="consent.marketing"
                  class="h-4 w-4 bg-[#091428] border-hextech-panel text-hextech-magic rounded focus:ring-hextech-magic cursor-pointer accent-hextech-magic" 
                />
              </div>
            </div>

            <!-- Save Custom Settings Button -->
            <div class="md:col-span-3 flex justify-end mt-2">
              <button 
                @click="savePreferences"
                class="px-6 py-2 bg-hextech-magic text-hextech-darker hover:bg-hextech-magic/90 text-xs font-black uppercase tracking-widest rounded transition-all duration-300 shadow-[0_0_15px_rgba(10,200,185,0.2)]"
              >
                Salvar Preferências
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const showBanner = ref(false);
const showCustomize = ref(false);

const consent = ref({
  essential: true,
  analytics: true,
  marketing: true
});

onMounted(() => {
  // Check if consent has already been given
  const savedConsent = window.localStorage.getItem('riftsync_cookie_consent');
  if (!savedConsent) {
    // Show banner after 800ms delay for smooth loading effect
    setTimeout(() => {
      showBanner.value = true;
    }, 800);
  } else {
    try {
      consent.value = JSON.parse(savedConsent);
    } catch (e) {
      // Fallback if parsing fails
    }
  }
});

const toggleCustomize = () => {
  showCustomize.value = !showCustomize.value;
};

const openSettings = () => {
  showBanner.value = true;
  showCustomize.value = true;
};

const acceptAll = () => {
  consent.value = {
    essential: true,
    analytics: true,
    marketing: true
  };
  saveConsentToLocalStorage();
};

const acceptNecessary = () => {
  consent.value = {
    essential: true,
    analytics: false,
    marketing: false
  };
  saveConsentToLocalStorage();
};

const savePreferences = () => {
  consent.value.essential = true; // Always true
  saveConsentToLocalStorage();
};

const saveConsentToLocalStorage = () => {
  window.localStorage.setItem('riftsync_cookie_consent', JSON.stringify(consent.value));
  showBanner.value = false;
  showCustomize.value = false;
};
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.4s ease-out, opacity 0.4s ease-out;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
