<template>
  <div>
    <div v-if="selectedShow" class="show-details">
      <div class="left-section">
        <img
          v-if="selectedShow.image"
          class="card-img-top card-image"
          :src="selectedShow.image.medium"
          alt="Card image cap"
        />
        <img
          v-else
          :src="`https://via.placeholder.com/210x295?text=No+image`"
        />
      </div>
      <div class="right-section ml-3">
        <div class="mb-3 text-18 font-weight-bold">
          {{ selectedShow.name }}
        </div>
        <p class="text-left">{{ showSummary }}</p>
        <a :href="selectedShow.officialSite" target="blank">
          Go to website
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { stripHtml } from "@/utils/utils.js";

export default {
  name: "ShowDetails",
  props: {
    selectedShow: {
      type: Object,
      required: true
    }
  },
  computed: {
    showSummary() {
      return stripHtml(this.selectedShow.summary);
    }
  }
};
</script>

<style lang="scss">
.show-details {
  display: flex;
}

.right-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 80%;
}
</style>
