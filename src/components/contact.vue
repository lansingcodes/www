<template>
  <resource-section
    id="contact"
    bg="dark"
    heading="Be social with us!"
  >
    <div class="text-center">
      <a
        href="mailto:lansingcodes@gmail.com"
        title="Email"
        aria-label="email"
      >
        <i class="fa fa-4x fa-envelope mx-sm-3 mx-1 wow tada"></i>
      </a>

      <a
        href="https://github.com/lansingcodes/"
        title="Github"
        target="_blank"
        aria-label="github"
      >
        <i class="fa fa-4x mx-sm-3 mx-1 fa-github"></i>
      </a>

      <a
        href="https://www.facebook.com/LansingCodes/"
        title="Facebook"
        target="_blank"
        aria-label="facebook"
      >
        <i class="fa fa-4x mx-sm-3 mx-1 fa-facebook"></i>
      </a>

      <a
        href="https://twitter.com/lansingcodes"
        title="Twitter"
        target="_blank"
        aria-label="twitter"
      >
        <i class="fa fa-4x mx-sm-3 mx-1 fa-twitter"></i>
      </a>
    </div>
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
  a:hover {
    text-decoration: none;
  }
</style>
