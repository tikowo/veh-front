<template>
  <div class="cj-more">
    <a @click="$emit('click')" class="cj-viewmore"
      >VIEW MORE <img src="@/assets/svg/arrow-right.svg"
    /></a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.cj-more {
  display: flex;
  justify-content: center;
  margin-bottom: 3.625rem;
  .cj-viewmore {
    padding: 0.875rem 1rem;
    border: 1px solid #cfb995;
    display: inline-flex;
    > img {
      margin-left: 0.5rem;
    }
  }
}
</style>
