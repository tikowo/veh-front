<template>
  <div class="cj-sidebar" :class="{ 'cj-sidebar-active': value }">
    <div v-click-outside="handleClickOutside">
      <router-link
        class="cj-nav-item size-3 font-weight-semibold text-white"
        to="/"
      >
        SO FUNKTIONIERT’S
      </router-link>

      <router-link
        class="cj-nav-item size-3 font-weight-semibold text-white"
        to="/"
      >
        SONDERANGEBOTE</router-link
      >

      <div class="cj-nav-multiple">
        <a class="size-3 cj-dropdown-item font-weight-semibold text-white">
          <img src="@/assets/svg/user.svg" alt="chevron-right" />
          <span>MEIN BEREICH</span>
        </a>

        <ul class="cj-dropdow-list text-white size-4">
          <li>
            <router-link class="text-white" to="/">
              My Published jokes
            </router-link>
          </li>
          <li>
            <router-link class="text-white" to="/">
              My Saved Jokes
            </router-link>
          </li>
          <li>
            <router-link class="text-white" to="/">
              Account information
            </router-link>
          </li>
          <li>
            <router-link class="text-white" to="/">
              Publish new joke
            </router-link>
          </li>
        </ul>
      </div>
    </div>
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
  },
  watch: {
    value() {
      setTimeout(() => {
        this.shouldHandleClickOutside = this.value;
      }, 300);
    },
  },
  data() {
    return {
      shouldHandleClickOutside: false,
    };
  },
  methods: {
    handleClickOutside() {
      if (this.shouldHandleClickOutside) {
        this.$emit("input", false);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cj-sidebar {
  position: fixed;
  z-index: 10;
  right: 0;
  bottom: 0;
  top: 0;
  width: 270px;
  right: -270px;
  transition: 0.3s ease;

  a {
    font-size: $size-2;
    padding: 0.5rem 0;
    display: block;
  }
  .cj-nav-item {
    &:last-child {
      margin-bottom: 0.5rem;
    }
    &:hover {
      color: $toupe;
    }
  }
  .cj-nav-multiple {
    margin-top: 1rem;
  }
  .cj-dropdown-item {
    cursor: initial;
    border-bottom: 1px solid $grey;
    padding: 0.5rem 0;
    margin-bottom: 0.5rem;
    > img {
      margin-right: 0.5rem;
    }
  }
  .cj-dropdow-list {
    li {
      a {
        color: $grey;
        &:hover {
          color: $white;
        }
      }
    }
  }
  &:before {
    opacity: 0;
    content: "";
    transition: 0.3s ease;
  }
  &.cj-sidebar-active {
    right: 0;
    &:before {
      z-index: -1;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 1;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;
    background: $black;
    height: 100%;
  }
}
</style>
