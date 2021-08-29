<template>
  <div class="cj-search">
    <drop-down paddingless v-model="active">
      <template #trigger>
        <input
          v-model="search"
          @focus="active = true"
          @blur="active = true"
          class="text-white size-3"
          placeholder="How can we make you laugh today?"
        />
      </template>
      <div class="cj-search-results" v-if="data && data.length">
        <div v-for="joke in data.slice(0, 10)" :key="joke.id">
          <img src="@/assets/svg/lightning.svg" alt="lightning" />
          <a @click="handleClick(joke)">
            <span class="cj-uppercase"> {{ getJokeCat(joke) }}: </span>
            {{ joke.value }}
          </a>
        </div>
      </div>
    </drop-down>
  </div>
</template>

<script>
import DropDown from "@/components/DropDown";
import debounce from "@/helpers/debounce";

export default {
  components: { DropDown },
  watch: {
    async search() {
      this.debounceSearch();
    },
    $route() {
      // this.active = false;
    },
  },
  data() {
    return {
      search: "",
      active: false,
      data: null,
    };
  },
  mounted() {
    this.debounceSearch = debounce(async () => {
      if (!this.search) this.data = null;
      if (this.search.length < 3) return;

      const data = await this.$api.get(`search/?query=${this.search}`);
      this.data = data.result;

      if (data.result.length === 1) {
        this.$store.commit("setJoke", data.result[0]);
        this.$router.push(`/joke/${data.result[0].id}`);
        this.$store.commit("setResult", data);
        return;
      }
      this.$store.commit("setResult", data);
    });
  },
  methods: {
    getJokeCat(joke) {
      if (!joke.categories.length) return "uncategorized";
      return joke.categories[0];
    },
    handleClick(joke) {
      this.active = false;
      this.$store.commit("setJoke", joke);
      this.$router.push(`/joke/${joke.id}`);
    },
  },
};
</script>
<style lang="scss" scoped>
.cj-search {
  width: 100%;
  .cj-search-results {
    padding: 0.5rem 1rem;

    > div {
      display: flex;

      &:not(:last-child) {
        border-bottom: 1px solid $grey-light;
      }

      > a {
        padding: 0.9375rem;
        width: 100%;
        color: $grey;
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        &:hover {
          color: $black;
        }
      }
    }
  }
  input {
    padding: 0.75rem 1rem;
    background: transparent;

    &::placeholder {
      color: $greyish;
    }
  }
}
.cj-uppercase {
  text-transform: capitalize;
}
</style>
