<template>
  <div class="cj-joke">
    <template v-if="!$store.state.loading">
      <div class="cj-joke-container">
        <item v-if="joke" :data="joke" />
        <actions />
      </div>
      <div class="cj-joke-info">hi</div>
    </template>
    <loader style="flex: 1" v-else />
  </div>
</template>

<script>
import Item from "./Item";
import Actions from "./Actions";

export default {
  components: { Item, Actions },
  watch: {
    $route() {
      if(this.$route.params.id && this.$store.state.joke.id !== this.$route.params.id) {
        this.fetchJoke()
      }
    },
  },
  computed: {
    joke() {
      return this.$store.state.joke;
    },
  },
  async mounted() {
    if (this.$store.state.joke) return;
    await this.fetchJoke();
    this.$store.dispatch("initJokes");
  },
  methods: {
    async fetchJoke() {
      const { id = null } = this.$route.params;

      this.$store.commit("setLoading", true);
      await this.$store.dispatch("fetchJoke", id);
      this.$store.commit("setLoading", false);
    },
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
