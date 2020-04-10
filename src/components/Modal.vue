<template>
    <div :class="['modal', active ? 'is-active' : '']">
      <div @click="close()"
           class="modal-background"/>
      <div class="modal-content">
        <slot />
    </div>
    <button @click="close()"
            aria-label="close"
            class="modal-close is-large"/>
</div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close() {
      this.$emit('update:active', false);
      },
  },
};
</script>

<style lang="scss" scoped="true">
.modal {
    &-content {
        background: white;
        border-radius: 15px;
        padding: 1rem;
    }
}
</style>
