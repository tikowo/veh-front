<template>
  <div class="home">
    <template v-if="!$store.state.loading">
      <joke-filters class="cj-home-joke-filters" />
      <selected class="cj-home-filter-selected" />
      <jokes />
    </template>
    <loader class="cj-home-loader" v-else />
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
    this.$store.commit("setCategory", "");
    if (!this.$store.state.jokes.length) {
      this.$store.commit("setLoading", true);
      await this.$store.dispatch("initJokes");
      this.$store.commit("setLoading", false);
    }
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
.cj-home-loader {
  margin-bottom: 2rem;
}
</style>
