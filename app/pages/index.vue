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
const title = 'Rift Sync AI - Coach de LoL com Inteligência Artificial em Tempo Real';
const description = 'Pare de perder rank sem saber o motivo. O Rift Sync AI analisa suas partidas de League of Legends em tempo real, fornecendo feedbacks estratégicos por áudio neural no seu headset. Melhore seu macro game e controle de spells.';
const url = 'https://riftsync.ai';
const keywords = 'coach lol, coach league of legends, inteligência artificial lol, coach de lol ia, macro game lol, como subir de elo lol, timers flash lol, blitz.gg lol, assistente de voz lol, tauri lol, overlay lol';

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
        "offers": {
          "@type": "Offer",
          "price": "0.00",
          "priceCurrency": "BRL"
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
    // 2. HowTo Schema (How to use it)
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
            "url": "https://riftsync.ai#how-it-works"
          },
          {
            "@type": "HowToStep",
            "name": "A IA analisa suas partidas",
            "text": "A inteligência artificial lê em tempo real os dados de mapa do client do jogo (LCU) de forma autorizada.",
            "url": "https://riftsync.ai#how-it-works"
          },
          {
            "@type": "HowToStep",
            "name": "Receba feedback inteligente",
            "text": "Ouça dicas táticas contextuais diretamente no seu headset através de voz neural de alta fidelidade.",
            "url": "https://riftsync.ai#how-it-works"
          },
          {
            "@type": "HowToStep",
            "name": "Evolua mais rápido",
            "text": "Corrija vícios de posicionamento e aumente sua taxa de vitória média.",
            "url": "https://riftsync.ai#how-it-works"
          }
        ]
      })
    },
    // 3. FAQPage Schema
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
</script>
