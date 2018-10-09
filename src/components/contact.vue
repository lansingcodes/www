<template>
  <resource-section
    id="contact"
    bg="dark"
    heading="Know an event or resource we're missing?"
    class="text-center"
  >
    <a
      href="mailto:lansingcodes@gmail.com"
      title="Email"
    >
      <i class="fa fa-4x fa-envelope wow tada"></i>
    </a>

    <a
      href="https://github.com/lansingcodes/"
      title="Github"
    >
      <i class="fa fa-4x fa-github"></i>
    </a>

    <a
      href="https://www.facebook.com/LansingCodes/"
      title="Facebook"
    >
      <i class="fa fa-4x fa-facebook"></i>
    </a>

    <a
      href="https://twitter.com/lansingcodes"
      title="Twitter"
    >
      <i class="fa fa-4x fa-twitter"></i>
    </a>

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

<style lang="scss" scoped>
  i.fa-4x {
    height: 50px;
    margin-right: 25px;
  }
</style>
