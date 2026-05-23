<template>
  <section id="how-it-works" class="py-28 bg-[#010A13] relative overflow-hidden">
    <!-- Top separator -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hextech-gold/30 to-transparent"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-20">
        <h2 class="text-hextech-gold font-extrabold tracking-widest uppercase text-xs mb-3 font-mono">
          PROCESSO SIMPLIFICADO
        </h2>
        <p class="text-3xl leading-9 font-extrabold tracking-tight text-white sm:text-5xl font-sans">
          Como Funciona o Rift Sync AI
        </p>
        <div class="w-16 h-1 bg-gradient-to-r from-hextech-magic to-hextech-gold mx-auto mt-6 rounded-full"></div>
        <p class="mt-6 max-w-xl text-base text-gray-400 mx-auto">
          Quatro passos simples separam você de dicas de elo alto ditadas diretamente no seu headset durante suas partidas.
        </p>
      </div>

      <!-- Steps Visual Flow -->
      <div class="relative">
        <!-- Center connection line (desktop only) -->
        <div class="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-0.5 bg-gradient-to-r from-hextech-magic/10 via-hextech-gold/30 to-hextech-magic/10 z-0"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          
          <!-- Step 1 -->
          <div class="bg-hextech-dark/50 border border-hextech-panel/60 p-8 rounded-lg relative group transition-all duration-300 hover:border-hextech-magic/40 hover:shadow-[0_0_30px_rgba(10,200,185,0.06)]">
            <div class="absolute -top-5 left-8 w-10 h-10 bg-hextech-magic text-hextech-darker rounded flex items-center justify-center font-black text-lg shadow-[0_0_15px_rgba(10,200,185,0.4)]">
              1
            </div>
            <div class="mt-4 mb-6 text-hextech-magic">
              <!-- Riot Shield Icon SVG -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-100 mb-3 group-hover:text-hextech-magic transition-colors">Conecte sua conta Riot</h3>
            <p class="text-xs text-gray-400 leading-relaxed">
              Faça login de forma 100% segura usando o protocolo oficial Riot Sign-On. Zero risco de vazamentos ou penalidades.
            </p>
          </div>

          <!-- Step 2 -->
          <div class="bg-hextech-dark/50 border border-hextech-panel/60 p-8 rounded-lg relative group transition-all duration-300 hover:border-hextech-gold/40 hover:shadow-[0_0_30px_rgba(200,170,110,0.06)]">
            <div class="absolute -top-5 left-8 w-10 h-10 bg-hextech-gold text-hextech-darker rounded flex items-center justify-center font-black text-lg shadow-[0_0_15px_rgba(200,170,110,0.4)]">
              2
            </div>
            <div class="mt-4 mb-6 text-hextech-gold">
              <!-- AI Core Icon SVG -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-100 mb-3 group-hover:text-hextech-gold transition-colors">A IA analisa a partida</h3>
            <p class="text-xs text-gray-400 leading-relaxed">
              O motor lê em tempo real os dados de mapa do client do jogo (LCU) e processa telemetrias complexas instantaneamente.
            </p>
          </div>

          <!-- Step 3 -->
          <div class="bg-hextech-dark/50 border border-hextech-panel/60 p-8 rounded-lg relative group transition-all duration-300 hover:border-hextech-magic/40 hover:shadow-[0_0_30px_rgba(10,200,185,0.06)]">
            <div class="absolute -top-5 left-8 w-10 h-10 bg-hextech-magic text-hextech-darker rounded flex items-center justify-center font-black text-lg shadow-[0_0_15px_rgba(10,200,185,0.4)]">
              3
            </div>
            <div class="mt-4 mb-6 text-hextech-magic">
              <!-- Speech / Chat Icon SVG -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-100 mb-3 group-hover:text-hextech-magic transition-colors">Receba dicas por áudio</h3>
            <p class="text-xs text-gray-400 leading-relaxed">
              Ouça dicas táticas no momento certo. Sem popups na tela, apenas áudio neural de alta definição sem atrapalhar seu som do jogo.
            </p>
          </div>

          <!-- Step 4 -->
          <div class="bg-hextech-dark/50 border border-hextech-panel/60 p-8 rounded-lg relative group transition-all duration-300 hover:border-hextech-gold/40 hover:shadow-[0_0_30px_rgba(200,170,110,0.06)]">
            <div class="absolute -top-5 left-8 w-10 h-10 bg-hextech-gold text-hextech-darker rounded flex items-center justify-center font-black text-lg shadow-[0_0_15px_rgba(200,170,110,0.4)]">
              4
            </div>
            <div class="mt-4 mb-6 text-hextech-gold">
              <!-- Graph Evolve Icon SVG -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-100 mb-3 group-hover:text-hextech-gold transition-colors">Evolua mais rápido</h3>
            <p class="text-xs text-gray-400 leading-relaxed">
              Corrija seus vícios de posicionamento, aprenda o macro dos melhores e suba de divisão em poucas semanas.
            </p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
