<template>
  <section id="resources">
    <div
      class="
        lc-bg-rtl-gradient sm:lc-bg-upright-trapezoid bg-white h-40
      "
    >
      <div
        class="container mx-auto flex sm:justify-end flex-no-wrap content-center"
      >
        <section-heading
          white
          heading="Beginner Resources"
          subheading="where to start if you're new to coding"
          class="w-full sm:w-2/5 mb-0 mt-10 mx-auto sm:mx-0"
        />
      </div>
    </div>
    <div class="lc-bg-rtl-gradient">
      <div
        class="
          container mx-auto flex flex-wrap content-center justify-around
          pt-0 sm:pt-16 pb-16
        "
      >
        <div
          v-for="resource in resources"
          :key="resource.title"
          class="font-serif w-full max-w-sm px-4 my-6 md:w-1/2"
        >
          <h3 class="text-2xl font-sans font-normal text-blue mb-2">
            <a
              :href="resource.url"
              target="_blank"
              rel="noreferrer noopener"
              class="no-underline text-white hover:underline hover:text-white"
            >
              {{ resource.title }}
            </a>
          </h3>
          <div class="text-white">
            {{ resource.desc }}
          </div>
        </div>
      </div>
    </div>
    <div class="hidden sm:block lc-bg-downright-trapezoid bg-white h-32"/>
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

<style lang="scss" scoped>
.lc-bg-rtl-gradient {
  background: linear-gradient(to left, #2979bf, #005198);
}

.lc-bg-downright-trapezoid {
  background-color: #fff;
  background-image: url(../assets/images/bg/downright-trapezoid.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

@media (min-width: 576px) {
  .sm\:lc-bg-upright-trapezoid {
    background-color: #fff;
    background-image: url(../assets/images/bg/upright-trapezoid.svg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
}
</style>
