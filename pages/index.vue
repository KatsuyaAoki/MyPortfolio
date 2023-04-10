<script setup lang="ts">
interface Array {
    subtitle: string,
    link: string
}

const sections: Array[] = [
    //{ subtitle: 'section title', link: 'slug' }
    { subtitle: 'about', link: '' },
    { subtitle: 'works', link: '/works' },
    { subtitle: 'blog', link: '/blog' },
]
</script>
<template>
  <!-- hero -->
  <HeroImage />
  <!-- /hero -->
  <!-- section -->
  <section :id="sections[0].subtitle" class="py-32">
    <div class="max-w-3xl mx-auto px-8">
      <SectionTitle :section-title="sections[0].subtitle"/>
      <Profile />
    </div>
  </section>
  <!-- /section -->
  <!-- section -->
  <section :id="sections[1].subtitle" class="py-32 bg-gray-50">
    <div class="max-w-3xl mx-auto px-8">
      <SectionTitle :section-title="sections[1].subtitle"/>
      <TopWorks />
      <div class="mt-16 text-center">
        <ButtonMore :slug="sections[1].link" />
      </div>
    </div>
  </section>
  <!-- /section -->
  <!-- section -->
  <section :id="sections[2].subtitle" class="py-32">
    <div class="max-w-3xl mx-auto px-8">
      <SectionTitle :section-title="sections[2].subtitle"/>
      <TopArticle />
      <div class="mt-16 text-center">
        <ButtonMore :slug="sections[2].link" />
      </div>
    </div>
  </section>
  <!-- /section -->
</template>