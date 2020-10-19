<template>
  <div>
    <div class="filter-bar">
      <div class="primary-filters">
        <country-filter
          :countries="countries"
          :selected-country="this.params.country"
          @country="setCountry($event)"
        />
        <date-picker
          :is-mobile="isMobile"
          :min-date="today"
          :selected-date="this.params.date"
          @date="setDate($event)"
        />
      </div>
      <span
        class="expand-span"
        :class="visible ? 'not-collapsed' : 'collapsed'"
        @click="visible = !visible"
      >
        <i class="fas fa-chevron-down when-closed" />
        <i class="fas fa-chevron-up when-open" />
      </span>
    </div>
    <b-collapse v-model="visible" id="collapse-1">
      <div class="filter-bar secondary-bar">
        <genres
          ref="genres"
          :is-mobile="isMobile"
          :nav-bar-items="genres"
          :selected-item="selectedGenre"
          @genre="onGenreChange($event)"
        />
        <search
          ref="search"
          :search="search"
          @search="onSearchChange($event)"
        />
      </div>
    </b-collapse>
  </div>
</template>

<script>
import availableCountries from "@/data/countries.json";
import CountryFilter from "./CountryFilter.vue";
import DatePicker from "./DatePicker.vue";
import Genres from "./Genres.vue";
import Search from "./Search.vue";
import VueScreenSize from "vue-screen-size";
import { mapGetters, mapMutations, mapState } from "vuex";

export default {
  name: "FilterBar",
  components: {
    countryFilter: CountryFilter,
    datePicker: DatePicker,
    genres: Genres,
    search: Search
  },
  mixins: [VueScreenSize.VueScreenSizeMixin],
  data() {
    return {
      countries: null,
      search: "",
      selectedGenre: null,
      today: new Date(),
      visible: true
    };
  },
  computed: {
    ...mapGetters("shows", ["genres"]),
    ...mapState("shows", ["params"]),
    isMobile() {
      return this.$vssWidth < 1024;
    }
  },
  // watch: {
  //   genres(val) {
  //     if(this.genres.length > 0) {
  //       this.selectedGenre = val[0];
  //     }
  //   }
  // },
  beforeMount() {
    this.countries = availableCountries;
  },
  mounted() {
    if (this.genres.length > 0) {
      this.selectedGenre = this.genres[0];
    }
  },
  methods: {
    ...mapMutations("shows", ["setDate", "setCountry"]),
    onGenreChange(event) {
      this.selectedGenre = event;
      this.search = "";
      this.$emit("genre", event);
    },
    onSearchChange(event) {
      if (event !== "") {
        this.selectedGenre = this.genres[0];
      }
      this.search = event;
      this.$emit("search", event);
    }
  }
};
</script>

<style lang="scss">
.primary-filters {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}

.when-open,
.when-closed {
  color: $white;
}

.expand-span {
  &:hover,
  &:focus,
  &:active {
    border: none;
    outline: none;
  }
}

.filter-bar {
  background-color: $black;
  padding: 8px 16px 8px 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.secondary-bar {
  background-color: lighten($black, 5%);
}

@media (max-width: 600px) {
  .filter-bar {
    padding: 8px 12px 8px 2px;
  }
}
</style>
