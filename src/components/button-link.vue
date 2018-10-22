<template>
  <a
    class="btn btn-{{type}}"
    :href="href"
  >
    <icon v-if="icon" :type="icon" class="mr-2"></icon>
    <slot>CONTENT</slot>
  </a>
</template>

<script>
  import icon from './icon'

  export default {
    components: {
      icon
    },
    props: {
      href: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: 'default',
        validator (value) {
          const acceptableTypes = [
            'default', 'primary', 'success',
            'info', 'warning', 'danger', 'link'
          ]
          return acceptableTypes.some(type => type === value)
        }
      },
      icon: {
        type: String
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
