<template>
  <div class="min-h-screen bg-hextech-darker text-gray-200 antialiased overflow-x-hidden relative selection:bg-hextech-magic/30 selection:text-white">
    <!-- Ambient background gradients -->
    <div class="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-hextech-magic/5 blur-[140px] rounded-full pointer-events-none animate-pulse-slow"></div>
    <div class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-hextech-gold/5 blur-[120px] rounded-full pointer-events-none animate-pulse-slow" style="animation-delay: 3s;"></div>
    
    <!-- Main Content Slot -->
    <slot />

    <!-- Cookie Consent Banner (LGPD) -->
    <CookieConsent />
  </div>
</template>

