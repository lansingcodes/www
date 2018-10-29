<template>
  <div class="p-2 self-center justify-center text-center">
    <h1
      v-if="h1"
      :class="{ 'text-grey-darker' : grey, 'text-white': white, 'text-blue': blue }"
      class="uppercase text-3xl mb-2">
      {{ heading }}
    </h1>
    <h2
      v-else
      :class="{ 'text-grey-darker' : grey, 'text-white': white, 'text-blue': blue }"
      class="uppercase text-3xl mb-2">
      {{ heading }}
    </h2>
    <p
      v-if="subheading"
      :class="{ 'text-white': white }"
    >
      {{ subheading }}
    </p>
    <hr
      :class="{ 'border-grey-darker' : grey, 'border-white': white, 'border-blue': blue }"
      class="border-4 my-6 w-16 ">
  </div>
</template>

<script>
export default {
  props: {
    h1: {
      type: Boolean,
      default: false
    },
    grey: {
      type: Boolean,
      default: true
    },
    white: {
      type: Boolean,
      default: false
    },
    blue: {
      type: Boolean,
      default: false
    },
    heading: {
      type: String,
      default: 'Section title'
    },
    subheading: {
      type: String,
      default: ''
    }
  }
}
</script>
