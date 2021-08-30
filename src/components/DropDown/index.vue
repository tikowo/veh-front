<template>
  <div
    v-click-outside="handleClickOutside"
    class="cj-dropdown"
    :class="{ paddingless }"
  >
    <slot name="trigger"></slot>
    <transition name="bounce">
      <div v-if="value" class="cj-dropdown-content">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
import ClickOutside from "@/directives/clickOutside.js";
export default {
  directives: { ClickOutside },
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    paddingless: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClickOutside() {
      this.$emit("input", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.cj-dropdown {
  position: relative;
  .cj-dropdown-content {
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    background: $white;
    left: 0;
    margin-top: 0.5rem;
    right: 0;
    // transform: translate(0, 0.5rem);
    position: absolute;
    z-index: 1;
    max-height: 14rem;
    overflow-y: auto;
    overflow-x: hidden;
  }
  &.paddingless {
    .cj-dropdown-content {
      padding: 0;
    }
  }
}

.bounce-enter-active {
  animation: bounce-in 0.3s;
}
.bounce-leave-active {
  animation: bounce-in 0.3s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
