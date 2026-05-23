<template>
  <section id="dashboard" class="py-24 bg-[#091428]/40 relative overflow-hidden">
    <!-- Ambient glows -->
    <div class="absolute -top-1/4 right-0 w-[500px] h-[500px] bg-hextech-magic/5 rounded-full filter blur-[140px] pointer-events-none"></div>
    <div class="absolute -bottom-1/4 left-0 w-[500px] h-[500px] bg-hextech-gold/5 rounded-full filter blur-[140px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-hextech-magic font-extrabold tracking-widest uppercase text-xs mb-3 font-mono">
          PREVIEW EM TEMPO REAL
        </h2>
        <p class="text-3xl leading-9 font-extrabold tracking-tight text-white sm:text-4xl font-sans">
          Uma central de comando inteligente para suas partidas
        </p>
        <p class="mt-4 max-w-2xl text-base text-gray-400 mx-auto">
          Veja como o Rift Sync AI projeta dados e insights em tempo real na sua tela, sem poluição visual ou latência.
        </p>
      </div>

      <!-- Main Dashboard Simulation Shell -->
      <div class="bg-[#010A13] border border-hextech-panel rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]">
        <!-- Window Chrome / Top bar -->
        <div class="bg-[#091428] px-6 py-4 border-b border-hextech-panel/50 flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <span class="w-3.5 h-3.5 rounded-full bg-red-500/80 inline-block"></span>
            <span class="w-3.5 h-3.5 rounded-full bg-yellow-500/80 inline-block"></span>
            <span class="w-3.5 h-3.5 rounded-full bg-green-500/80 inline-block"></span>
            <span class="text-xs text-gray-500 font-mono pl-4">RIFTSYNC_CLIENT_V1.0.2</span>
          </div>
          <div class="flex items-center space-x-4">
            <span class="px-2.5 py-1 rounded bg-hextech-magic/10 border border-hextech-magic/20 text-[10px] text-hextech-magic font-bold tracking-widest uppercase">
              LIVE CONECTADO
            </span>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12">
          
          <!-- Left Sidebar - Matches -->
          <div class="lg:col-span-3 border-r border-hextech-panel/30 p-4 bg-[#010A13]/90">
            <div class="text-[10px] text-gray-500 font-bold tracking-wider mb-4 uppercase">
              Histórico Recente
            </div>
            
            <div class="space-y-2">
              <div 
                v-for="(match, i) in matches" 
                :key="i"
                :class="[
                  'p-3 rounded border transition-all duration-300 cursor-pointer flex items-center justify-between',
                  match.win 
                    ? 'bg-emerald-500/5 border-emerald-500/20 hover:border-emerald-500/40' 
                    : 'bg-rose-500/5 border-rose-500/20 hover:border-rose-500/40'
                ]"
              >
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 rounded-full bg-hextech-panel border border-gray-700 overflow-hidden flex items-center justify-center font-bold text-xs text-gray-300">
                    {{ match.champ.substring(0, 2) }}
                  </div>
                  <div>
                    <p class="text-xs font-bold text-gray-200">{{ match.champ }}</p>
                    <p class="text-[10px] text-gray-500">{{ match.date }}</p>
                  </div>
                </div>
                <div class="text-right">
                  <p :class="['text-xs font-bold', match.win ? 'text-emerald-400' : 'text-rose-400']">
                    {{ match.win ? 'Vitória' : 'Derrota' }}
                  </p>
                  <p class="text-[10px] text-gray-400 font-mono">{{ match.kda }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Main Panel -->
          <div class="lg:col-span-9 p-6">
            
            <!-- Player Status Profile -->
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-hextech-panel/30 pb-6 mb-6 gap-4">
              <div>
                <div class="flex items-center space-x-2">
                  <h3 class="text-xl font-bold text-white">Invocador Challenger</h3>
                  <span class="px-2 py-0.5 rounded bg-hextech-gold/10 border border-hextech-gold/30 text-[10px] text-hextech-gold font-bold">BR1</span>
                </div>
                <p class="text-xs text-gray-400 mt-1">Grão-Mestre I — 420 LP / Rota Principal: Mid Lane</p>
              </div>
              <div class="flex space-x-6 text-sm">
                <div>
                  <p class="text-gray-500 text-[10px] font-bold uppercase tracking-wider">Winrate</p>
                  <p class="text-lg font-black text-hextech-magic font-mono">61.5%</p>
                </div>
                <div>
                  <p class="text-gray-500 text-[10px] font-bold uppercase tracking-wider">KDA Médio</p>
                  <p class="text-lg font-black text-hextech-gold font-mono">3.85</p>
                </div>
                <div>
                  <p class="text-gray-500 text-[10px] font-bold uppercase tracking-wider">Farm/Min</p>
                  <p class="text-lg font-black text-white font-mono">8.6</p>
                </div>
              </div>
            </div>

            <!-- KPIs Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              <div class="bg-hextech-dark/40 border border-hextech-panel/50 p-4 rounded">
                <p class="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Dano por Minuto</p>
                <p class="text-lg font-bold text-white font-mono mt-1">784</p>
                <p class="text-[10px] text-emerald-400 font-mono mt-0.5">Top 3% da rota</p>
              </div>
              <div class="bg-hextech-dark/40 border border-hextech-panel/50 p-4 rounded">
                <p class="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Placar de Visão</p>
                <p class="text-lg font-bold text-white font-mono mt-1">1.94 / min</p>
                <p class="text-[10px] text-hextech-magic font-mono mt-0.5">Acima da média</p>
              </div>
              <div class="bg-hextech-dark/40 border border-hextech-panel/50 p-4 rounded">
                <p class="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Participação de Kills</p>
                <p class="text-lg font-bold text-white font-mono mt-1">58.3%</p>
                <p class="text-[10px] text-rose-400 font-mono mt-0.5">Foco em skirmishes</p>
              </div>
              <div class="bg-hextech-dark/40 border border-hextech-panel/50 p-4 rounded">
                <p class="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Primeiro Sangue</p>
                <p class="text-lg font-bold text-white font-mono mt-1">32.0%</p>
                <p class="text-[10px] text-emerald-400 font-mono mt-0.5">Altamente agressivo</p>
              </div>
            </div>

            <!-- Dashboard Analytics Core Grid -->
            <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              <!-- Center Column: IA Advice & Spell Timers -->
              <div class="md:col-span-8 space-y-6">
                <!-- Live AI Audio Wave & Insights -->
                <div class="bg-gradient-to-r from-hextech-dark to-[#091428] border border-hextech-magic/40 p-5 rounded-lg shadow-[0_0_20px_rgba(10,200,185,0.05)]">
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-2">
                      <span class="relative flex h-2.5 w-2.5">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-hextech-magic opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-hextech-magic"></span>
                      </span>
                      <p class="text-[11px] text-hextech-magic font-extrabold uppercase tracking-widest font-mono">
                        Rift Sync AI — Audio Callout Activo
                      </p>
                    </div>
                    <span class="text-[9px] text-gray-500 font-mono">TIMING: 12:44</span>
                  </div>
                  
                  <!-- Soundwave Simulator -->
                  <div class="flex items-end space-x-1.5 h-12 mb-5">
                    <span class="w-1.5 bg-hextech-magic/80 rounded animate-pulse" style="height: 40%; animation-duration: 0.7s;"></span>
                    <span class="w-1.5 bg-hextech-magic rounded animate-pulse" style="height: 80%; animation-duration: 0.4s;"></span>
                    <span class="w-1.5 bg-hextech-magic/50 rounded animate-pulse" style="height: 50%; animation-duration: 0.9s;"></span>
                    <span class="w-1.5 bg-hextech-magic rounded animate-pulse" style="height: 95%; animation-duration: 0.3s;"></span>
                    <span class="w-1.5 bg-hextech-magic/60 rounded animate-pulse" style="height: 60%; animation-duration: 0.8s;"></span>
                    <span class="w-1.5 bg-hextech-magic rounded animate-pulse" style="height: 75%; animation-duration: 0.5s;"></span>
                    <span class="w-1.5 bg-hextech-magic/70 rounded animate-pulse" style="height: 45%; animation-duration: 0.6s;"></span>
                    <span class="w-1.5 bg-hextech-magic rounded animate-pulse" style="height: 85%; animation-duration: 0.45s;"></span>
                  </div>

                  <p class="text-sm text-gray-100 font-medium leading-relaxed italic border-l-2 border-hextech-magic pl-3 bg-hextech-magic/5 py-2.5 rounded-r">
                    "O caçador inimigo (Lee Sin) foi detectado no rio norte há 8 segundos. Ele está sem Flash. Recue sua wave nos próximos 15 segundos ou prepare o contra-gank com seu jungle no mid."
                  </p>
                </div>

                <!-- Spell Cooldown Tracker -->
                <div class="bg-hextech-dark/30 border border-hextech-panel/50 p-4 rounded-lg">
                  <div class="text-[10px] text-gray-400 font-bold tracking-wider mb-3 uppercase flex justify-between items-center">
                    <span>Monitoramento de Spells Inimigas</span>
                    <span class="text-hextech-magic text-[9px] font-mono">SINCRONIZADO COM ÁUDIO</span>
                  </div>
                  
                  <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div 
                      v-for="(spell, i) in spellTimers" 
                      :key="i"
                      class="bg-[#010A13] border border-hextech-panel/50 p-3 rounded flex flex-col items-center text-center relative overflow-hidden"
                    >
                      <div class="absolute top-0 left-0 h-1 bg-hextech-gold" :style="{ width: spell.pct + '%' }"></div>
                      <span class="text-[10px] font-bold text-gray-300 mb-1">{{ spell.champ }}</span>
                      <span class="text-xs text-gray-500 font-mono">{{ spell.spell }}</span>
                      <span :class="['text-sm font-extrabold mt-2 font-mono', spell.cooldown > 0 ? 'text-hextech-gold animate-pulse' : 'text-emerald-400']">
                        {{ spell.cooldown > 0 ? spell.cooldown + 's' : 'PRONTO' }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right Column: Warding Heatmap & Champ Meta -->
              <div class="md:col-span-4 space-y-6">
                <!-- Warding/Vision Heatmap Simulation -->
                <div class="bg-hextech-dark/30 border border-hextech-panel/50 p-4 rounded-lg">
                  <div class="text-[10px] text-gray-400 font-bold tracking-wider mb-3 uppercase">
                    Heatmap de Visão Inteligente
                  </div>
                  
                  <!-- Summoner's Rift Map Outline Placeholder -->
                  <div class="w-full aspect-square bg-[#010A13] border border-hextech-panel rounded relative overflow-hidden flex items-center justify-center group">
                    <div class="absolute inset-4 border border-dashed border-gray-800 rounded flex items-center justify-center">
                      <div class="w-1/2 h-1/2 border border-dashed border-gray-800 rotate-45"></div>
                    </div>
                    <!-- River -->
                    <div class="absolute w-full h-8 bg-blue-950/20 rotate-45"></div>
                    
                    <!-- Wards heat points -->
                    <div class="absolute top-1/4 left-1/3 w-8 h-8 bg-hextech-magic/10 border border-hextech-magic/40 rounded-full flex items-center justify-center animate-ping" style="animation-duration: 3s;">
                      <span class="w-2.5 h-2.5 rounded-full bg-hextech-magic shadow-[0_0_8px_#0AC8B9]"></span>
                    </div>
                    
                    <div class="absolute bottom-1/4 right-1/3 w-8 h-8 bg-hextech-magic/10 border border-hextech-magic/40 rounded-full flex items-center justify-center animate-ping" style="animation-duration: 4s;">
                      <span class="w-2.5 h-2.5 rounded-full bg-hextech-magic shadow-[0_0_8px_#0AC8B9]"></span>
                    </div>

                    <div class="absolute top-1/2 right-1/4 w-8 h-8 bg-hextech-gold/10 border border-hextech-gold/40 rounded-full flex items-center justify-center animate-ping" style="animation-duration: 5.5s;">
                      <span class="w-2.5 h-2.5 rounded-full bg-hextech-gold shadow-[0_0_8px_#C8AA6E]"></span>
                    </div>

                    <span class="text-[9px] text-gray-600 font-mono absolute bottom-2 right-2">MAP_LAYER_RIFT</span>
                  </div>
                  <p class="text-[10px] text-gray-400 mt-2 text-center">
                    Círculos indicam locais ideais sugeridos de sentinelas baseados na composição adversária.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const matches = ref([
  { champ: 'Yasuo', date: 'Há 20 min', win: true, kda: '8 / 2 / 10' },
  { champ: 'Yone', date: 'Há 2 horas', win: true, kda: '12 / 4 / 6' },
  { champ: 'Yasuo', date: 'Há 4 horas', win: false, kda: '3 / 6 / 2' },
  { champ: 'Orianna', date: 'Há 1 dia', win: true, kda: '5 / 1 / 14' },
]);

const spellTimers = ref([
  { champ: 'Mid (Ahri)', spell: 'Flash', cooldown: 210, pct: 70 },
  { champ: 'JG (Lee Sin)', spell: 'Flash', cooldown: 0, pct: 0 },
  { champ: 'ADC (Jinx)', spell: 'Flash', cooldown: 145, pct: 48 },
  { champ: 'SUP (Thresh)', spell: 'Exhaust', cooldown: 30, pct: 15 },
]);

let intervalId: any = null;

onMounted(() => {
  // Simulate timers ticking down
  intervalId = setInterval(() => {
    spellTimers.value.forEach(spell => {
      if (spell.cooldown > 0) {
        spell.cooldown -= 1;
        spell.pct = Math.max(0, Math.floor((spell.cooldown / 300) * 100));
      }
    });
  }, 1000);
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>
