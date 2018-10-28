<template>
  <section class="sm:w-64 overflow-hidden bg-white text-center font-serif p-4">
    <figure
      v-if="hasImage"
      class="flex justify-center h-24 mb-4"
    >
      <img
        :src="imgSrc"
        :alt="imgAlt"
        class="flex-initial max-h-full self-center"
      >
    </figure>
    <font-awesome-icon
      v-if="hasIcon"
      :icon="[iconSet, iconName]"
      class="text-5xl text-blue fill-current h-24"
    />
    <div>
      <h3 class="font-normal text-2xl mb-2">
        <a
          :href="url"
          class="no-underline text-blue hover:text-blue-darker focus:text-blue-darker"
        >{{ heading }}</a>
      </h3>
      <p
        v-if="hasSubheading"
        class="text-lg text-grey-darker mb-3"
      >{{ subheading }}</p>
      <p
        class="text-grey-darker text-base"
        v-html="description"/>
    </div>
  </section>
  <!-- TODO: make at least the image clickable, if not the whole card.
    https://inclusive-components.design/cards/ -->
</template>

<script>
export default {
  props: {
    hasImage: {
      type: Boolean,
      default: false
    },
    hasIcon: {
      type: Boolean,
      default: false
    },
    hasSubheading: {
      type: Boolean,
      default: false
    },
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
      default: '2nd Tuesday'
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
    imgSrc: {
      type: String,
      default: 'https://tailwindcss.com/img/card-top.jpg'
    },
    imgAlt: {
      type: String,
      default: 'Sponsor logo'
    }
  }
}
</script>
