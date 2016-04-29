<template>
  <i class="fa {{type}}">
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        required: true
      }
    }
  }
</script>
