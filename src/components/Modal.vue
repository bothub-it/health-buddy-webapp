<template>
    <div :class="['modal', active ? 'is-active' : '']">
      <div 
        class="modal-background"
        @click="close()" />
      <div class="modal-content">
        <slot />
    </div>
    <button 
        class="modal-close is-large" 
        aria-label="close"
        @click="close()" />
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

<style lang="scss" scoped>
    .modal {
        &-content {
            background: white;
            border-radius: 15px;
            padding: 1rem;
        }
    }
</style>