import { getSchedule } from '@/services/shows.js'
import { formatDate } from '@/utils/utils.js'

const state = {
  shows: [],
  params: {
    country: 'GB',
    date: formatDate(new Date()),
  },
}

const getters = {
  shows(state) { 
    return state.shows;
  },
  genres(state) {
    const typesSet = new Set(state.shows.map((show) => show.type));
    const genres = Array.from(typesSet);
    if (state.shows.length > 0 && genres.length > 1) {
      genres.splice(0, 0, 'All');
    }
    return genres;
  },
  show: (state) => (id) => {
    const show = state.shows.find((show) => show.id.toString() === id);
    return show;
  }
}

const actions = {
  async fetchShows({ commit, state }) {
    const data = await getSchedule(state.params.country, state.params.date);
    if (data.length === undefined) {
      this.$emit('Error');
    } else {
      commit('setShows', data);
    }
  }
}

const mutations = {
  setShows(state, data) {
    state.shows = data.map((show) => show.show);
  },
  setCountry(state, country) {
    state.params.country = country;
  },
  setDate(state, date) {
    state.params.date = date;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}