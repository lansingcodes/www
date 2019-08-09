<template>
  <div>
    <welcome/>
    <events/>
    <meetups/>
    <resources/>
    <sponsors/>
    <newsletter/>
  </div>
</template>

<script>
import welcome from '~/components/welcome'
import events from '~/components/events'
import meetups from '~/components/meetups'
import resources from '~/components/resources'
import sponsors from '~/components/sponsors'
import newsletter from '~/components/newsletter'

export default {
  components: {
    welcome,
    events,
    meetups,
    resources,
    sponsors,
    newsletter
  },
  async fetch({ store }) {
    // Load async data needed by the page here
    return Promise.all([
      store.dispatch('sponsors/loadAll'),
      store.dispatch('groups/loadAll'),
      store.dispatch('events/loadUpcoming')
    ])
  }
}
</script>
