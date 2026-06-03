<template>
  <div class="min-h-screen bg-[#010A13] text-gray-200 font-sans selection:bg-hextech-magic/30 selection:text-white">
    <!-- Navigation -->
    <NavBar />
    
    <!-- Main Content Sections -->
    <main>
      <HeroSection />
      <FeaturesSection />
      <DashboardPreview />
      <HowItWorks />
      <AIDifferential />
      <SEOContentBlock />
      <CommentsSection />
      <FAQSection />
      <CTASection />
    </main>
    
    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';

const { t, locale } = useI18n();
const url = 'https://riftsyncai.app';

const title = computed(() => locale.value === 'pt-BR'
  ? 'Rift Sync AI - Coach de LoL com Inteligência Artificial | Como Subir de Elo'
  : 'Rift Sync AI - AI-Powered LoL Coach | How to Climb ELO');

const description = computed(() => locale.value === 'pt-BR'
  ? 'Pare de perder rank sem saber o motivo. O Rift Sync AI é um coach de LoL em tempo real movido por inteligência artificial. Melhore seu macro game, controle de visão, timers de flash e suba de elo rápido com dicas táticas por voz neural.'
  : 'Stop losing ranked games without knowing why. Rift Sync AI is a real-time AI-powered LoL coach. Improve your macro game, vision control, flash timers and climb ELO fast with neural voice tactical tips.');

const keywords = computed(() => locale.value === 'pt-BR'
  ? 'coach lol, coach de lol, coach league of legends, inteligência artificial lol, ia lol, coach de lol ia, macro game lol, como subir de elo lol, subir de elo lol, timers flash lol, blitz.gg lol, assistente de voz lol, tauri lol, overlay lol, coach lol gratis, melhor coach lol'
  : 'lol coach, league of legends coach, ai lol coach, league of legends ai, macro game lol, how to climb elo lol, climb elo lol, flash timers lol, blitz.gg lol, voice assistant lol, overlay lol, free lol coach, best lol coach');

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: '/dashboard_preview.png',
  ogUrl: url,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: '/dashboard_preview.png',
  keywords: keywords
});

useHead({
  link: [
    { rel: 'canonical', href: url }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Rift Sync AI",
        "operatingSystem": "Windows 10, Windows 11",
        "applicationCategory": "GameApplication",
        "description": "AI-powered real-time League of Legends coach. Climb ELO fast with macro game tips, spell timers and map control.",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "ratingCount": "1283" },
        "featureList": [
          "Real-time match analysis",
          "Neural voice macro game tips",
          "Enemy summoner spell monitoring",
          "Vision heatmaps and ward suggestions",
          "Adaptive build and counter suggestions"
        ],
        "author": { "@type": "Organization", "name": "Rift Sync AI", "url": url }
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Rift Sync AI - AI LoL Coach",
        "image": "https://riftsyncai.app/dashboard_preview.png",
        "description": "The most advanced AI-powered LoL coach. Analyzes your matches in real time to help you climb ELO fast in League of Legends.",
        "brand": { "@type": "Brand", "name": "Rift Sync AI" },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "1283" }
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "WebSite", "@id": "https://riftsyncai.app/#website", "url": "https://riftsyncai.app", "name": "Rift Sync AI", "description": "Real-time AI LoL Coach and Trainer for fast ELO climbing.", "publisher": { "@id": "https://riftsyncai.app/#organization" } },
          { "@type": "Organization", "@id": "https://riftsyncai.app/#organization", "name": "Rift Sync AI", "url": "https://riftsyncai.app", "logo": "https://riftsyncai.app/favicon.ico", "sameAs": ["https://github.com/SpellerBarbosa/riftsyncai_site"] }
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to use Rift Sync AI to climb ELO in LoL",
        "description": "Learn how to connect and evolve your League of Legends gameplay with our intelligent coach.",
        "step": [
          { "@type": "HowToStep", "name": "Connect your Riot account", "text": "Log in 100% securely using the official Riot Sign-On.", "url": "https://riftsyncai.app#how-it-works" },
          { "@type": "HowToStep", "name": "AI analyzes your matches", "text": "The AI reads real-time map data from the game client (LCU) in an authorized manner.", "url": "https://riftsyncai.app#how-it-works" },
          { "@type": "HowToStep", "name": "Receive intelligent feedback", "text": "Hear contextual tactical tips directly in your headset through high-fidelity neural voice.", "url": "https://riftsyncai.app#how-it-works" },
          { "@type": "HowToStep", "name": "Improve faster", "text": "Fix positioning habits and increase your average win rate.", "url": "https://riftsyncai.app#how-it-works" }
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is Rift Sync AI?", "acceptedAnswer": { "@type": "Answer", "text": "Rift Sync AI is an intelligent voice assistant and real-time overlay for League of Legends that provides contextual tactical tips through neural voice, helping you make better strategic decisions." } },
          { "@type": "Question", "name": "How does the AI analyze my matches?", "acceptedAnswer": { "@type": "Answer", "text": "The AI reads official local logs and telemetry provided by the game natively. It processes data such as ward positions, neutral monster timers and spent summoner spells." } },
          { "@type": "Question", "name": "Does Rift Sync AI work for any rank?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Rift Sync AI is adaptable and works from Iron to Challenger. Recommendations adjust to correct the most common weaknesses at each skill level." } },
          { "@type": "Question", "name": "Can I improve my macro game with the app?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. The main focus of the AI assistant is to enhance your macro game including global tactical vision, objective control and lane management." } },
          { "@type": "Question", "name": "How to climb rank faster?", "acceptedAnswer": { "@type": "Answer", "text": "By eliminating repetitive mistakes and learning optimal timing suggested by the AI, your decision-making improves consistently, resulting in increased win rate." } }
        ]
      })
    }
  ]
});

onMounted(async () => {
  // 1. Native visit tracking (with LGPD compliance)
  try {
    const visitedKey = 'riftsync_visited';
    const isUnique = !window.localStorage.getItem(visitedKey);
    if (isUnique) {
      window.localStorage.setItem(visitedKey, 'true');
    }

    await $fetch('/api/track-visit', {
      method: 'POST',
      body: { isUnique }
    });
  } catch (e) {
    // Silently ignore tracking errors
  }

  // 2. Google Analytics integration (if GA_MEASUREMENT_ID is provided)
  const config = useRuntimeConfig();
  const gaId = config.public.gaMeasurementId;
  if (gaId) {
    // Inject GA script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    // Initialize gtag
    const win = window as any;
    win.dataLayer = win.dataLayer || [];
    const gtag = function (...args: any[]) {
      win.dataLayer.push(arguments);
    };
    win.gtag = gtag;
    gtag('js', new Date());
    gtag('config', gaId, { page_path: '/' });
  }
});
</script>
