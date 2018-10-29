<template>
  <div class="p-2 self-center justify-center text-center">
    <h2
      :class="{ 'text-grey-darker' : grey, 'text-white': white }"
      class="uppercase text-3xl mb-2">
      {{ heading }}
    </h2>
    <p :class="{ 'text-grey-darker' : grey, 'text-white': white }">{{ subheading }}</p>
    <hr
      :class="{ 'border-grey-darker' : grey, 'border-white': white }"
      class="border-4 my-6 w-16 ">
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
    },
    grey: {
      type: Boolean,
      default: true
    },
    white: {
      type: Boolean,
      default: false
    }
  }
}
</script>
