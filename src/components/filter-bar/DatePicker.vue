<template>
  <div>
    <b-form-datepicker
      v-model="value"
      class="date-picker"
      :button-only="isMobile"
      :dark="true"
      :min="minDate"
      :selected-variant="'info'"
      @input="$emit('date', value)"
    >
      <template v-slot:button-content>
        <i class="fas fa-calendar calendar-button"></i>
      </template>
    </b-form-datepicker>
  </div>
</template>

<script>
export default {
  name: "DatePicker",
  props: {
    minDate: {
      type: Date,
      required: true
    },
    selectedDate: {
      type: String,
      required: true
    },
    isMobile: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      value: this.selectedDate
    };
  }
};
</script>

<style scoped lang="scss">
.date-picker {
  width: auto;
  background-color: $black;
  background-image: none;
  color: $white;
  border: none;

  &:active,
  &:focus {
    border: 0;
    outline: none;
    box-shadow: none;
  }

  button,
  label {
    color: $white;
  }
}

.calendar-button {
  color: $white;
}
</style>
