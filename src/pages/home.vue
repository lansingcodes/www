<template>
  <layout>
    <welcome></welcome>
    <events></events>
    <meetups></meetups>
    <beginner-resources></beginner-resources>
    <sponsors></sponsors>
    <newsletter></newsletter>
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
  import contact from '../components/contact'
  import newsletter from '../components/newsletter'

  export default {
    replace: false,
    components: {
      layout, welcome, events, meetups, sponsors, beginnerResources,
      contact, newsletter
    }
  }
</script>
