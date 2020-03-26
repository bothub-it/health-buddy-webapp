<template>
<div class="navbar__wrapper">
    <nav class="navbar is-fixed-top" role="navigation" aria-label="dropdown navigation">
        <div class="navbar-brand">
    
    <img class="navbar-item navbar__logo" src="../assets/img/doctor-square.png">

    <a class="navbar-item" href="https://healthbuddy.info/index.html">
      <h1 class="navbar__title"> HealthBuddy </h1>
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <div :class="['dropdown', dropdownActive ? 'is-active' : '']">
        <a @click="triggerDrodown" class="dropdown-trigger" >
          <i class="mdi mdi-earth" /><i class="mdi mdi-menu-down" />
        </a>

        <div class="dropdown-menu">
          <a v-for="(language, index) in languages"
          :key="index" class="dropdown-item"
          @click="didClickLanguage(language.id)">
            {{ language.name }}
          </a>
        </div>
    </div>
    </a>
    
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div class="navbar-end">

    <div class="navbar-menu">
        <div class="navbar-start">
      <a 
      v-for="item in items" 
      :key="item.id" 
      class="navbar-item animatable">
        {{ item.title }}
      </a>

      <div :class="['navbar-item dropdown', dropdownActive ? 'is-active' : '']">
        <a @click="triggerDrodown" class="icon dropdown-trigger" >
          <i class="mdi mdi-earth" /><i class="mdi mdi-menu-down" />
        </a>

        <div class="dropdown-menu"
        @blur="dropdownActive=false">
          <a v-for="(language, index) in languages"
          :key="index" class="dropdown-item"
          @click="didClickLanguage(language.id)">
            {{ language.name }}
          </a>
        </div>
    </div>
       </div>
    </div>
      </div>
    </nav>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'Navbar',
    props: {
      items: {
        type: Array,
      },
    },
    data() {
      return {
        dropdownActive: false,
        languages: [
          {
            id: 'pt',
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
        ]
      } 
    },
    methods: {
      ...mapActions([
        'setLanguage',
      ]),
      triggerDrodown() {
        this.dropdownActive = !this.dropdownActive
      },
      didClickLanguage(language) {
        this.setLanguage(language);
        this.dropdownActive = false;
      }
    }
}
</script>

<style lang="scss" scoped>

  .dropdown {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    &-menu {
      background-color: white;
      border: 1px solid rgba(0,0,0,.15);
      border-radius: .25rem;
      position: absolute;
      left: -20% !important;
    }
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

    &-item, .dropdown-trigger {
      color: white;
      font-weight: 400;
      line-height: 1.5;
      text-align: left;
    }

    &-item:hover, &-burger:hover, .dropdown-trigger:hover {
      background-color: transparent;
      color: white;
    }

    &-burger {
      color: white;
    }

    &__wrapper {
      left: 0;
      position: fixed;
      right: 0;
      z-index: 29;
      background-color: #374EA2;
      height: 74px;
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
    }

    &__logo {
      margin-top: 1vh;
      max-height: 7vh;
      border-style: none;
    }
  }
</style>