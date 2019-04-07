<template>
  <section
    id="resources"
    class="
      flex flex-wrap justify-center w-full bg-blue py-16
      md:py-32
    "
  >
    <div class="w-full">
      <section-heading
        white
        heading="Beginner Resources"
        subheading="where to start if you're new to coding"
        class="w-full md:w-1/2 md:ml-auto md:mr-0 md:-mt-16 md:mb-4 md:pl-8"
      />
    </div>
    <div
      v-for="resource in resources"
      :key="resource.title"
      class="font-serif w-full max-w-sm px-4 py-8 md:w-1/2 md:px-3 md:mb-20"
    >
      <h3 class="text-2xl font-sans font-normal text-blue mb-2">
        <a
          :href="resource.url"
          class="no-underline text-white hover:underline hover:text-white"
        >
          {{ resource.title }}
        </a>
      </h3>
      <div class="text-white">
        {{ resource.desc }}
      </div>
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

<style scoped>
section {
  background-image: linear-gradient(to top right, #005198, #3e79bb);
}

@media (min-width: 768px) {
  section {
    background-color: transparent;
    background-image: url(../assets/images/bg/resources.svg);
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
