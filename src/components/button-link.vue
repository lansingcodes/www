<template>
  <a
    class="btn btn-{{type}} btn-{{size}}"
    :href="href"
  >
    <icon v-if="icon" :type="icon" class="icon"></icon>
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
      size: {
        type: String,
        default: 'xl',
        validator (value) {
          const acceptableSizes = [
            'xs', 'sm', 'md', 'lg', 'xl'
          ]
          return acceptableSizes.some(size => size === value)
        }
      },
      icon: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  .icon {
    margin-right: 7px;
  }
</style>
