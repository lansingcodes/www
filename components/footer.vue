<template>
  <footer
    id="contact"
    class="bg-black py-12 flex flex-wrap justify-center"
  >
    <section-heading
      id="contactUs"
      white
      heading="Contact Us"
      subheading="know an event or resource we're missing? let us know or follow us"
      class="w-full"
    />
    <nav
      class="flex justify-center my-8"
      aria-labelledby="contactUs"
    >
      <a
        v-for="link in links"
        :key="link.name"
        :href="link.href"
        :title="link.name"
        :aria-label="link.name"
        class="inline-block mx-2 md:mx-4"
      >
        <font-awesome-icon
          :icon="[link.iconSet, link.icon]"
          class="text-5xl text-blue fill-current hover:text-blue-lighter"
        />
      </a>
    </nav>
  </footer>
</template>

<script>
import sectionHeading from '~/components/section-heading'
export default {
  components: {
    sectionHeading
  },
  data() {
    return {
      links: [
        {
          name: 'Slack',
          href: 'https://slack.lansing.codes/',
          iconSet: 'fab',
          icon: 'slack'
        },
        {
          name: 'GitHub',
          href: 'https://github.com/lansingcodes/',
          iconSet: 'fab',
          icon: 'github'
        },
        {
          name: 'Email',
          href: 'mailto:lansingcodes@gmail.com',
          iconSet: 'fas',
          icon: 'envelope'
        },
        {
          name: 'Facebook',
          href: 'https://www.facebook.com/LansingCodes/',
          iconSet: 'fab',
          icon: 'facebook'
        },
        {
          name: 'Twitter',
          href: 'https://twitter.com/lansingcodes',
          iconSet: 'fab',
          icon: 'twitter'
        }
      ]
    }
  }
}
</script>
