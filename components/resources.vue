<template>
  <section
    id="resources"
    class="flex flex-wrap justify-center max-w-3xl mx-auto"
  >
    <section-heading
      heading="Beginner Resources"
      subheading="where to start if you're new to coding"
      class="w-full"
    />
    <div
      v-for="resource in resources"
      :key="resource.title"
      class="font-serif w-full md:w-1/2 max-w-sm md:px-3 mb-4"
    >
      <h3 class="text-2xl font-normal text-blue mb-2">
        <a
          :href="resource.url"
          class="no-underline text-blue hover:text-blue-darker"
        >
          {{ resource.title }}
        </a>
      </h3>
      <div v-html="resource.desc"/>
    </div>
  </section>
</template>

<script>
import sectionHeading from '~/components/section-heading'
import resources from '~/config/resources'

export default {
  components: {
    sectionHeading
  },
  data() {
    return {
      resources
    }
  }
}
</script>
