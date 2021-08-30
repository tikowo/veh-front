<template>
  <div class="cj-joke">
    <template v-if="!$store.state.loading">
      <div v-if="joke" class="cj-joke-container">
        <item :data="joke" />
        <actions />
      </div>
      <div class="cj-joke-info">
        <h4 class="font-weight-semibold">The TOP 10 JOKES THIS WEEK</h4>
        <router-link to="/" class="size-3">Smoking Joke</router-link>
        <router-link to="/" class="size-3">My Boss Joke</router-link>
        <router-link to="/" class="size-3">Dirty Millionaire Joke</router-link>
        <router-link to="/" class="size-3">The annoying neighbour</router-link>
        <router-link to="/" class="size-3">Knock Knock</router-link>
        <router-link to="/" class="size-3">Why Tyson lisps</router-link>
      </div>
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
      if (
        this.$route.params.id &&
        this.$store.state.joke.id !== this.$route.params.id
      ) {
        this.fetchJoke();
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
    padding-top: 2rem;
    margin-left: 0.9375rem;
    width: 350px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    > h4 {
      margin-bottom: 1rem;
    }
    > a {
      color: $black;
      text-decoration: underline;
      margin-bottom: 0.5rem;
    }
  }

  @include until("desktop") {
    .cj-joke-info {
      width: 250px;
    }
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
