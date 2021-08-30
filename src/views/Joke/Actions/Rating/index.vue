<template>
  <div class="cj-circle-container">
    <div>
      <span class="cj-circle background-tea">
        <img src="@/assets/svg/upvote.svg" alt="upvote" />
      </span>
      <span class="text-tea size-5 font-weight-semibold">{{
        joke.upvote
      }}</span>
    </div>
    <div>
      <span class="cj-circle background-grapefruit">
        <img src="@/assets/svg/downvote.svg" alt="upvote" />
      </span>
      <span class="text-grapefruit size-5 font-weight-semibold">{{
        joke.downvote
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    joke() {
      return this.$store.state.joke;
    },
  },
};
</script>

<style lang="scss" scoped>
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

  @include until("tablet") {
    align-self: center;
    margin-bottom: 1rem;
  }
}
</style>
