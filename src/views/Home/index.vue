<template>
  <div class="home">
    <joke-filters class="cj-home-joke-filters" />
    <selected class="cj-home-filter-selected" />
    <jokes />
  </div>
</template>

<script>
import JokeFilters from "@/components/JokeFilters";
import Selected from "@/components/JokeFilters/Selected.vue";
import Jokes from "./Jokes";

export default {
  name: "Home",
  components: {
    JokeFilters,
    Selected,
    Jokes,
  },
  async mounted() {
    this.$store.dispatch("initJokes");
  },
};
</script>

<style lang="scss" scoped>
.cj-home-joke-filters {
  margin-bottom: 2.625rem;
}
.cj-home-filter-selected {
  margin-bottom: 1.0625rem;
}
</style>
