<template>
  <layout>
    <welcome></welcome>
    <events></events>
    <meetups></meetups>
    <sponsors></sponsors>
    <beginner-resources></beginner-resources>
    <membership-organizations></membership-organizations>
    <contact></contact>
  </layout>
</template>

<script>
  import layout from '../layouts/main'
  import welcome from '../components/welcome'
  import events from '../components/events'
  import meetups from '../components/meetups'
  import sponsors from '../components/sponsors'
  import beginnerResources from '../components/beginner-resources'
  import membershipOrganizations from '../components/membership-organizations'
  import contact from '../components/contact'

  export default {
    replace: false,
    components: {
      layout, welcome, events, meetups, sponsors, beginnerResources,
      membershipOrganizations, contact
    }
  }
</script>
