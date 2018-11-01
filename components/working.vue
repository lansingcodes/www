    <div
      v-for="event in events"
      :key="event.name"
      class="bg-grey-dark border border-blue
      w-full md:w-1/2 lg:w-1/3 xl:w-1/4
      mb-4 md:mb-8"
    >
      <eventCard
        :event-name="event.attributes.name"
        :event-link="event.links.self"
        :event-date="formatDate(event.attributes.time.absolute)"
        :event-description="event.attributes.description"
        :venue="event.relationships.venue.attributes"
        :expanded-event-name="expandedEventName"
        class="mx-auto"
        @card-event-expand="expandEventCard"
        @card-event-collapse="collapseEventCard"
      />
    </div>
