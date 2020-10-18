<template>
  <div>
    <filter-bar
      ref="filterBar"
      @genre="filterShows($event)"
      @search="searchShows($event)"
    />
    <div class="shows">
      <div
        v-if="shows.length > 0"
        class="cards-container"
      >
        <show-card
          class="show-card"
          v-for="(show, i) in filteredShows"
          :key="i"
          :show="show"
          v-b-modal="'myModal'"
          @show="selectedShow = $event"
        />
      </div>
      <div
        v-else
        class="empty-container text-18"
      >
        We couldn't find any shows for this country and date! :(
      </div>
      <b-modal
        id="myModal"
        centered
        hide-footer
        hide-header
        size="lg"
      >
        <show-details :selected-show="selectedShow" />
      </b-modal>
    </div>
  </div>
</template>

<script>
import ShowCard from './ShowCard'
import ShowDetails from './ShowDetails'
import FilterBar from '@/components/filter-bar/FilterBar.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Shows',
  components: {
    filterBar: FilterBar,
    showCard: ShowCard,
    showDetails: ShowDetails
  },
  computed: {
    ...mapState('shows', [
      'shows',
      'params',
    ]),
  },
  data() {
    return {
      filteredShows: [],
      selectedShow: null,
    }
  },
  watch: {
    params: {
      handler() {
        this.fetchShows();
      },
      deep: true
    },
    shows(val) {
      this.filteredShows = val;
    }
  },
  async beforeMount() {
    if (this.filteredShows.length === 0) {
      this.fetchShows();
    }
  },
  methods: {
    ...mapActions('shows', [
      'fetchShows',
    ]),
    filterShows(genre) {
      let filtered;
      
      if (genre === 'All') {
        filtered = this.shows;
      } else {
        filtered = this.shows.filter((show) => show.type === genre);
      }
      this.filteredShows = filtered;
    },
    searchShows(search) {
      this.filteredShows = this.shows.filter((show) => {
        return show.name.toLowerCase().includes(search.toLowerCase())
      })
    }
  }
}
</script>

<style lang="scss">
.cards-container, .empty-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 70vh;
}

.cards-container {
  align-items: flex-start;
}

.shows {
  height: auto;
}

.empty-container {
  color: $white;
  align-items: center;
}
</style>
