<template>
  <div class="cj-filters">
    <item
      v-for="filter in displayCategories"
      @click="setCategory(filter)"
      :key="filter.id"
      :theme="filter.theme"
      :title="filter.text"
    />
    <chuck-button
      :svg="more ? 'arrow-up' : 'arrow-down'"
      @click="more = !more"
      >{{ more ? "SHOW LESS" : "VIEW ALL" }}</chuck-button
    >
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Item from "./Item";
export default {
  components: { Item },
  data() {
    return {
      more: false,
    };
  },
  computed: {
    ...mapGetters(["formattedCategories"]),
    displayCategories() {
      return this.more
        ? this.formattedCategories
        : this.formattedCategories.slice(0, 7);
    },
  },
  methods: {
    setCategory(category) {
      this.$store.commit("setCategory", category);
    },
  },
};
</script>

<style lang="scss" scoped>
.cj-filters {
  --count: 2;
  display: grid;
  grid-template-columns: repeat(var(--count), minmax(0, 1fr));
  grid-gap: 20px;
  @include from("tablet") {
    --count: 3;
  }
  @include from("desktop") {
    --count: 4;
  }
  @include from("widescreen") {
    --count: 5;
  }
}
</style>
