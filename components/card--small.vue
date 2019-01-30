<template>
  <figure class="text-center font-serif p-4">
    <a
      :href="url"
      class="no-underline text-blue hover:text-blue-darker focus:text-blue-darker"
    >
      <span
        v-if="iconText"
        class="font-bold font-sans inline-block text-5xl h-24 pt-5"
      >{{ iconText }}</span>
      <span
        v-else-if="iconSet === 'mfizz'"
        :class="iconName"
        class="text-6xl h-24 fa fa-3x pt-6"
      />
      <font-awesome-icon
        v-else
        :icon="[iconSet, iconName]"
        class="text-5xl h-24"
      />
      <h3 class="font-normal text-2xl mb-2">
        {{ heading }}
      </h3>
    </a>
    <p
      v-if="subheading.length"
      class="text-lg text-grey-darker mb-3"
    >{{ subheading }}</p>
    <figcaption
      class="text-grey-darker text-base"
      v-html="description"
    />
  </figure>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: 'javascript:void(0)'
    },
    heading: {
      type: String,
      default: 'Tech Demo Night'
    },
    subheading: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default:
        'Bring your favorite new project or product, give a quick demo, and finish with some light convo. Anyone can present, even kids!'
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
    }
  }
}
</script>
