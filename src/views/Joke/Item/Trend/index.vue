<template>
  <span
    class="cj-trend size-4 font-weight-semibold"
    :style="`color: ${trend[1]}`"
  >
    <span :style="`background: ${trend[1]}`" class="cj-dot"></span>
    {{ trend[0] }}</span
  >
</template>

<script>
export default {
  props: {
    joke: {
      type: Object,
      required: true,
    },
  },
  computed: {
    trend() {
      if (this.joke.downvote > this.joke.upvote) return ["Chestnut", "#000"];
      if (this.joke.upvote < 51) return ["New in town", "#57dbe6"];
      if (this.joke.upvote < 101) return ["Trending", "#f3a536"];
      return ["Hall of fame", "#68b680"];
    },
  },
};
</script>

<style lang="scss" scoped>
.cj-trend {
  position: relative;
  .cj-dot {
    position: absolute;

    left: -0.75rem;
    top: 50%;
    transform: translateY(-50%);

    width: 4px;
    height: 4px;
    border-radius: 100%;
  }
}
</style>
