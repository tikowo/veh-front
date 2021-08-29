<template>
  <div class="cj-joke background-white">
    <div class="cj-joke-header">
      <img src="@/assets/svg/lightning.svg" />
      <h3 class="font-weight-semibold size-2">{{ title }}</h3>
    </div>
    <div>
      <p class="size-4">
        {{ text }}
      </p>
    </div>

    <div style="flex-grow: 1"></div>

    <div class="cj-joke-footer">
      <a
        @click="handleClick(id)"
        class="cj-joke-footer-link font-weight-semibold"
      >
        See stats <img src="@/assets/svg/arrow-right.svg"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleClick(id) {
      this.$emit('click', id);
    },
  },
};
</script>

<style lang="scss" scoped>
.cj-joke {
  @include until("tablet") {
    width: 100%;
  }
  flex-direction: column;
  display: flex;
  padding: 1rem;
  border: 1px solid $grey-light;
  // width: 22.5rem;
  transition: 0.3s ease;
  &:hover {
    box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.15);
  }
  .cj-joke-header {
    margin-bottom: 0.375rem;
    display: flex;
    align-items: center;
    text-transform: uppercase;

    > img {
      margin-right: 0.5rem;
    }
  }

  .cj-joke-footer {
    margin-top: 2rem;
    display: flex;
    justify-content: flex-end;

    .cj-joke-footer-link {
      display: flex;
      align-items: center;
      > img {
        margin-left: 0.5rem;
      }
    }
  }
}
</style>
