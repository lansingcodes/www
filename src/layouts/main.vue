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
  hr {
    border-color: #407CBF;
  }

  .btn-primary {
    background: #407CBF;

    &:hover {
      background: darken(#407CBF, 10%);
    }
  }

  .popover {
    color: #555;
  }
</style>
