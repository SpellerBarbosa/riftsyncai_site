<template>
  <section id="seo-content" class="py-24 bg-[#010A13] relative overflow-hidden">
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hextech-magic/20 to-transparent"></div>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-hextech-gold font-extrabold tracking-widest uppercase text-xs mb-3 font-mono">{{ $t('seoContent.sectionTag') }}</h2>
        <p class="text-3xl leading-9 font-extrabold tracking-tight text-white sm:text-4xl font-sans">{{ $t('seoContent.sectionTitle') }}</p>
        <p class="mt-4 text-sm text-gray-400">{{ $t('seoContent.sectionDescription') }}</p>
      </div>

      <div class="space-y-16">
        <article class="bg-[#091428]/30 border border-hextech-panel/50 rounded-lg p-8">
          <h3 class="text-xl font-bold text-white mb-4 font-sans flex items-center">
            <span class="w-1.5 h-6 bg-hextech-magic rounded mr-3 inline-block"></span>
            {{ $t('seoContent.article1Title') }}
          </h3>
          <div class="text-gray-300 text-sm leading-relaxed space-y-4">
            <p>{{ $t('seoContent.article1P1') }}</p>
            <p>{{ $t('seoContent.article1P2') }}</p>
          </div>
        </article>

        <article class="bg-[#091428]/30 border border-hextech-panel/50 rounded-lg p-8">
          <h3 class="text-xl font-bold text-white mb-4 font-sans flex items-center">
            <span class="w-1.5 h-6 bg-hextech-gold rounded mr-3 inline-block"></span>
            {{ $t('seoContent.article2Title') }}
          </h3>
          <div class="text-gray-300 text-sm leading-relaxed space-y-4">
            <p>{{ $t('seoContent.article2P1') }}</p>
            <p>{{ $t('seoContent.article2P2') }}</p>
            <ul class="list-disc list-inside space-y-2 text-gray-400 pl-2">
              <li>{{ $t('seoContent.article2Li1') }}</li>
              <li>{{ $t('seoContent.article2Li2') }}</li>
              <li>{{ $t('seoContent.article2Li3') }}</li>
              <li>{{ $t('seoContent.article2Li4') }}</li>
            </ul>
          </div>
        </article>

        <article class="bg-[#091428]/30 border border-hextech-panel/50 rounded-lg p-8">
          <h3 class="text-xl font-bold text-white mb-4 font-sans flex items-center">
            <span class="w-1.5 h-6 bg-hextech-magic rounded mr-3 inline-block"></span>
            {{ $t('seoContent.article3Title') }}
          </h3>
          <div class="text-gray-300 text-sm leading-relaxed space-y-4">
            <p>{{ $t('seoContent.article3P1') }}</p>
            <p>{{ $t('seoContent.article3P2') }}</p>
            <ol class="list-decimal list-inside space-y-3 text-gray-400 pl-2">
              <li><strong class="text-white">{{ $t('seoContent.article3Li1Title') }}</strong> {{ $t('seoContent.article3Li1Desc') }}</li>
              <li><strong class="text-white">{{ $t('seoContent.article3Li2Title') }}</strong> {{ $t('seoContent.article3Li2Desc') }}</li>
              <li><strong class="text-white">{{ $t('seoContent.article3Li3Title') }}</strong> {{ $t('seoContent.article3Li3Desc') }}</li>
              <li><strong class="text-white">{{ $t('seoContent.article3Li4Title') }}</strong> {{ $t('seoContent.article3Li4Desc') }}</li>
            </ol>
            <p class="pt-2 text-xs text-gray-500 italic">{{ $t('seoContent.article3Note') }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
