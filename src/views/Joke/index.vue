<template>
  <div class="cj-joke">
    <div class="cj-joke-container">
      <item v-if="joke" :data="joke" />
      <actions />
    </div>
    <div class="cj-joke-info">hi</div>
  </div>
</template>

<script>
import Item from "./Item";
import Actions from "./Actions";

export default {
  components: { Item, Actions },
  watch: {
    $route() {
      this.$store.dispatch("fetchJoke", this.$route.params.id);
    },
  },
  computed: {
    joke() {
      return this.$store.state.joke;
    },
  },
  async mounted() {
    const { id = null } = this.$route.params;
    await this.$store.dispatch("fetchJoke", id);
    this.$store.dispatch("initJokes");
  },
};
</script>

<style lang="scss" scoped>
.cj-joke {
  display: flex;
  margin-bottom: 4.5625rem;
  .cj-joke-container {
    flex: 1;
    margin-right: 0.9375rem;

    .cj-joke-item {
      margin-bottom: 1rem;
    }
  }
  .cj-joke-info {
    @include borderedContent;
    margin-left: 0.9375rem;
    width: 350px;
    flex-shrink: 0;
  }

  @include until("tablet") {
    flex-direction: column;
    .cj-joke-container {
      margin-bottom: 4rem;
      margin-right: 0;
    }
    .cj-joke-info {
      margin: 0;
      width: initial;
    }
  }
}
</style>
