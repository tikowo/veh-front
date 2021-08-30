<template>
  <nav class="cj-nav background-black text-white" id="nav">
    <div class="container">
      <div class="cj-logo-contaier">
        <router-link to="/">
          <img src="@/assets/svg/logo.svg" />
        </router-link>
      </div>
      <div class="cj-nav-list">
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

        <drop-down
          class="cj-nav-item"
          style="padding: 0"
          v-model="dropdownActive"
        >
          <template #trigger>
            <button
              @click="handleClick"
              class="
                size-3
                cj-dropdown-item
                font-weight-semibold
                text-white
                background-toupe
              "
            >
              <img src="@/assets/svg/user.svg" alt="chevron-right" />
              <span>MEIN BEREICH</span>
              <img src="@/assets/svg/triangle-down.svg" alt="chevron-right" />
            </button>
          </template>
          <ul class="cj-dropdow-list text-black size-4">
            <li>
              <router-link to="/"> My Published jokes </router-link>
            </li>
            <li>
              <router-link to="/"> My Saved Jokes </router-link>
            </li>
            <li>
              <router-link to="/"> Account information </router-link>
            </li>
            <li>
              <router-link to="/"> Publish new joke </router-link>
            </li>
          </ul>
        </drop-down>
      </div>
      <a class="cj-nav-burger" @click="sidebarOpen = true">
        <img src="@/assets/svg/hamburger.svg" />
      </a>
      <sidebar v-model="sidebarOpen" />
    </div>
  </nav>
</template>

<script>
import DropDown from "@/components/DropDown";
import Sidebar from "./Sidebar";
export default {
  components: { DropDown, Sidebar },
  data() {
    return {
      dropdownActive: false,
      sidebarOpen: false,
    };
  },
  methods: {
    handleClick() {
      this.dropdownActive = !this.dropdownActive;
    },
  },
};
</script>

<style lang="scss" scoped>
$navbar-height: 3.75rem;
.cj-nav {
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .cj-logo-contaier {
      > a {
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: $navbar-height;
      }
    }
    .cj-nav-list {
      @include until("tablet") {
        display: none;
      }
      .cj-nav-item {
        padding: 1.25rem 0;
        display: inline-block;

        &:not(:last-child) {
          margin-right: 2rem;
          @include from("desktop") {
            margin-right: 4rem;
          }
        }
      }

      .cj-dropdown-item {
        > span {
          margin-right: 2.125rem;
          margin-left: 0.5rem;
        }
        padding: 1.25rem 1rem;
      }
    }
  }

  .cj-nav-burger {
    @include from("tablet") {
      display: none;
    }
  }
}
.cj-dropdow-list {
  li {
    border-bottom: 1px solid $grey-light;
    padding: 0.5rem;

    > a {
      color: $black;
      &:hover {
        color: $toupe;
      }
    }
  }
}
</style>
