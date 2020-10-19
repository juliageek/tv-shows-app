<template>
  <div>
    <div class="desktop-list" v-if="!isMobile">
      <ul>
        <li
          v-for="(item, i) in navBarItems"
          class="genre-item pointer"
          :class="{ selected: item === selectedItem }"
          :key="i"
          @click="select(item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <b-dropdown
      v-if="isMobile"
      id="dropdown-1"
      class="dropdown-button"
      no-caret
    >
      <template v-slot:button-content>
        <i class="fas fa-bars"></i>
      </template>
      <b-dropdown-item
        v-for="(item, i) in navBarItems"
        class="genre-item mobile"
        :class="{ selected: item === selectedItem }"
        :key="i"
        @click="select(item)"
      >
        {{ item }}
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: "Genres",
  props: {
    navBarItems: {
      type: Array,
      required: true
    },
    isMobile: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      selectedItem: null
    };
  },
  mounted() {
    this.selectedItem = this.navBarItems[0];
  },
  methods: {
    select(item) {
      this.selectedItem = item;
      this.$emit("genre", item);
    }
  }
};
</script>

<style scoped lang="scss">
.desktop-list {
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
  }

  li {
    color: white;
    padding: 0 16px;

    &.selected {
      color: $primary;
      font-weight: 600;
    }
  }
}

.dropdown-button {
  width: 16px;
  background-color: transparent;
  border: none;

  &:focus,
  &:active {
    outline: none;
  }

  &:hover {
    color: $primary;
  }
}

.genre-item {
  &:hover {
    color: $primary;
  }

  &.mobile {
    &:active,
    &:focus {
      background-color: $primary-100;
    }

    &.selected {
      background-color: $primary;
    }
  }
}
</style>
