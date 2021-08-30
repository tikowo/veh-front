<template>
  <div class="cj-hat">
    <h1 class="size-1 text-toupe">The Joke Bible</h1>
    <p class="size-2 text-white">Daily Laughs for you and yours</p>
    <search class="cj-hat-search" />
  </div>
</template>

<script>
import Search from "./Search";
export default {
  components: { Search },
};
</script>

<style lang="scss" scoped>
@include until("tablet") {
  h1 {
    font-size: 2rem;
  }
  p {
    font-size: 1rem;
  }
}
.cj-hat {
  min-height: 20rem;
  background: url("../../assets/images/bookshelf.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > h1 {
    text-align: center;
    margin-bottom: 0.5rem;
  }
  > p {
    font-weight: $weight-2;
  }
  > .cj-hat-search {
    max-width: 28.75rem;
    margin-top: 2.8125rem;

    @include until("tablet") {
      padding: 0 1rem;
    }
  }
}
</style>
