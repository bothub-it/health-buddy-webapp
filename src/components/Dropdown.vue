<template>
    <div :class="['dropdown', dropdownActive ? 'is-active' : '']">
        <div @click="dropdownActive = !dropdownActive" >
            <slot name="trigger" />
        </div>
        <div @click="dropdownActive = false">
            <slot name="options" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Dropdown',
    data() {
        return {
            dropdownActive: false,
        }
    },
    created() {
        window.addEventListener('click', (e) => {
            if (!this.$el.contains(e.target)) {
                this.dropdownActive = false;
            }
        });
    },
}
</script>