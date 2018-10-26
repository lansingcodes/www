<template>
  <div>
    <welcome/>
    <events/>
    <meetups/>
    <resources/>
    <sponsors/>
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
  }
}
</script>
