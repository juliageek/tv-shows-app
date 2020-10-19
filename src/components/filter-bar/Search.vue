<template>
  <b-form-input
    v-model="searchInput"
    class="search-input"
    placeholder="Search for a show"
  />
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchInput: ""
    };
  },
  watch: {
    searchInput(val) {
      this.$emit("search", val);
    }
  }
};
</script>

<style lang="scss">
.search-input {
  width: 25%;

  &:focus,
  &:active {
    border: none;
    box-shadow: 0 0 2px 4px $primary;
  }
}

@media (max-width: 920px) {
  .search-input {
    width: 90%;
  }
}
</style>
