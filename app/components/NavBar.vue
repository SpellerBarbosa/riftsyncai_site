<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-[#010A13]/80 backdrop-blur-md border-b border-hextech-panel/40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <NuxtLink to="/" class="flex items-center space-x-3 group">
            <div class="w-10 h-10 rounded-lg bg-hextech-dark border border-hextech-gold/30 flex items-center justify-center group-hover:border-hextech-magic/80 shadow-[0_0_15px_rgba(10,200,185,0.1)] group-hover:shadow-[0_0_20px_rgba(10,200,185,0.3)] transition-all duration-300">
              <span class="text-hextech-magic font-sans font-bold text-xl tracking-tighter">S</span>
            </div>
            <span class="font-sans font-extrabold text-xl tracking-wider text-gray-100 group-hover:text-hextech-gold transition-colors duration-300">
              RIFT<span class="text-hextech-gold font-light">SYNC</span><span class="text-xs ml-1 bg-hextech-magic/10 text-hextech-magic px-1.5 py-0.5 rounded font-mono font-medium border border-hextech-magic/20">AI</span>
            </span>
          </NuxtLink>
        </div>

        <!-- Navigation Links (Desktop) -->
        <div class="hidden lg:block">
          <div class="ml-10 flex items-center space-x-7">
            <a href="#features" class="flex flex-col items-center text-gray-400 hover:text-hextech-magic transition-all duration-300 group">
              <svg class="w-5 h-5 mb-1 text-gray-500 group-hover:text-hextech-magic transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span class="text-[9px] uppercase tracking-widest font-mono font-bold">{{ $t('nav.features') }}</span>
            </a>
            
            <a href="#dashboard" class="flex flex-col items-center text-gray-400 hover:text-hextech-magic transition-all duration-300 group">
              <svg class="w-5 h-5 mb-1 text-gray-500 group-hover:text-hextech-magic transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
              </svg>
              <span class="text-[9px] uppercase tracking-widest font-mono font-bold">{{ $t('nav.analysis') }}</span>
            </a>

            <a href="#how-it-works" class="flex flex-col items-center text-gray-400 hover:text-hextech-magic transition-all duration-300 group">
              <svg class="w-5 h-5 mb-1 text-gray-500 group-hover:text-hextech-magic transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span class="text-[9px] uppercase tracking-widest font-mono font-bold">{{ $t('nav.manual') }}</span>
            </a>

            <a href="#differential" class="flex flex-col items-center text-gray-400 hover:text-hextech-magic transition-all duration-300 group">
              <svg class="w-5 h-5 mb-1 text-gray-500 group-hover:text-hextech-magic transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <span class="text-[9px] uppercase tracking-widest font-mono font-bold">{{ $t('nav.differential') }}</span>
            </a>

            <a href="#seo-content" class="flex flex-col items-center text-gray-400 hover:text-hextech-magic transition-all duration-300 group">
              <svg class="w-5 h-5 mb-1 text-gray-500 group-hover:text-hextech-magic transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.47 3.47 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.47 3.47 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.47 3.47 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.47 3.47 0 013.138-3.138z" />
              </svg>
              <span class="text-[9px] uppercase tracking-widest font-mono font-bold">{{ $t('nav.eloGuide') }}</span>
            </a>

            <a href="#feedback" class="flex flex-col items-center text-gray-400 hover:text-hextech-magic transition-all duration-300 group">
              <svg class="w-5 h-5 mb-1 text-gray-500 group-hover:text-hextech-magic transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <span class="text-[9px] uppercase tracking-widest font-mono font-bold">{{ $t('nav.contact') }}</span>
            </a>

            <a href="#faq" class="flex flex-col items-center text-gray-400 hover:text-hextech-magic transition-all duration-300 group">
              <svg class="w-5 h-5 mb-1 text-gray-500 group-hover:text-hextech-magic transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-[9px] uppercase tracking-widest font-mono font-bold">{{ $t('nav.faq') }}</span>
            </a>
          </div>
        </div>

        <!-- Right Side: Lang Toggle + CTA (Desktop only) -->
        <div class="hidden lg:flex items-center space-x-4">
          <!-- Language Toggle — Compact pill -->
          <button
            @click="toggleLocale"
            id="lang-toggle"
            class="flex items-center rounded-full bg-hextech-panel/50 border border-hextech-panel/70 hover:border-hextech-magic/40 transition-all duration-300 p-0.5"
            :aria-label="locale === 'pt-BR' ? 'Switch to English' : 'Mudar para Português'"
          >
            <span
              class="px-2.5 py-1 rounded-full text-[10px] font-extrabold font-mono tracking-widest transition-all duration-300"
              :class="locale === 'pt-BR' ? 'bg-hextech-gold/20 text-hextech-gold shadow-[0_0_8px_rgba(200,170,110,0.2)]' : 'text-gray-500 hover:text-gray-300'"
            >PT</span>
            <span
              class="px-2.5 py-1 rounded-full text-[10px] font-extrabold font-mono tracking-widest transition-all duration-300"
              :class="locale === 'en-US' ? 'bg-hextech-magic/20 text-hextech-magic shadow-[0_0_8px_rgba(10,200,185,0.2)]' : 'text-gray-500 hover:text-gray-300'"
            >EN</span>
          </button>

          <a href="#cta-final" class="inline-block bg-hextech-magic/10 hover:bg-hextech-magic hover:text-hextech-darker text-hextech-magic border border-hextech-magic/40 px-6 py-2.5 rounded text-xs font-extrabold uppercase tracking-widest transition-all duration-300 shadow-[0_0_15px_rgba(10,200,185,0.15)] hover:shadow-[0_0_25px_rgba(10,200,185,0.4)]">
            {{ $t('nav.startFree') }}
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="-mr-2 flex lg:hidden">
          <button @click="isOpen = !isOpen" type="button" class="inline-flex items-center justify-center p-2.5 rounded-md text-hextech-gold hover:text-white hover:bg-hextech-panel focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">{{ $t('nav.openMenu') }}</span>
            <svg v-if="!isOpen" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-show="isOpen" class="lg:hidden bg-hextech-dark border-b border-hextech-panel/50" id="mobile-menu">
      <div class="px-3 pt-2 pb-3 space-y-1">
        <a href="#features" @click="isOpen = false" class="flex items-center text-gray-300 hover:text-hextech-magic px-3 py-2.5 rounded-md text-base font-semibold tracking-wide transition-colors gap-3">
          <svg class="w-5 h-5 text-hextech-magic" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          {{ $t('nav.mobileFeatures') }}
        </a>
        <a href="#dashboard" @click="isOpen = false" class="flex items-center text-gray-300 hover:text-hextech-magic px-3 py-2.5 rounded-md text-base font-semibold tracking-wide transition-colors gap-3">
          <svg class="w-5 h-5 text-hextech-magic" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
          </svg>
          {{ $t('nav.mobileAnalysis') }}
        </a>
        <a href="#how-it-works" @click="isOpen = false" class="flex items-center text-gray-300 hover:text-hextech-magic px-3 py-2.5 rounded-md text-base font-semibold tracking-wide transition-colors gap-3">
          <svg class="w-5 h-5 text-hextech-magic" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          {{ $t('nav.mobileManual') }}
        </a>
        <a href="#differential" @click="isOpen = false" class="flex items-center text-gray-300 hover:text-hextech-magic px-3 py-2.5 rounded-md text-base font-semibold tracking-wide transition-colors gap-3">
          <svg class="w-5 h-5 text-hextech-magic" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
          {{ $t('nav.mobileDifferential') }}
        </a>
        <a href="#seo-content" @click="isOpen = false" class="flex items-center text-gray-300 hover:text-hextech-magic px-3 py-2.5 rounded-md text-base font-semibold tracking-wide transition-colors gap-3">
          <svg class="w-5 h-5 text-hextech-magic" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.47 3.47 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.47 3.47 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.47 3.47 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.47 3.47 0 013.138-3.138z" />
          </svg>
          {{ $t('nav.mobileEloGuide') }}
        </a>
        <a href="#feedback" @click="isOpen = false" class="flex items-center text-gray-300 hover:text-hextech-magic px-3 py-2.5 rounded-md text-base font-semibold tracking-wide transition-colors gap-3">
          <svg class="w-5 h-5 text-hextech-magic" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          {{ $t('nav.mobileContact') }}
        </a>
        <a href="#faq" @click="isOpen = false" class="flex items-center text-gray-300 hover:text-hextech-magic px-3 py-2.5 rounded-md text-base font-semibold tracking-wide transition-colors gap-3">
          <svg class="w-5 h-5 text-hextech-magic" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {{ $t('nav.mobileFaq') }}
        </a>
      </div>

      <!-- Mobile Language Toggle + CTA -->
      <div class="pt-4 pb-8 border-t border-hextech-panel/50 space-y-4">
        <div class="px-5 flex justify-center">
          <button
            @click="toggleLocale"
            class="flex items-center rounded-full bg-hextech-panel/50 border border-hextech-panel/70 transition-all duration-300 p-1"
          >
            <span
              class="px-4 py-1.5 rounded-full text-xs font-extrabold font-mono tracking-widest transition-all duration-300"
              :class="locale === 'pt-BR' ? 'bg-hextech-gold/20 text-hextech-gold shadow-[0_0_10px_rgba(200,170,110,0.25)]' : 'text-gray-500'"
            >PT</span>
            <span
              class="px-4 py-1.5 rounded-full text-xs font-extrabold font-mono tracking-widest transition-all duration-300"
              :class="locale === 'en-US' ? 'bg-hextech-magic/20 text-hextech-magic shadow-[0_0_10px_rgba(10,200,185,0.25)]' : 'text-gray-500'"
            >EN</span>
          </button>
        </div>
        <div class="px-5">
          <a href="#cta-final" @click="isOpen = false" class="block text-center w-full bg-hextech-magic text-hextech-darker hover:bg-hextech-magic/90 px-6 py-3 rounded text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(10,200,185,0.3)]">
            {{ $t('nav.mobileStartFree') }}
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const { locale, setLocale } = useI18n();
const isOpen = ref(false);

const toggleLocale = () => {
  setLocale(locale.value === 'pt-BR' ? 'en-US' : 'pt-BR');
};
</script>
