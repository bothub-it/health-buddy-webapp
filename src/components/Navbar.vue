<template>
  <div class="navbar__wrapper">
    <modal :active.sync="modalActive">
      <router-link v-for="item in items"
                   :key="item.id"
                   :to="`index#${item.id}`"
                   @click="modalActive=false"
                   class="modal-item">
              {{ item.title }}
      </router-link>
    </modal>
    <nav class="navbar"
         role="navigation"
         aria-label="dropdown navigation">
      <div class="navbar-brand">
        <img class="navbar-item navbar__logo"
             src="@/assets/img/doctor-square.png">

        <a class="navbar-item"
           href="https://healthbuddy.info/index.html">
          <h1 class="navbar__title"> HealthBuddy </h1>
        </a>

        <div class="navbar-burger">
          <div class="navbar-item">
            <LanguageDropdown @selectedLanguage="didClickLanguage($event)" />
            <a @click="modalActive=true"
               class="navbar-item"
               role="button"
               aria-label="menu"
               aria-expanded="false">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>


      <div class="navbar-menu">
        <div class="navbar-end">
          <router-link v-for="item in items"
                       :key="item.id"
                       :to="`index#${item.id}`"
                       class="navbar-item animatable">
            {{ item.title }}
          </router-link>

          <LanguageDropdown @selectedLanguage="didClickLanguage($event)" />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import LanguageDropdown from '@/components/LanguageDropdown';
import Modal from '@/components/Modal';

export default {
    name: 'Navbar',
    components: {
      LanguageDropdown,
      Modal,
    },
    data() {
      return {
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
          }
        ],
      }
    },
    computed: {
      ...mapGetters([
        'getLanguage',
      ]),
      items() {
        return [
          {
            id: "home",
            title: this.$t('navbar.home'),
          },
          {
            id: "about",
            title: this.$t('navbar.about'),
          },
          {
            id: "info",
            title: this.$t('navbar.videos'),
          },
        ];
      },
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
      didClickLanguage(language) {
        this.setLanguage(language);
      },
    }
}
</script>

<style lang="scss" scoped>

.navbar-brand {
  align-items: center;
}

.modal-item {
  display: block;
  margin: 0.75rem;
}

.animatable {
  transition: all .1s;
}

.animatable:hover {
  font-weight: bold;
  transform: scale(1.1);
}

.navbar {

  max-width: 1140px;
  margin: 0 auto;
  background-color: #374EA2;

  &__icon {
    font-size: 25px;
  }

  &-item {
    &:focus {
      background-color: inherit;
      color: white;
    }
    &.router-link-active {
      font-weight: bold;
    }
  }



  &-item, /deep/ .dropdown-trigger {
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    color: white;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    display: flex;
    align-content: center;
  }

  &-item:hover, &-burger:hover, /deep/ .dropdown-trigger:hover {
    background-color: transparent;
    color: white;
  }

  &-burger {
    color: white;
    width: inherit;
    > .navbar-item {
      padding-left: 0;
    }
  }

  &__wrapper {
    left: 0;
    position: fixed;
    right: 0;
    z-index: 29;
    background-color: #374EA2;
    top: 0;
  }

  &__title {
    color: white;
    text-decoration: none;
    font-size: 30px;
    line-height: 1;
    font-weight: 400;
    letter-spacing: 2px;
    font-family: "Raleway", sans-serif;

    @media (max-width: 768px) {
      font-size: 20px;
    }
    @media (max-width: 350px) {
      font-size: 15px;
    }
    @media (max-width: 310px) {
      font-size: 12px;
    }
  }

  &__logo {
    max-height: 50px;
    padding: 2px;
    border-style: none;
    @media (max-width: 350px) {
      max-height: 40px;
    }
  }
}
</style>
