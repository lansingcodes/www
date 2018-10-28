<template>
  <section class="flex flex-wrap justify-around md:justify-between px-4 md:px-12">
    <section-heading
      heading="Our Sponsors"
      subheading="the companies that make all this possible!"
      class="w-64"/>
    <card
      v-for="sponsor in sponsors"
      :key="sponsor.name"
      :heading="sponsor.name"
      :url="sponsor.url"
      :description="sponsor.desc"
      :img-src="imgSrcForSponsor(sponsor)"
      :img-alt="sponsor.name + ' logo'"
      has-image
      class="mb-4"
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

<style scoped>
/* makes the last row line up with the grid */
/* this doesn't work in three column layout with one item in last row. maybe use 33% width then? */
section:after {
  content: '';
  flex: auto;
}
</style>
