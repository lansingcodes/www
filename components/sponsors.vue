<template>
  <section
    id="sponsors"
    class="container mx-auto flex flex-wrap justify-center px-4 md:px-12"
  >
    <section-heading
      blue
      heading="Our Sponsors"
      subheading="the companies that make all this possible!"
      class="md:mb-16 self-end w-full md:w-1/3"
    />
    <div class="hidden md:block md:mb-16 md:w-2/3">
      <img
        src="../assets/images/sponsors-feature.jpg"
        alt="Sponsors provide us with space, sustenance, and other resources that help us collaborate"
        class="ml-8 mb-8 block shadow-lg"
      >
    </div>
    <card
      v-for="sponsor in sponsors"
      :key="sponsor.name"
      :heading="sponsor.name"
      :url="sponsor.url"
      :description="sponsor.desc"
      :img-src="imgSrcForSponsor(sponsor)"
      :img-alt="sponsor.name + ' logo'"
      class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-2 md:mb-4"
    />
  </section>
</template>

<script>
import sectionHeading from '~/components/section-heading'
import card from '~/components/card--small'
import sponsors from '~/config/sponsors'

export default {
  components: {
    card,
    sectionHeading
  },
  data() {
    return {
      sponsors
    }
  },
  methods: {
    imgSrcForSponsor(sponsor) {
      return require('~/assets/images/sponsors/' + sponsor.logo)
    }
  }
}
</script>
