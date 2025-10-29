<template>
  <span>
    <div
      v-if="imgSrc"
      class="flex justify-center h-24 mb-4">
      <img
        :src="imgSrc"
        :alt="imgAlt"
        class="flex-initial max-h-full px-2 self-center"
        width="244"
        height="96"
      >
    </div>
    <div
      v-else
      class="flex justify-center items-center h-24 w-full mb-4">
      <span
        v-if="iconText"
        class="font-bold font-sans inline-block text-5xl"
        style="line-height: 1;"
      >{{ iconText }}</span
      >
      <!--
      The mfizz icons are added as ::before the span that contains it. This
      div provides a wrapper to style.
      -->
      <div
        v-else-if="iconSet === 'mfizz'"
        class="text-5xl"
        style="line-height: 1;">
        <span :class="iconName" />
      </div>
      <span
        v-else-if="iconSet === 'lansing-codes'"
        :class="iconName"
        class="text-5xl"
        style="line-height: 1;"
      />
      <font-awesome-icon
        v-else
        :icon="[iconSet, iconName]"
        class="text-5xl"
        style="max-height: 3rem; max-width: 3rem;"
      />
    </div>
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
