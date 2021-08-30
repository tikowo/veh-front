<template>
  <div class="cj-joke-actions">
    <rating />
    <div class="cj-buttons-container">
      <div class="cj-buttons">
        <chuck-button
          v-if="jokeNextPrev[0]"
          @click="handleClick(jokeNextPrev[0])"
          class="size-4 font-weight-semibold"
          narrow
          svg="chevron-left"
          icon-left
          >PREV. JOKE</chuck-button
        >
        <chuck-button
          v-if="jokeNextPrev[1]"
          @click="handleClick(jokeNextPrev[1])"
          class="size-4 font-weight-semibold"
          narrow
          svg="chevron-right"
          >NEXT JOKE</chuck-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Rating from "./Rating";
export default {
  components: { Rating },
  computed: {
    ...mapGetters(["jokeNextPrev", "categorizedJokes"]),
    joke() {
      return this.$store.state.joke;
    },
  },
  methods: {
    handleClick(id) {
      const joke = this.categorizedJokes.find((_joke) => {
        return _joke.id === id;
      });

      this.$store.commit("setJoke", joke);
      this.$router.push(`/joke/${id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.cj-joke-actions {
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  @include until("tablet") {
    flex-direction: column;
    .cj-buttons-container {
      align-self: center;
    }
  }
}

.cj-buttons {
  .cj-button {
    border: 1px solid $grey-light;
    background: $white;
  }
  > * {
    display: inline-block;
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
}
</style>
