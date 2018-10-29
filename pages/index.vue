<template>
  <div>
    <welcome class="mb-16 md:mb-32"/>
    <events class="px-4 mb-16 md:mb-32"/>
    <meetups class="px-4 mb-16 md:mb-32"/>
    <resources class="px-4 mb-16 md:mb-32"/>
    <sponsors class="px-4 mb-16 md:mb-32"/>
  </div>
</template>

<script>
import welcome from '~/components/welcome'
import events from '~/components/events'
import meetups from '~/components/meetups'
import resources from '~/components/resources'
import sponsors from '~/components/sponsors'

export default {
  components: {
    welcome,
    events,
    meetups,
    resources,
    sponsors
  },
  async fetch({ store, params }) {
    // Load async data needed by the page here
    return store.dispatch('events/loadUpcoming')
  }
}
</script>
