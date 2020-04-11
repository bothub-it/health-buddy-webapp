<template>
  <div :class="{ 'is-active': dropdownActive }" class="dropdown">
    <div @click="dropdownActive = !dropdownActive" >
      <slot name="trigger" />
    </div>
    <div @click="dropdownActive = false" class="dropdown-menu">
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

<style lang="scss" scoped>
.dropdown {
  display: flex;
  align-items: center;
  position: relative;
  .dropdown-menu {
    background-color: white;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: .25rem;
    position: absolute;
    right: 0;
    left: inherit;
    top: 80%;
 }
}
</style>
