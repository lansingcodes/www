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
  .popover {
    color: #555;
  }
</style>
