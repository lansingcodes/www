<template>
  <section
    id="meetups"
    class="container mx-auto flex flex-wrap justify-start px-4 md:px-12 mb-16 sm:mb-0"
  >
    <section-heading
      :blue="true"
      :grey="false"
      heading="Free Meetups"
      subheading="regular meetups to help you become a better coder"
      class="w-full lg:w-1/2 self-center"
    />
    <card
      v-for="group in groups"
      :key="group.id"
      :heading="group.name"
      :url="group.url"
      :subheading="group.schedule"
      :description="group.description"
      :icon-set="group.iconSet"
      :icon-name="group.iconName"
      :icon-text="group.iconText"
      :youtube="group.youtube"
    />
  </section>
</template>

<script setup>
import { computed } from 'vue'
import sectionHeading from '~/components/section-heading.vue'
import card from '~/components/card--figure.vue'
import orderBy from 'lodash/orderBy'
import { useGroups } from '~/composables/useGroups'

const { all } = useGroups()

const groups = computed(() => {
  if (!all.value) return []
  return orderBy(all.value, [
    group => group.name.toLowerCase().replace(/[^a-z]/g, '')
  ])
})
</script>
