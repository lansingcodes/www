<template>
  <span>
    <div
      v-if="imgSrc"
      class="flex justify-center h-24 mb-4"
    >
      <img
        :src="imgSrc"
        :alt="imgAlt"
        class="flex-initial max-h-full px-2 self-center"
        width="244"
        height="96"
      >
    </div>
    <span
      v-else-if="iconText"
      class="font-bold font-sans inline-block text-5xl h-24 pt-5"
    >{{ iconText }}</span>
    <!--
    The mfizz icons are added as ::before the span that contains it. This
    div provides a wrapper to style.
    -->
    <div
      v-else-if="iconSet === 'mfizz'"
      class="text-6xl h-24 fa fa-3x pt-6"
    >
      <span
        :class="iconName"
      />
    </div>
    <span
      v-else-if="iconSet === 'lansing-codes'"
      :class="iconName"
      class="text-6xl h-24 fa fa-4x pt-3"
    />
    <font-awesome-icon
      v-else
      :icon="[iconSet, iconName]"
      class="text-5xl h-24"
    />
  </span>
</template>

<script>
export default {
  props: {
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
