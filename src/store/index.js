import Vue from "vue";
import Vuex from "vuex";
import api from "@/utils/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    jokes: [],
    total: 0,
    categories: [],
    currentPage: 1,
    perPage: 6,
    category: "",
    joke: null,
  },
  getters: {
    categorizedJokes(state) {
      if (state.category && state.category.id) {
        return state.jokes.filter((joke) => {
          return joke.categories.includes(state.category.id);
        });
      }
      return state.jokes;
    },
    paginatedJokes(state, getters) {
      return getters.categorizedJokes.slice(
        0,
        state.currentPage * state.perPage
      );
    },
    moreLeft(state, getters) {
      return (
        getters.categorizedJokes.length > state.currentPage * state.perPage
      );
    },
    formattedCategories(state) {
      let index = 0;
      const colors = [
        "grapefruit",
        "pastel-orange",
        "pale-orange",
        "light-gold",
        "kiwi-green",
        "weird-green",
        "tiffany-blue",
      ];

      return state.categories.map((cat) => {
        const obj = {
          id: cat,
          text: cat,
          theme: colors[index],
        };
        index = index >= colors.length - 1 ? 0 : index + 1;
        return obj;
      });
    },
    jokeNextPrev(state, getters) {
      if (!state.joke) return [null, null, -1];

      const index = getters.categorizedJokes.findIndex((joke) => {
        return joke.id === state.joke.id;
      });
      return [
        getters.categorizedJokes[index - 1]?.id,
        getters.categorizedJokes[index + 1]?.id,
        index,
      ];
    },
  },
  mutations: {
    setLoading(state, loading) {
      state.loading = loading;
    },
    setResult(state, { result, total }) {
      state.jokes = result;
      state.total = total;
    },
    setCategories(state, categories) {
      state.categories = categories;
    },
    setCategory(state, category) {
      state.category = category;
      state.currentPage = 1;
    },
    setPage(state, page) {
      state.currentPage = page;
    },
    setJoke(state, joke) {
      const data = {
        ...joke,
        upvote: Math.floor(Math.random() * 300),
        downvote: Math.floor(Math.random() * 100),
      };

      state.joke = data;
    },
  },
  actions: {
    async initJokes({ dispatch }) {
      return Promise.all([dispatch("fetchJokes"), dispatch("fetchCategories")]);
    },
    async fetchJokes({ commit }) {
      const data = await api.get("search/?query=all");
      commit("setResult", data);
      commit("setPage", 1);
    },
    async fetchJoke({ commit }, id) {
      return api.get(id).then((data) => {
        const category = data.categories[0] ?? null;
        commit("setJoke", data);
        commit("setCategory", { id: category, text: category });
      });
    },
    async fetchCategories({ commit }) {
      const data = await api.get("categories");
      commit("setCategories", data);
    },
    nextPage({ state, commit }) {
      const page = state.currentPage + 1;
      commit("setPage", page);
    },
  },
  modules: {},
});
