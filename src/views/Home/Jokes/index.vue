<template>
  <div class="cj-home-jokes">
    <div class="cj-home-joke-container">
      <joke
        v-for="joke in paginatedJokes"
        :key="joke.id"
        :text="joke.value"
        :id="joke.id"
        :title="(category || getCategoryFromJoke(joke)) + ' joke'"
      />
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
  },
};
</script>

<style lang="scss" scoped>
.cj-home-joke-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 22.5rem);
  justify-content: space-between;
  grid-gap: 15px;
  ::v-deep {
    .cj-joke {
      margin-bottom: 2.375rem;
    }
  }

  @include until("tablet") {
    grid-template-columns: repeat(auto-fill, 100%);
    .cj-joke {
      margin-bottom: 1rem;
    }
  }
}
</style>
