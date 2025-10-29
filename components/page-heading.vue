<template>
  <header>
    <div class="py-16 lg:pt-32 lc-bg-ltr-gradient bg-transparent">
      <h1 class="uppercase text-center text-white">
        <span class="text-5xl">
          {{ heading }}
        </span>
        <hr class="border-white border-4 my-6 w-16" >
        <span class="block text-4xl">
          {{ subheading }}
        </span>
      </h1>
    </div>
    <div class="lc-bg-down-triangle bg-white h-32 -mt-16" />
  </header>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      default: 'Page Title'
    },
    subheading: {
      type: String,
      default: ''
    }
  }
}
</script>
