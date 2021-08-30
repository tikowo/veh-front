<template>
  <div class="cj-home-jokes">
    <div class="cj-home-joke-container" v-if="paginatedJokes.length">
      <joke
        v-for="joke in paginatedJokes"
        :key="joke.id"
        :text="joke.value"
        :id="joke.id"
        @click="handleClick(joke)"
        :title="(category || getCategoryFromJoke(joke)) + ' joke'"
      />
    </div>
    <div class="cj-home-empty-jokes" v-else>
      <p>No jokes under this category</p>
    </div>
    <more @click="showMore" v-if="moreLeft" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Joke from "@/components/Joke";
import More from "./More";
export default {
  components: { Joke, More },
  computed: {
    ...mapGetters(["paginatedJokes", "moreLeft"]),
    category() {
      return this.$store.state.category.text;
    },
  },
  methods: {
    showMore() {
      this.$store.dispatch("nextPage");
    },
    getCategoryFromJoke(joke) {
      return joke.categories[0] || `Uncategorized`;
    },
    handleClick(joke) {
      this.$store.commit("setJoke", joke);
      this.$router.push(`/joke/${joke.id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.cj-home-joke-container {
  display: grid;
  grid-template-columns: repeat(var(--count), minmax(0, 1fr));
  grid-gap: 15px;
  --count: 1;

    margin-bottom: 1rem;
  @include from("mobile") {
    --count: 2;
  }

  @include from("desktop") {
    --count: 3;
    .cj-joke {
      margin-bottom: 2.375rem;
    }
  }
}

.cj-home-empty-jokes {
  margin-bottom: 2rem;
  text-align: center;
  font-size: 1.5rem;
}
</style>
