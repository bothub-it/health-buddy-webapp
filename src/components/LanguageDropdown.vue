<template>
  <dropdown class="navbar-item">
    <a class="dropdown-trigger animatable"
       slot="trigger">
      {{ $t('navbar.languages') }} <i class="mdi mdi-menu-down" />
    </a>

    <a v-for="(language, index) in languages"
       :key="index"
       :class="{ selected: getLanguage === language.id }"
       @click="setLanguage(language.id)"
       slot="options"
       class="dropdown-item">
      {{ language.name }}
    </a>
  </dropdown>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Dropdown from '@/components/Dropdown';
import { validLanguages } from '@/util/language';

export default {
  name: 'DropdownLanguage',
  components: {
    Dropdown,
  },
  computed: {
    ...mapGetters([
      'getLanguage',
    ])
  },
  data() {
    return {
      selectedLanguage: 'en',
      modalActive: false,
      languages: validLanguages,
    }
  },
  watch: {
    getLanguage() {
      this.$i18n.locale = this.getLanguage;
    },
  },
  methods: {
    ...mapActions([
      'setLanguage',
    ]),
  }
}
</script>
<style lang="scss" scoped>
.dropdown-item.selected {
  background-color: #374EA2;
  color: white;
}
</style>
