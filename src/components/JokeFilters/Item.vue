<template>
  <a
    @click="$emit('click')"
    class="cj-filter-item"
    :class="{ [`background-${theme}`]: true, small }"
  >
    <span class="text-white">{{ title }}</span>
  </a>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "uncategorized",
    },
    theme: {
      type: String,
      default: "grapefruit",
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.cj-filter-item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  transition: 0.1s ease;
  &:hover {
    opacity: 0.9;
    box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.25);
  }
  > span {
    text-transform: uppercase;
    padding: 0.875rem 0;
    font-weight: $weight-2;
  }
  &.small {
    border-radius: 11px;
    > span {
      position: relative;
      font-size: $size-5;
      padding: 3.5px 8px 3.5px 20px;

      &:before {
        content: "";
        background: $white;
        position: absolute;

        left: 0.5rem;
        top: 50%;
        transform: translateY(-50%);

        width: 4px;
        height: 4px;
        border-radius: 100%;
      }
    }
  }
}
</style>
