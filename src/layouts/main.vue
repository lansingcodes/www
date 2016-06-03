<template>
  <navigation></navigation>
  <slot></slot>
</template>

<script>
  import navigation from 'src/components/navigation'

  export default {
    components: {
      navigation
    }
  }
</script>

<style lang="scss">
  body, h1, h2, h3, h4, h5, h6, .btn {
    font-family: 'Lora', Lato, Arial, sans-serif;
  }

  .popover {
    color: #555;
  }

  section.section-small > .container {
    max-width: 600px;
  }

  .header-content-inner {
    box-shadow: 0 0 200px 100px rgba(0,0,0,0.4);
    background-color: rgba(0,0,0,0.4);
  }
</style>
