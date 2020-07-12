<template>
  <div>
    <h1>Event List</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <template v-if="page != 1">
      <router-link
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
      >
        Prev-Page
      </router-link>
      |
    </template>
    <template v-if="has_next">
      <router-link
        :to="{ name: 'event-list', query: { page: page + 1 } }"
        rel="next"
      >
        Next-Page
      </router-link>
    </template>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    EventCard
  },

  created() {
    this.$store.dispatch('event/fetchEvents', { page: this.page, perPage: 3 })
  },

  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    has_next() {
      return this.page * 3 < this.totalEvents
    },
    ...mapState({
      events: state => state.event.events,
      totalEvents: state => state.event.totalEvents
    })
  }
}
</script>
