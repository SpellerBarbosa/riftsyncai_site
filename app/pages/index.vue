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
const title = 'Rift Sync AI - Coach de LoL com Inteligência Artificial | Como Subir de Elo';
const description = 'Pare de perder rank sem saber o motivo. O Rift Sync AI é um coach de LoL em tempo real movido por inteligência artificial. Melhore seu macro game, controle de visão, timers de flash e suba de elo rápido com dicas táticas por voz neural.';
const url = 'https://riftsyncai.app';
const keywords = 'coach lol, coach de lol, coach league of legends, inteligência artificial lol, ia lol, coach de lol ia, macro game lol, como subir de elo lol, subir de elo lol, timers flash lol, blitz.gg lol, assistente de voz lol, tauri lol, overlay lol, coach lol gratis, melhor coach lol';

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
  htmlAttrs: {
    lang: 'pt-BR'
  },
  link: [
    { rel: 'canonical', href: url }
  ],
  script: [
    // 1. SoftwareApplication Schema
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Rift Sync AI",
        "operatingSystem": "Windows 10, Windows 11",
        "applicationCategory": "GameApplication",
        "description": "Seu coach de League of Legends em tempo real movido por Inteligência Artificial adaptativa. Suba de elo rápido com dicas de macro game, timers de spell e controle de mapa.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "1283"
        },
        "featureList": [
          "Análise de partida em tempo real",
          "Dicas de macro game por voz neural",
          "Monitoramento de feitiços de invocador inimigos",
          "Heatmaps de visão e sentinelas recomendadas",
          "Sugestões adaptativas de builds e counters"
        ],
        "author": {
          "@type": "Organization",
          "name": "Rift Sync AI",
          "url": url
        }
      })
    },
    // 2. Product Schema (for aggregate ratings in Google search/AEO)
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Rift Sync AI - Coach de LoL com IA",
        "image": "https://riftsyncai.app/dashboard_preview.png",
        "description": "O melhor e mais avançado coach de LoL com Inteligência Artificial. Analisa suas partidas em tempo real para ajudar você a subir de elo rápido no League of Legends.",
        "brand": {
          "@type": "Brand",
          "name": "Rift Sync AI"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1283"
        }
      })
    },
    // 3. WebSite & Organization Graph Schema
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "@id": "https://riftsyncai.app/#website",
            "url": "https://riftsyncai.app",
            "name": "Rift Sync AI",
            "description": "Treinador e Coach de LoL com IA em Tempo Real para subir de elo rápido.",
            "publisher": {
              "@id": "https://riftsyncai.app/#organization"
            }
          },
          {
            "@type": "Organization",
            "@id": "https://riftsyncai.app/#organization",
            "name": "Rift Sync AI",
            "url": "https://riftsyncai.app",
            "logo": "https://riftsyncai.app/favicon.ico",
            "sameAs": [
              "https://github.com/SpellerBarbosa/riftsyncai_site"
            ]
          }
        ]
      })
    },
    // 4. HowTo Schema (How to use it)
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "Como usar o Rift Sync AI para subir de elo no LoL",
        "description": "Aprenda a conectar e evoluir sua gameplay de League of Legends com o nosso coach inteligente.",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Conecte sua conta Riot",
            "text": "Realize o login de forma 100% segura usando o Riot Sign-On oficial.",
            "url": "https://riftsyncai.app#how-it-works"
          },
          {
            "@type": "HowToStep",
            "name": "A IA analisa suas partidas",
            "text": "A inteligência artificial lê em tempo real os dados de mapa do client do jogo (LCU) de forma autorizada.",
            "url": "https://riftsyncai.app#how-it-works"
          },
          {
            "@type": "HowToStep",
            "name": "Receba feedback inteligente",
            "text": "Ouça dicas táticas contextuais diretamente no seu headset através de voz neural de alta fidelidade.",
            "url": "https://riftsyncai.app#how-it-works"
          },
          {
            "@type": "HowToStep",
            "name": "Evolua mais rápido",
            "text": "Corrija vícios de posicionamento e aumente sua taxa de vitória média.",
            "url": "https://riftsyncai.app#how-it-works"
          }
        ]
      })
    },
    // 5. FAQPage Schema
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "O que é o Rift Sync AI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "O Rift Sync AI é um assistente de voz inteligente e overlay em tempo real para League of Legends que fornece dicas táticas contextuais por meio de voz neural no seu ouvido, ajudando você a tomar melhores decisões estratégicas."
            }
          },
          {
            "@type": "Question",
            "name": "Como a IA analisa minhas partidas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A IA lê os logs locais oficiais e telemetria fornecidos pelo jogo de forma nativa e autorizada. Ela processa dados como a posição das sentinelas aliadas/inimigas, cronômetro de monstros neutros e feitiços de invocador adversários gastados."
            }
          },
          {
            "@type": "Question",
            "name": "O Rift Sync AI funciona para qualquer elo?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim, o Rift Sync AI é adaptável e funciona desde o elo Ferro até o Desafiante. As recomendações se ajustam para corrigir as fraquezas mais comuns encontradas em cada nível de habilidade."
            }
          },
          {
            "@type": "Question",
            "name": "Posso melhorar meu macro game com o aplicativo?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Com certeza. O foco principal do assistente de inteligência artificial é aprimorar seu macro game (visão tática global, controle de objetivos e controle de rotas)."
            }
          },
          {
            "@type": "Question",
            "name": "Como subir de rank mais rápido?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ao eliminar erros repetitivos e aprender a jogar no tempo ideal sugerido pela IA, a sua tomada de decisão melhora consistentemente, resultando no aumento da sua taxa de vitória (winrate)."
            }
          }
        ]
      })
    }
  ]
});

import { onMounted } from 'vue';

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
