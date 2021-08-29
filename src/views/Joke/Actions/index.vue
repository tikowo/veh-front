<template>
  <div class="cj-joke-actions">
    <div class="cj-circle-container">
      <div>
        <span class="cj-circle background-tea">
          <img src="@/assets/svg/upvote.svg" alt="upvote" />
        </span>
        <span class="text-tea size-5 font-weight-semibold">328</span>
      </div>
      <div>
        <span class="cj-circle background-grapefruit">
          <img src="@/assets/svg/downvote.svg" alt="upvote" />
        </span>
        <span class="text-grapefruit size-5 font-weight-semibold">12</span>
      </div>
    </div>
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
export default {
  computed: {
    ...mapGetters(["jokeNextPrev", "categorizedJokes"]),
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

  @include until("tablet") {
    flex-direction: column;
    .cj-circle-container {
        align-self: flex-start;
        margin-bottom: 2rem;
    }
    .cj-buttons-container {
        align-self: center;
    }
  }
}
.cj-circle {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  display: inline-block;
  position: relative;
  cursor: pointer;
  > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.cj-circle-container {
  > div {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    .cj-circle {
      margin-bottom: 0.5rem;
    }
    &:not(:last-child) {
      margin-right: 1.875rem;
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