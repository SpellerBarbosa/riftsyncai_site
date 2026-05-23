<template>
  <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-36 overflow-hidden min-h-screen flex items-center bg-[#010A13]">
    <!-- Background Effects -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <!-- Grid Overlay -->
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e232808_1px,transparent_1px),linear-gradient(to_bottom,#1e232808_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <!-- Radial Gradients -->
      <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-hextech-magic/10 rounded-full mix-blend-screen filter blur-[128px] opacity-30 animate-pulse-slow"></div>
      <div class="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-hextech-gold/10 rounded-full mix-blend-screen filter blur-[128px] opacity-20"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div class="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
        <!-- Text Content -->
        <div class="lg:col-span-6 text-center lg:text-left mb-16 lg:mb-0">
          <div class="inline-flex items-center px-4 py-2 rounded-full bg-hextech-panel/60 border border-hextech-magic/30 text-hextech-magic text-xs font-semibold mb-8 tracking-widest uppercase shadow-[0_0_15px_rgba(10,200,185,0.15)]">
            <span class="flex h-2.5 w-2.5 rounded-full bg-hextech-magic mr-2 animate-ping"></span>
            V1.0 BETA DISPONÍVEL
          </div>
          
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1] text-white">
            Pare de perder rank <br class="hidden sm:inline" />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-hextech-gold to-amber-300">
              sem saber o motivo.
            </span>
          </h1>
          
          <h2 class="text-xl sm:text-2xl font-bold text-gray-300 mb-6 font-sans">
            Seu coach de League of Legends movido por IA.
          </h2>
          
          <p class="mt-4 text-base sm:text-lg text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Dicas táticas adaptativas direto no seu ouvido em tempo real. Corrija seu macro game, saiba o tempo dos feitiços inimigos e evolua sua winrate com análise automatizada de padrões de elo alto.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#cta-final" class="px-8 py-4 bg-gradient-to-r from-hextech-gold to-[#a98a4e] text-hextech-darker font-extrabold rounded uppercase tracking-wider hover:from-hextech-goldHover hover:to-hextech-gold transition-all duration-300 shadow-[0_0_25px_rgba(200,170,110,0.35)] hover:shadow-[0_0_35px_rgba(200,170,110,0.55)] transform hover:-translate-y-0.5 text-center">
              Começar Agora
            </a>
            <a href="#dashboard" class="px-8 py-4 bg-hextech-panel/80 text-gray-200 border border-hextech-panel hover:border-hextech-magic/50 font-extrabold rounded uppercase tracking-wider transition-all duration-300 hover:text-hextech-magic flex items-center justify-center gap-2 group transform hover:-translate-y-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:text-hextech-magic transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Ver Demo
            </a>
          </div>

          <div class="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-xs text-gray-500 font-bold uppercase tracking-wider">
            <div class="flex items-center">
              <svg class="h-4.5 w-4.5 text-hextech-magic mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              100% RIOT COMPLIANT
            </div>
            <div class="flex items-center">
               <svg class="h-4.5 w-4.5 text-hextech-magic mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              DICAS HETECH EM TEMPO REAL
            </div>
          </div>
        </div>

        <!-- Image Content -->
        <div class="lg:col-span-6 relative z-10">
          <div class="relative rounded-xl border border-hextech-magic/20 bg-hextech-darker/60 p-2 shadow-[0_0_50px_rgba(10,200,185,0.08)] backdrop-blur-sm animate-float">
            <div class="absolute inset-0 bg-gradient-to-tr from-hextech-magic/10 to-transparent rounded-xl pointer-events-none"></div>
            <img 
              src="/dashboard_preview.png" 
              alt="Rift Sync AI Dashboard Preview" 
              class="rounded-lg w-full object-cover shadow-[0_0_40px_rgba(0,0,0,0.6)] border border-hextech-panel/40"
              width="600"
              height="380"
              loading="eager"
            />
            
            <!-- Floating stat badges -->
            <div class="absolute -left-6 top-1/4 bg-hextech-darker/95 border border-hextech-gold/30 p-3 rounded shadow-2xl flex items-center space-x-3 transform -rotate-2 hover:rotate-0 transition-transform duration-300 cursor-default">
              <div class="h-9 w-9 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <p class="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Winrate Média</p>
                <p class="text-sm font-extrabold text-white">+12.4%</p>
              </div>
            </div>

            <div class="absolute -right-6 bottom-1/4 bg-hextech-darker/95 border border-hextech-magic/30 p-3 rounded shadow-2xl flex items-center space-x-3 transform rotate-2 hover:rotate-0 transition-transform duration-300 cursor-default">
              <div class="h-9 w-9 rounded bg-hextech-magic/10 flex items-center justify-center text-hextech-magic">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <p class="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Partidas Lidas</p>
                <p class="text-sm font-extrabold text-white">4.8M+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

