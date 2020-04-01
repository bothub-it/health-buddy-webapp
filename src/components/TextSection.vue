<template>
  <div class="section">
    <div class="section__title">
      <slot name="title" />
    </div>

    <div class="section__text">
      <slot name="text" />
    </div>

    <div class="section__content">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
    name: 'TextSection'
}
</script>

<style lang="scss" scoped>
    .section {
        padding: 60px 0;
        overflow: hidden;
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 20px;
        padding-bottom: 0;
        color: #1CABE2;
        font-family: "Poppins", sans-serif;

        p {
            margin-bottom: 20px;
        }

        strong {
            color: inherit;
        }

        &__title {
            font-size: 32px;
            margin-top: 0;
            font-family: "Poppins", sans-serif;
        }

        &__text {
            margin-bottom: 0;
            color: #777779;
        }
    }
</style>