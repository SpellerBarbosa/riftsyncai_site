<template>
  <div class="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-4 text-center selection:bg-red-500/30">
    <div class="max-w-2xl w-full bg-gray-900 border border-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
      <!-- Top gradient line -->
      <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-rose-500 to-red-600"></div>
      
      <!-- Icon -->
      <div class="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-red-500/20 shadow-[0_0_40px_rgba(239,68,68,0.15)]">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>

      <!-- Title -->
      <h1 class="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
        Projeto Cancelado
      </h1>
      
      <!-- Description -->
      <p class="text-lg text-gray-400 mb-10 leading-relaxed max-w-lg mx-auto">
        O desenvolvimento deste projeto foi encerrado. Não haverá novas atualizações ou suporte futuro. Agradecemos pela compreensão.
      </p>

      <!-- Status tag -->
      <div class="inline-flex items-center justify-center space-x-2 px-4 py-2 rounded-full bg-gray-800 border border-gray-700 text-sm text-gray-300">
        <span class="block w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"></span>
        <span class="font-medium tracking-wide">Status: Descontinuado</span>
      </div>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  background-color: #030712;
  font-family: system-ui, -apple-system, sans-serif;
}
</style>
