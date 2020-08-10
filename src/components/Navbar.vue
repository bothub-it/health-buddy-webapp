<template>
  <div class="navbar__wrapper">
    <nav class="navbar"
         role="navigation"
         aria-label="dropdown navigation">
      <div class="navbar-brand">
        <img class="navbar-item navbar__logo"
             src="@/assets/img/doctor-square.png"
             alt="HealthBuddy logo">

        <a class="navbar-item"
           href="https://healthbuddy.info/"
           title="HealthBuddy">
          <h1 class="navbar__title"> HealthBuddy </h1>
        </a>

        <div class="navbar-burger" :class="{ 'is-active': modalActive }">
          <div class="navbar-item">
            <LanguageDropdown />
            <a @click="modalActive=!modalActive"
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


      <div class="navbar-menu"
           :class="{ 'is-active': modalActive }">
        <div class="navbar-end">
          <router-link v-for="item in items"
                       :key="item.id"
                       :to="item.to"
                       :title="item.title"
                       :target="item.target"
                       class="navbar-item animatable">
            {{ item.title }}
          </router-link>

          <LanguageDropdown v-if="!modalActive"/>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import LanguageDropdown from '@/components/LanguageDropdown';

export default {
    name: 'Navbar',
    components: {
      LanguageDropdown,
    },
    data() {
      return {
        modalActive: false,
      }
    },
    computed: {
      items() {
        return [
          {
            id: "home",
            to: 'index#home',
            title: this.$t('navbar.home'),
          },
          {
            id: "about",
            to: { name: 'about' },
            title: this.$t('navbar.about'),
            target: '_blank',
          },
          {
            id: "video",
            to: 'index#video',
            title: this.$t('navbar.videos'),
          },
          {
            id: "webchat",
            to: 'index#webchat',
            title: this.$t('navbar.bot'),
          },
        ];
      },
    },
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
    font-size: 1em;
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
    height: inherit;
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
    line-height: 1.5;
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

.navbar-menu.is-active {
  .navbar-item {
    color: #2D2926;
  }

  .animatable:hover {
    transform: scale(1);
  }
}
</style>
