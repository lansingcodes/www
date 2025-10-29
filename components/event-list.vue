<template>
  <div class="flex flex-wrap align-start justify-around px-4">
    <event-card
      v-for="event in events"
      :key="event.id"
      :event="event"
      :group="eventGroup(event)"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import eventCard from '~/components/card--event.vue'
import groupForEvent from '~/utils/group-for-event'
import { useEvents } from '~/composables/useEvents'
import { useGroups } from '~/composables/useGroups'

const { upcoming } = useEvents()
const { all: groups } = useGroups()

const events = computed(() => upcoming.value || [])

const eventGroup = (event) => {
  return groupForEvent(event, groups.value || [])
}
</script>
