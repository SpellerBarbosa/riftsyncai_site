<template>
  <section id="faq" class="py-28 bg-[#091428]/40 relative overflow-hidden">
    <!-- Background glows -->
    <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-hextech-magic/3 rounded-full filter blur-[120px] pointer-events-none"></div>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div class="text-center mb-20">
        <h2 class="text-hextech-magic font-extrabold tracking-widest uppercase text-xs mb-3 font-mono">
          SUPORTE & DÚVIDAS
        </h2>
        <p class="text-3xl leading-9 font-extrabold tracking-tight text-white sm:text-5xl font-sans">
          Perguntas Frequentes (FAQ)
        </p>
        <p class="mt-4 text-base text-gray-400">
          Esclareça suas dúvidas técnicas e de uso sobre o Rift Sync AI.
        </p>
      </div>

      <!-- FAQ Accordion List -->
      <div class="space-y-4">
        <div 
          v-for="(faq, idx) in faqs" 
          :key="idx" 
          class="border border-hextech-panel/60 rounded bg-hextech-dark/50 overflow-hidden transition-all duration-300"
        >
          <!-- Accordion Header -->
          <button 
            @click="toggle(idx)" 
            class="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-hextech-dark/80 transition-colors"
          >
            <span class="font-bold text-gray-200 text-sm sm:text-base pr-4">
              {{ faq.question }}
            </span>
            <svg 
              :class="['h-5 w-5 text-hextech-gold transform transition-transform duration-300', activeIndex === idx ? 'rotate-180' : '']" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <!-- Accordion Content -->
          <div 
            v-show="activeIndex === idx" 
            class="px-6 pb-6 pt-2 border-t border-hextech-panel/30 text-gray-400 text-xs sm:text-sm leading-relaxed"
          >
            {{ faq.answer }}
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
  if (activeIndex.value === idx) {
    activeIndex.value = null;
  } else {
    activeIndex.value = idx;
  }
};

const faqs = ref([
  {
    question: 'O que é o Rift Sync AI?',
    answer: 'O Rift Sync AI é um assistente de voz inteligente e overlay em tempo real para League of Legends. Ele monitora a partida conectando-se diretamente à API local segura do client do jogo (LCU) e fornece dicas táticas contextuais por meio de voz neural no seu ouvido, ajudando você a tomar melhores decisões estratégicas.'
  },
  {
    question: 'Como a IA analisa minhas partidas?',
    answer: 'A IA lê os logs locais oficiais e telemetria fornecidos pelo jogo de forma nativa e autorizada. Ela processa dados como a posição das sentinelas aliadas/inimigas, cronômetro de monstros neutros, taxas de farm por minuto dos adversários e feitiços de invocador gastos, cruzando com algoritmos preditivos de tomada de decisão de alto nível.'
  },
  {
    question: 'O Rift Sync AI funciona para qualquer elo?',
    answer: 'Sim, o Rift Sync AI é adaptável e funciona desde o elo Ferro até o Desafiante. As recomendações se ajustam para corrigir as fraquezas mais comuns encontradas em cada nível de habilidade.'
  },
  {
    question: 'Posso melhorar meu macro game com o aplicativo?',
    answer: 'Com certeza. O foco principal do assistente de inteligência artificial é aprimorar seu macro game (visão tática global, controle de objetivos e controle de rotas). Ele guia você em tempo real sobre quando retornar à base (recall), rotacionar para rotas laterais (splitpush) ou contestar objetivos neutros.'
  },
  {
    question: 'Como subir de rank mais rápido?',
    answer: 'Ao eliminar erros repetitivos e aprender a jogar no tempo ideal sugerido pela IA, a sua tomada de decisão melhora consistentemente, resultando no aumento da sua taxa de vitória (winrate) e na consequente subida rápida de elo.'
  },
  {
    question: 'O coaching é automático?',
    answer: 'Sim. Todo o processo de coaching estratégico é realizado em tempo real de forma automática durante a partida. Você não precisa parar de jogar ou digitar comandos, o assistente dita os avisos em áudio na fila de prioridade estratégica.'
  },
  {
    question: 'Funciona com todas as roles?',
    answer: 'Sim, o Rift Sync AI possui módulos específicos para Top Lane, Jungle, Mid Lane, Attack Damage Carry (ADC) e Suporte, adaptando as dicas táticas ao papel de cada jogador na composição.'
  }
]);
</script>
