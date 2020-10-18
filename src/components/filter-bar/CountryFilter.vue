<template>
  <b-form-select
    v-model="value"
    class="mr-2 countries-select pointer"
    :options="countries"
    @change="$emit('country', value)"
  />
</template>

<script>
export default {
  name: 'CountryFilter',
  props: {
    countries: {
      type: Array,
      required: true
    },
    selectedCountry: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      value: this.selectedCountry,
    }
  },
}
</script>

<style scoped lang="scss">
.countries-select {
  width: auto;
  background-color: $black;
  background-image: none;
  color: $white;
  border: none;

  &:active, &:focus {
    outline: none;
    border: 0;
    box-shadow: none;
  }
}
</style>
