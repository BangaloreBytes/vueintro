import EventService from '@/services/EventService.js'

export const namespaced = true

export const state = {
  events: [],
  totalEvents: 0,
  event: {}
}

export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENTS_TOTAL(state, eventsTotal) {
    state.totalEvents = eventsTotal
  },
  SET_EVENT(state, event) {
    state.event = event
  },
  ADD_EVENT(state, event) {
    state.events.push(event)
  }
}

export const actions = {
  fetchEvents({ commit }, { page, perPage }) {
    EventService.getEvents(page, perPage)
      .then(response => {
        commit('SET_EVENTS', response.data)
        commit('SET_EVENTS_TOTAL', response.headers['x-total-count'])
      })
      .catch(error => {
        console.log('This is error:' + error.response)
      })
  },

  fetchEvent({ commit, getters }, id) {
    let event = getters.getEventById(id)
    if (event) {
      commit('SET_EVENT', event)
    } else {
      EventService.getEvent(id)
        .then(response => {
          commit('SET_EVENT', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  addEvent({ commit }, event) {
    return EventService.postEvent(event).then(() => {
      commit('ADD_EVENT', event)
    })
  }
}

export const getters = {
  getEventById: state => id => {
    return state.events.find(event => event.id == id)
  }
}
