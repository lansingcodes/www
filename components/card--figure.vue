<template>
  <figure
    class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-2 md:mb-4 text-center font-serif p-4"
  >
    <a
      :href="url"
      rel="noreferrer noopener"
      target="_blank"
      class="no-underline text-blue"
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
    <p v-if="subheading.length" class="text-lg text-grey-darker">
      {{ subheading }}
    </p>
    <figcaption class="text-grey-darker text-base my-3">
      {{ description }}
    </figcaption>

    <a
      v-if="youtube && youtube.length"
      :href="youtube"
      class="block text-blue fill-current no-underline"
      rel="noreferrer noopener"
    >
      <font-awesome-icon :icon="['fab', 'youtube']" />
      YouTube
    </a>
  </figure>
</template>

<script>
import logo from '~/components/logo--medium'

export default {
  components: {
    logo,
  },
  props: {
    url: {
      type: String,
      default: 'javascript:void(0)',
    },
    heading: {
      type: String,
      default: 'Tech Demo Night',
    },
    subheading: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    iconSet: {
      type: String,
      default: 'fas',
    },
    iconName: {
      type: String,
      default: 'code',
    },
    iconText: {
      type: String,
      default: null,
    },
    imgSrc: {
      type: String,
      default: null,
    },
    imgAlt: {
      type: String,
      default: null,
    },
    youtube: {
      type: String,
      default: null,
    },
  },
}
</script>
