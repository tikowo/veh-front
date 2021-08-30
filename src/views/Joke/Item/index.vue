<template>
  <div class="cj-joke-item">
    <div class="cj-joke-item-header">
      <div class="cj-joke-item-info">
        <joke-filter-item small theme="weird-green" :title="jokeCategory" />
        <trend :joke="joke" />
      </div>
      <div class="cj-joke-header-container">
        <h1 class="size-1 font-weight-semibold text-toupe">
          {{ jokeCategory }} joke
        </h1>
        <div></div>
        <span
          v-if="jokeNextPrev[2] !== -1"
          class="text-toupe font-weight-semibold"
          >NO #{{ jokeNextPrev[2] + 1 }}</span
        >
      </div>
    </div>

    <p class="size-3">
      {{ data.value }}
    </p>
  </div>
</template>

<script>
import JokeFilterItem from "@/components/JokeFilters/Item.vue";
import Trend from "./Trend";
import { mapGetters } from "vuex";
export default {
  components: { JokeFilterItem, Trend },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["jokeNextPrev"]),
    jokeCategory() {
      return this.data.categories[0];
    },
    joke() {
      return this.$store.state.joke;
    },
  },
};
</script>

<style lang="scss" scoped>
.cj-joke-item {
  @include borderedContent;
  .cj-joke-item-header {
    margin-bottom: 0.5rem;

    .cj-joke-header-container {
      display: flex;
      align-items: baseline;
      > div {
        margin-left: 0.75rem;
        margin-right: 0.75rem;
        flex: 1;
        border-bottom: 1px solid $toupe;
      }
      > h1 {
        text-transform: capitalize;
      }
    }
    .cj-joke-item-info {
      margin-bottom: 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  @include until("desktop") {
    h1 {
      font-size: 2rem;
    }
  }
  @include until("tablet") {
    h1 {
      font-size: 1.2rem;
    }
  }
}
</style>
