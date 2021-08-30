<template>
  <div id="app">
    <nav-bar />
    <hat class="cj-default-hat" />
    <div class="container">
      <router-view />
    </div>
    <app-footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Hat from "@/components/Hat";
import AppFooter from "@/components/Footer";

export default {
  components: { NavBar, Hat, AppFooter },
};
</script>

<style lang="scss" scoped>
.cj-default-hat {
  margin-bottom: 1.75rem;
  @include from("tablet") {
    margin-bottom: 3.75rem;
  }
}
.container {
  flex: 1;
}
</style>
