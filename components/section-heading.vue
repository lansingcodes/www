<template>
  <div class="p-2 self-center justify-center text-center">
    <h2 class="uppercase text-grey-darker text-3xl mb-2">{{ heading }}</h2>
    <p>{{ subheading }}</p>
    <hr class="border-4 border-grey-darker my-6 w-16 ">
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      default: 'Section title'
    },
    subheading: {
      type: String,
      default: 'briefly describe this section'
    }
  }
}
</script>
