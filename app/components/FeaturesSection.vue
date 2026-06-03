<template>
  <section id="features" class="py-28 bg-[#010A13] relative overflow-hidden">
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hextech-magic/40 to-transparent"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hextech-magic/3 rounded-full filter blur-[120px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-20">
        <h2 class="text-hextech-gold font-extrabold tracking-widest uppercase text-xs mb-3 font-mono">{{ $t('features.sectionTag') }}</h2>
        <p class="mt-2 text-3xl leading-9 font-extrabold tracking-tight text-white sm:text-5xl font-sans">{{ $t('features.sectionTitle') }}</p>
        <div class="w-16 h-1 bg-gradient-to-r from-hextech-gold to-hextech-magic mx-auto mt-6 rounded-full"></div>
        <p class="mt-6 max-w-2xl text-base sm:text-lg text-gray-400 mx-auto leading-relaxed">{{ $t('features.sectionDescription') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="feature in featureCards" :key="feature.titleKey" class="bg-hextech-dark border border-hextech-panel rounded-lg p-6 transition-all duration-300 group shadow-lg transform hover:-translate-y-1" :class="feature.hoverClass">
          <div class="w-10 h-10 bg-[#010A13] border border-hextech-panel rounded flex items-center justify-center mb-6 transition-all duration-300" :class="feature.iconHoverClass">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :class="feature.iconColor" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.iconPath" />
              <path v-if="feature.iconPath2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.iconPath2" />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-100 mb-3 transition-colors font-sans" :class="feature.titleHoverClass">{{ $t(feature.titleKey) }}</h3>
          <p class="text-gray-400 text-xs leading-relaxed">{{ $t(feature.descKey) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const featureCards = [
  { titleKey: 'features.autoAnalysisTitle', descKey: 'features.autoAnalysisDesc', hoverClass: 'hover:border-hextech-magic/40 hover:shadow-[0_0_25px_rgba(10,200,185,0.08)]', iconHoverClass: 'group-hover:border-hextech-magic/50 group-hover:bg-hextech-magic/5', iconColor: 'text-hextech-magic', titleHoverClass: 'group-hover:text-hextech-magic', iconPath: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
  { titleKey: 'features.smartRecsTitle', descKey: 'features.smartRecsDesc', hoverClass: 'hover:border-hextech-gold/40 hover:shadow-[0_0_25px_rgba(200,170,110,0.08)]', iconHoverClass: 'group-hover:border-hextech-gold/50 group-hover:bg-hextech-gold/5', iconColor: 'text-hextech-gold', titleHoverClass: 'group-hover:text-hextech-gold', iconPath: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
  { titleKey: 'features.macroTitle', descKey: 'features.macroDesc', hoverClass: 'hover:border-hextech-magic/40 hover:shadow-[0_0_25px_rgba(10,200,185,0.08)]', iconHoverClass: 'group-hover:border-hextech-magic/50 group-hover:bg-hextech-magic/5', iconColor: 'text-hextech-magic', titleHoverClass: 'group-hover:text-hextech-magic', iconPath: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
  { titleKey: 'features.visionTitle', descKey: 'features.visionDesc', hoverClass: 'hover:border-hextech-gold/40 hover:shadow-[0_0_25px_rgba(200,170,110,0.08)]', iconHoverClass: 'group-hover:border-hextech-gold/50 group-hover:bg-hextech-gold/5', iconColor: 'text-hextech-gold', titleHoverClass: 'group-hover:text-hextech-gold', iconPath: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z', iconPath2: 'M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' },
  { titleKey: 'features.coachingTitle', descKey: 'features.coachingDesc', hoverClass: 'hover:border-hextech-magic/40 hover:shadow-[0_0_25px_rgba(10,200,185,0.08)]', iconHoverClass: 'group-hover:border-hextech-magic/50 group-hover:bg-hextech-magic/5', iconColor: 'text-hextech-magic', titleHoverClass: 'group-hover:text-hextech-magic', iconPath: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
  { titleKey: 'features.detectorTitle', descKey: 'features.detectorDesc', hoverClass: 'hover:border-hextech-gold/40 hover:shadow-[0_0_25px_rgba(200,170,110,0.08)]', iconHoverClass: 'group-hover:border-hextech-gold/50 group-hover:bg-hextech-gold/5', iconColor: 'text-hextech-gold', titleHoverClass: 'group-hover:text-hextech-gold', iconPath: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' },
  { titleKey: 'features.benchmarksTitle', descKey: 'features.benchmarksDesc', hoverClass: 'hover:border-hextech-magic/40 hover:shadow-[0_0_25px_rgba(10,200,185,0.08)]', iconHoverClass: 'group-hover:border-hextech-magic/50 group-hover:bg-hextech-magic/5', iconColor: 'text-hextech-magic', titleHoverClass: 'group-hover:text-hextech-magic', iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
  { titleKey: 'features.performanceTitle', descKey: 'features.performanceDesc', hoverClass: 'hover:border-hextech-gold/40 hover:shadow-[0_0_25px_rgba(200,170,110,0.08)]', iconHoverClass: 'group-hover:border-hextech-gold/50 group-hover:bg-hextech-gold/5', iconColor: 'text-hextech-gold', titleHoverClass: 'group-hover:text-hextech-gold', iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
];
</script>
