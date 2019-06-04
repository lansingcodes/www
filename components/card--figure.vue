<template>
  <figure
    class="
      w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-2 md:mb-4 text-center font-serif p-4
    "
  >
    <a
      :href="url"
      rel="noreferrer noopener"
      target="_blank"
      class="
        no-underline text-blue hover:text-blue-darker focus:text-blue-darker
      "
    >
      <logo
        :icon-set="iconSet"
        :icon-name="iconName"
        :icon-text="iconText"
        :img-src="imgSrc"
        :img-alt="imgAlt"
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
import logo from '~/components/logo--medium'

export default {
  components: {
    logo
  },
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
      default: ''
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
