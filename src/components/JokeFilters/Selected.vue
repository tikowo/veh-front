<template>
  <div class="cj-filter-selected">
    <item
      v-if="selected"
      :title="selected.text"
      :theme="selected.theme"
      :small="true"
    />
  </div>
</template>

<script>
import Item from "./Item.vue";
export default {
  components: { Item },
  computed: {
    selected() {
      return this.$store.state.category;
    },
  },
};
</script>

<style lang="scss" scoped>
.cj-filter-selected {
  border-top: 1px solid $grey-light;
}
</style>
