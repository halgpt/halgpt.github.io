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
  title: 'Busca Bar | HalGPT',
  meta: [
    { name: 'description', content: 'HalGPT encontra bares.' }
  ]
  })

  useSeoMeta({
    title: 'Busca Bar | HalGPT',
    ogTitle: 'Busca Bar | HalGPT',
    description: 'Encontramos os melhores bares para você.',
    ogDescription: 'Encontramos os melhores bares para você.',
    //ogImage: 'https://example.com/image.png',
    //twitterCard: 'summary_large_image',
  })  
</script>