<template>
  <div>
    <TheHeader />
    <Hero />
  </div>
</template>
<script setup>
  import TheHeader from '@/components/Header'
  import Hero from '@/components/Hero'

  useHead({
  title: 'HalGPT - Busca Bar',
  meta: [
    { name: 'description', content: 'HalGPT encontra bares.' }
  ]
  })

  useSeoMeta({
    title: 'HalGPT - Busca Bar',
    ogTitle: 'HalGPT - Busca Bar',
    description: 'Encontramos os melhores bares para você.',
    ogDescription: 'Encontramos os melhores bares para você.',
    //ogImage: 'https://example.com/image.png',
    //twitterCard: 'summary_large_image',
  })  
</script>