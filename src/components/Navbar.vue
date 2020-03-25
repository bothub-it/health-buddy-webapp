<template>
<div class="navbar__wrapper">
    <nav class="navbar is-fixed-top" role="navigation" aria-label="dropdown navigation">
        <div class="navbar-brand">
          
    <a class="navbar-item" href="https://bulma.io">
      <img class="navbar__logo" src="../assets/img/doctor-square.png">
      <h1 class="navbar__title"> HealthBuddy </h1>
    </a>
    
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
</a>
  </div>

  <div class="navbar-end">

    <div class="navbar-menu">
        <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        How it works
      </a>

            <a class="navbar-item">
        About
      </a>

            <a class="navbar-item">
        Informative Videos
      </a>
       </div>
    </div>
      </div>
      
      <!-- <div :class="['navbar-item has-dropdown', dropdownActive ? 'is-active' : '']">
        <a @click="triggerDrodown" class="navbar-link dropdown-trigger" >
          More
        </a>

        <div class="navbar-dropdown">
          <a v-for="(language, index) in languages"
          :key="index" class="navbar-item"
          @click="didClickLanguage(language)">
            {{ language }}
          </a>
        </div>
    </div> -->
    </nav>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
      return {
        dropdownActive: false,
        languages: [
          "Portuguese",
          "English",
          "Russian",
        ]
      } 
    },
    methods: {
      triggerDrodown() {
        this.dropdownActive = !this.dropdownActive
      },
      didClickLanguage(language) {
        console.log(language);
        this.dropdownActive = false;
      }
    }
}
</script>

<style lang="scss" scoped>
  .navbar {

    .navbar-item {
      color: white;
      font-weight: 400;
      line-height: 1.5;
      text-align: left;
    }

    max-width: 1140px;
    margin: 0 auto;
    background-color: #374EA2;

    &-burguer {
      color: white;
    }

    &__wrapper {
      left: 0;
      position: fixed;
      right: 0;
      z-index: 29;
      background-color: #374EA2;
      height: 72px;
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
      margin-top: -1vh;
      max-height: 7vh;
      border-style: none;
    }
  }
</style>