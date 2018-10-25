<template>
  <a
    :href="href"
    class="btn btn-{{type}}"
  >

    <slot>CONTENT</slot>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'default',
      validator(value) {
        const acceptableTypes = [
          'default',
          'primary',
          'success',
          'info',
          'warning',
          'danger',
          'link'
        ]
        return acceptableTypes.some(type => type === value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@media (min-width: 576px) {
  .btn {
    padding: 15px 30px;
    font-size: 1.25rem;
    line-height: 1.5;
  }
}
</style>
