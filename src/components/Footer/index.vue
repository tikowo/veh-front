<template>
  <div class="cj-footer">
    <div class="container">
      <div>
        <p class="text-white font-weight-semibold">
          Got jokes? Get paid for submitting!
        </p>
        <a class="font-weight-semibold size-4">SUBMIT JOKE</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.cj-footer {
  background: url("../../assets/images/person-smile.png");
  height: 12.125rem;

  .container {
    height: 100%;
    display: flex;
    align-items: center;

    > div {
      max-width: 12.875rem;

      > p {
        margin-bottom: 0.8125rem;
      }
    }
  }
}
</style>
