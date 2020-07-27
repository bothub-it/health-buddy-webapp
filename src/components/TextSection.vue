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
</style>
