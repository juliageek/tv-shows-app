<template>
  <div
    class="card m-2 m-md-3 pointer"
    style="width: 15rem;"
    v-if="show.network"
    @click="$emit('show', show)"
  >
    <img
      v-if="show.image"
      class="card-img-top card-image"
      :src="show.image.medium"
      alt="Card image cap"
    />
    <img v-else :src="`https://via.placeholder.com/210x295?text=No+image`" />
    <div class="card-body p-3">
      <h5 class="card-title text-16 text-left">{{ show.name }}</h5>
      <div class="card-text">
        <span class="text-16">
          {{ show.network.name }}
        </span>
        <span class="text-21 font-weight-bold">
          {{ show.schedule.time }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowCard",
  props: {
    show: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss">
.image-placeholder {
  height: 150px;
}

.card {
  transition: scale 0.25s ease 0s;

  img {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
}

.card:hover {
  transform: scale(1.02);
}

.card:focus,
.card:active {
  border-color: transparent;
  outline: none;
}

.card-title {
  display: flex;
  align-items: center;
  height: 48px;
}

.card-image {
  height: auto;
  width: auto;
  object-fit: cover;
}

.card-text {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
}
</style>
