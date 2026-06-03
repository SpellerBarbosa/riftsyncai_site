<template>
  <section id="differential" class="py-28 bg-[#091428]/40 relative overflow-hidden">
    <div class="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-hextech-magic/5 rounded-full filter blur-[130px] pointer-events-none"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
        <div class="lg:col-span-5 mb-16 lg:mb-0">
          <div class="bg-hextech-dark/60 border border-hextech-panel/80 rounded-xl p-8 shadow-2xl relative overflow-hidden">
            <div class="text-[10px] text-hextech-gold font-bold tracking-widest uppercase mb-6 font-mono">{{ $t('differential.engineTitle') }}</div>
            <div class="space-y-6 relative z-10">
              <div class="flex items-center justify-between p-3 rounded bg-[#010A13]/60 border border-hextech-panel/50">
                <span class="text-xs text-gray-300 font-medium">{{ $t('differential.contextualAnalysis') }}</span>
                <span class="text-[11px] text-hextech-magic font-mono font-bold">{{ $t('differential.active') }}</span>
              </div>
              <div class="flex items-center justify-between p-3 rounded bg-[#010A13]/60 border border-hextech-panel/50">
                <span class="text-xs text-gray-300 font-medium">{{ $t('differential.adaptiveLearning') }}</span>
                <span class="text-[11px] text-hextech-magic font-mono font-bold">{{ $t('differential.processing') }}</span>
              </div>
              <div class="flex items-center justify-between p-3 rounded bg-[#010A13]/60 border border-hextech-panel/50">
                <span class="text-xs text-gray-300 font-medium">{{ $t('differential.dynamicRecs') }}</span>
                <span class="text-[11px] text-hextech-magic font-mono font-bold">{{ $t('differential.synced') }}</span>
              </div>
              <div class="flex items-center justify-between p-3 rounded bg-[#010A13]/60 border border-hextech-panel/50">
                <span class="text-xs text-gray-300 font-medium">{{ $t('differential.patternRecognition') }}</span>
                <span class="text-[11px] text-hextech-gold font-mono font-bold">{{ $t('differential.challengerDb') }}</span>
              </div>
            </div>
            <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-hextech-magic/10 rounded-full blur-2xl"></div>
          </div>
        </div>

        <div class="lg:col-span-7">
          <h2 class="text-hextech-magic font-extrabold tracking-widest uppercase text-xs mb-3 font-mono">{{ $t('differential.sectionTag') }}</h2>
          <h3 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-8 font-sans leading-tight">{{ $t('differential.sectionTitle') }}</h3>
          <div class="space-y-8 text-gray-300 text-sm leading-relaxed">
            <div class="border-l-2 border-hextech-magic/50 pl-4">
              <h4 class="text-white font-bold text-base mb-1 font-sans">{{ $t('differential.deepAnalysisTitle') }}</h4>
              <p class="text-gray-400">{{ $t('differential.deepAnalysisDesc') }}</p>
            </div>
            <div class="border-l-2 border-hextech-gold/50 pl-4">
              <h4 class="text-white font-bold text-base mb-1 font-sans">{{ $t('differential.adaptiveLearningTitle') }}</h4>
              <p class="text-gray-400">{{ $t('differential.adaptiveLearningDesc') }}</p>
            </div>
            <div class="border-l-2 border-hextech-magic/50 pl-4">
              <h4 class="text-white font-bold text-base mb-1 font-sans">{{ $t('differential.patternTitle') }}</h4>
              <p class="text-gray-400">{{ $t('differential.patternDesc') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
