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
      >{{ more ? "Show Less" : "VIEW ALL" }}</chuck-button
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
// .cj-filters {
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: space-between;
//   &::after {
//     content: "";
//     flex: auto;
//   }
//   ::v-deep {
//     .cj-filter-item {
//         margin-bottom: 1.25rem;
//         margin-right: 1rem;
//     //   margin-right: 1.25rem;
//     }
//   }
// }
.cj-filters {
  display: grid;
  grid-template-columns: repeat(auto-fill, 12.875rem);
  grid-gap: 20px;
}
</style>
