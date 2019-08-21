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
        target="_blank"
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
import urls from '~/config/urls.json'

export default {
  components: {
    sectionHeading
  },
  data() {
    return {
      links: [
        {
          name: 'Slack',
          href: urls.slack,
          iconSet: 'fab',
          icon: 'slack'
        },
        {
          name: 'GitHub',
          href: urls.github,
          iconSet: 'fab',
          icon: 'github'
        },
        {
          name: 'Email',
          href: urls.email,
          iconSet: 'fas',
          icon: 'envelope'
        },
        {
          name: 'Facebook',
          href: urls.facebook,
          iconSet: 'fab',
          icon: 'facebook'
        },
        {
          name: 'Twitter',
          href: urls.twitter,
          iconSet: 'fab',
          icon: 'twitter'
        }
      ]
    }
  }
}
</script>
