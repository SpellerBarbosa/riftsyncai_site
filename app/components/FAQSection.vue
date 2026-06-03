<template>
  <section id="faq" class="py-28 bg-[#091428]/40 relative overflow-hidden">
    <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-hextech-magic/3 rounded-full filter blur-[120px] pointer-events-none"></div>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-20">
        <h2 class="text-hextech-magic font-extrabold tracking-widest uppercase text-xs mb-3 font-mono">{{ $t('faq.sectionTag') }}</h2>
        <p class="text-3xl leading-9 font-extrabold tracking-tight text-white sm:text-5xl font-sans">{{ $t('faq.sectionTitle') }}</p>
        <p class="mt-4 text-base text-gray-400">{{ $t('faq.sectionDescription') }}</p>
      </div>

      <div class="space-y-4">
        <div v-for="(faq, idx) in faqs" :key="idx" class="border border-hextech-panel/60 rounded bg-hextech-dark/50 overflow-hidden transition-all duration-300">
          <button @click="toggle(idx)" class="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-hextech-dark/80 transition-colors">
            <span class="font-bold text-gray-200 text-sm sm:text-base pr-4">{{ $t(faq.questionKey) }}</span>
            <svg :class="['h-5 w-5 text-hextech-gold transform transition-transform duration-300', activeIndex === idx ? 'rotate-180' : '']" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div v-show="activeIndex === idx" class="px-6 pb-6 pt-2 border-t border-hextech-panel/30 text-gray-400 text-xs sm:text-sm leading-relaxed">
            {{ $t(faq.answerKey) }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const activeIndex = ref<number | null>(0);

const toggle = (idx: number) => {
  activeIndex.value = activeIndex.value === idx ? null : idx;
};

const faqs = [
  { questionKey: 'faq.q1', answerKey: 'faq.a1' },
  { questionKey: 'faq.q2', answerKey: 'faq.a2' },
  { questionKey: 'faq.q3', answerKey: 'faq.a3' },
  { questionKey: 'faq.q4', answerKey: 'faq.a4' },
  { questionKey: 'faq.q5', answerKey: 'faq.a5' },
  { questionKey: 'faq.q6', answerKey: 'faq.a6' },
  { questionKey: 'faq.q7', answerKey: 'faq.a7' },
];
</script>
