<template>
  <dropdown class="navbar-item">
    <a class="dropdown-trigger animatable"
       slot="trigger">
      {{ $t('navbar.languages') }} <i class="mdi mdi-menu-down" />
    </a>

    <a v-for="(language, index) in languages"
       :key="index"
       :class="{ selected: getLanguage === language.id }"
       @click="$emit('selectedLanguage', language.id)"
       slot="options"
       class="dropdown-item">
      {{ language.name }}
    </a>
  </dropdown>
</template>

<script>
import { mapGetters } from 'vuex';
import Dropdown from '@/components/Dropdown';

export default {
  name: 'DropdownLanguage',
  components: {
    Dropdown,
  },
  computed: {
    ...mapGetters([
      'getLanguage',
    ]),
  },
  data() {
    return {
      selectedLanguage: 'en',
      modalActive: false,
      languages: [
        {
          id: 'pt-BR',
          name: 'Portuguese'
        },
        {
          id: 'en',
          name: 'English',
        },
        {
          id: 'ru',
          name: 'Russian',
        },
        {
          id: 'el-GR',
          name: 'Greek',
        },
        {
          id: 'es',
          name: 'Spanish',
        },
        {
          id: 'kaz',
          name: 'Kazakh',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.dropdown-item.selected {
  /*background-color: black;*/
}
</style>
