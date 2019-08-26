<template>
  <div>
    <div
      v-if="imgSrc"
      class="flex justify-center h-8 mb-4"
    >
      <img
        :src="imgSrc"
        :alt="imgAlt"
        class="flex-initial max-h-full px-2 self-center"
      >
    </div>
    <span
      v-else-if="iconText"
      class="font-bold font-sans inline-block text-3xl w-5"
    >{{ iconText }}</span>
    <span
      v-else-if="iconSet === 'mfizz'"
      :class="iconName"
      class="inline text-3xl px-1"
    />
    <span
      v-else-if="iconSet === 'lansing-codes'"
      :class="iconName"
      class="inline text-3xl px-1"
    />
    <font-awesome-icon
      v-else
      :icon="[iconSet, iconName]"
      fixed-width
      class="text-3xl w-5"
    />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    iconSet: {
      type: String,
      default: 'fas'
    },
    iconName: {
      type: String,
      default: 'code'
    },
    iconText: {
      type: String,
      default: null
    },
    imgSrc: {
      type: String,
      default: null
    },
    imgAlt: {
      type: String,
      default: null
    }
  }
}
</script>
