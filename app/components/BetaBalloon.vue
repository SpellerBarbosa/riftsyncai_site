<template>
  <Transition name="bounce">
    <div v-if="isVisible" class="floating-balloon fixed bottom-6 right-6 z-50 max-w-sm w-[90vw] bg-[#091428]/95 backdrop-blur border border-hextech-magic/40 rounded-xl shadow-[0_10px_25px_rgba(0,255,255,0.2)] p-4 sm:p-5 flex flex-col gap-3">
      <div class="flex justify-between items-start">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-hextech-magic animate-pulse"></span>
          <h4 class="text-xs font-bold text-hextech-magic uppercase tracking-widest font-mono">{{ $t('beta.title') }}</h4>
        </div>
        <button @click="dismiss" class="text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full p-1" :aria-label="$t('beta.closeLabel')">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
        <p>{{ $t('beta.message1') }}</p>
        <p class="mt-2">{{ $t('beta.message2') }}</p>
      </div>
      <div class="mt-2 flex justify-end">
        <button @click="scrollToFeedback" class="px-4 py-2 bg-gradient-to-r from-hextech-magic to-[#009b91] hover:from-hextech-magicHover hover:to-hextech-magic text-hextech-darker text-[10px] font-extrabold uppercase tracking-widest rounded shadow-lg transition-all transform hover:scale-105 active:scale-95">
          {{ $t('beta.sendFeedback') }}
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const isVisible = ref(false);
const router = useRouter();

onMounted(() => {
  const dismissed = sessionStorage.getItem('beta_balloon_dismissed');
  if (!dismissed) {
    setTimeout(() => { isVisible.value = true; }, 1500);
  }
});

const dismiss = () => {
  isVisible.value = false;
  sessionStorage.setItem('beta_balloon_dismissed', 'true');
};

const scrollToFeedback = () => {
  dismiss();
  router.push({ path: '/', hash: '#feedback' }).then(() => {
    const element = document.getElementById('feedback');
    if (element) { element.scrollIntoView({ behavior: 'smooth' }); }
  });
};
</script>

<style scoped>
.floating-balloon { animation: float 4s ease-in-out infinite; }
@keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-8px); } 100% { transform: translateY(0px); } }
.bounce-enter-active { animation: bounce-in 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.bounce-leave-active { animation: bounce-in 0.3s reverse ease-in; }
@keyframes bounce-in { 0% { transform: translateY(50px) scale(0.9); opacity: 0; } 100% { transform: translateY(0) scale(1); opacity: 1; } }
</style>
