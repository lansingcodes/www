<template>
  <div
    id="welcome"
    class="lc-background-image py-16 sm:py-32"
  >
    <div class="flex flex-wrap justify-center">
      <nav
        class="
          flex-none w-full sm:w-1/2 sm:max-w-sm overflow-hidden sm:shadow-lg
          bg-white text-center py-8 px-6 sm:mb-24
        "
      >
        <img
          class="h-32 w-32"
          src="../assets/images/icon-tall-square-fixed-300-transparent.png"
          alt="Lansing Codes Logo"
          width="128"
          height="128"
        >
        <section-heading
          h1
          blue
          heading="Lansing Codes"
          subheading="events and resources for Lansing coders"
        />
        <ul class="flex flex-wrap justify-center list-reset mt-0 mb-4 font-medium">
          <li
            v-for="link in links"
            :key="link.name"
            class="w-1/2"
          >
            <a
              :href="link.href"
              class="
                inline-block no-underline uppercase mb-4 leading-tight
              "
              @click="open = false"
            >
              <font-awesome-icon
                :icon="link.iconSet"
                fixed-width
                class="leading-tight mr-1"
              />
              {{ link.name }}
            </a>
          </li>
        </ul>
      </nav>

      <section
        class="
          hidden sm:block sm:w-1/2 max-w-sm overflow-hidden shadow-lg bg-blue-dark
          text-white p-8 sm:mt-24 sm:-ml-4
        "
      >
        <section-heading
          white
          heading="Next Event"
        />
        <div
          v-if="nextEvent"
          class="text-left font-normal"
        >
          <div class="flex flex-no-wrap items-center mb-2 min-h-12">
            <logo
              v-if="groupForNextEvent"
              :icon-set="groupForNextEvent.iconSet"
              :icon-name="groupForNextEvent.iconName"
              :icon-text="groupForNextEvent.iconText"
              class="mr-3"
            />
            <h3 class="font-bold">
              {{ nextEvent.name }}
            </h3>
          </div>
          <p class="flex flex-wrap justify-between text-sm mb-4 mt-0">
            <span class="mb-1 mr-2">
              {{ formatReadableDateTime(nextEvent.startTime) }}
            </span>
            <span
              v-if="nextEvent.venue"
            >
              {{ nextEvent.venue }}
            </span>
          </p>
          <div
            class="lc-event-description mb-6"
            v-html="cleanEventDescription(nextEvent.description)"
          />
          <div class="text-center">
            <a
              :href="nextEvent.url"
              class="
                inline-block bg-white no-underline
                text-blue font-bold uppercase text-center py-4 mt-2 px-8
                min-w-24 rounded-full
              "
              target="_blank"
              rel="noreferrer noopener"
            >
              Learn More and RSVP
            </a>
          </div>
        </div>
        <div
          v-else
          class="text-left font-normal"
        >
          <div class="flex flex-no-wrap items-center mb-2 min-h-12">
            <logo
              icon-set="far"
              icon-name="grin-beam-sweat"
              class="mr-3"
            />
            <h3 class="font-bold">
              Well, this is awkward!
            </h3>
          </div>
          <div class="lc-event-description my-6 leading-tight">
            <p>
              There don't appear to be any upcoming events on the calendar for
              the next few weeks. It may be a slow time of the year or it could
              be a mistake.
            </p>
            <p>
              Check back in a few days or ask about it in Slack
              and we'll get this cleared up for you soon.
            </p>
            <p>
              Sorry we couldn't help you find what you're looking for!
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import sectionHeading from '~/components/section-heading'
import logo from '~/components/logo--small'
import groupForEvent from '~/utils/group-for-event'
import formatReadableDateTime from '~/utils/format-readable-date-time'
import cleanEventDescription from '~/utils/clean-event-description'
import urls from '~/config/urls.json'

export default {
  components: {
    logo,
    sectionHeading
  },
  data() {
    return {
      links: [
        {
          name: 'Slack',
          href: urls.slack,
          iconSet: ['fab', 'slack']
        },
        {
          name: 'Events',
          href: '#events',
          iconSet: ['far', 'calendar-alt']
        },
        {
          name: 'Groups',
          href: '#meetups',
          iconSet: ['fas', 'user-friends']
        },
        {
          name: 'Resources',
          href: '#resources',
          iconSet: ['fas', 'school']
        },
        {
          name: 'Sponsors',
          href: '#sponsors',
          iconSet: ['fas', 'hand-holding-heart']
        },
        {
          name: 'Newsletter',
          href: '#newsletter',
          iconSet: ['fas', 'envelope']
        }
      ]
    }
  },
  computed: {
    nextEvent() {
      var upcoming = this.$store.state.events.upcoming.filter(
        event => event && event.startTime > Date.now()
      )
      return upcoming[0]
    },
    groupForNextEvent() {
      return groupForEvent(this.nextEvent, this.$store.state.groups.all)
    }
  },
  methods: {
    formatReadableDateTime,
    cleanEventDescription
  }
}
</script>

<style lang="scss">
.lc-background-image {
  @media (min-width: 576px) {
    background-image: linear-gradient(
        to top,
        rgba(255, 255, 255, 55),
        rgba(255, 255, 255, 0)
      ),
      url(../assets/images/capitol.jpg);
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
  }
}

.lc-event-description {
  a {
    @apply .text-white .underline;
  }
}
</style>
