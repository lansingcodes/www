<template>
  <resource-section
    id="contact"
    bg="dark"
    heading="Know an event or resource we're missing?"
    class="text-center"
  >
    <button-link
      href="mailto:humanitycodes@gmail.com"
      icon="fa-envelope"
      class="wow tada"
    >
      Contact us
    </button-link>
  </resource-section>
</template>

<script>
  import buttonLink from './button-link'
  import resourceSection from './resource-section'

  export default {
    components: {
      resourceSection, buttonLink
    }
  }
</script>
