<template>
  <div class="banner">
    <div class="banner__columns">
      <div class="banner__columns__column">
        <img class="banner__img-bms"
             src="@/assets/img/bms/bms-header-logo.svg"
             alt="BMS logo">
      </div>
      <div class="banner__columns__column">
        <div class="banner__content">
          <h1 class="banner__title">
            Baby Feeding Codifier
          </h1>
          <p class="banner__subtitle">
            {{ $t('hero.title') }}
          </p>
          <p class="banner__subtitle">
            {{ $t('hero.subtitle') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'Hero',
    computed: {
      ...mapGetters([
        'getLanguage',
      ]),
      unicefLogo() {
        return require(this.getLanguage === 'ru' ?
          "@/assets/img/unicef-russian.png" : "@/assets/img/unicef-horizontal.png");
      },
      whoLogo() {
        return require("@/assets/img/who-logo.png");
      },
    },
  }
</script>

<style lang="scss" scoped>

.banner {
  padding: 1em;
  margin-top: 80px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  font-family: "Open Sans", sans-serif;
  color: #212529;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;

  &__columns {
    display: flex;
    align-items: center;
    &__column {
      display: flex;
      align-items: center;
      margin-left: 20px;
      &:first-child {
        margin-left: 0;
      }
    }

    @media (max-width: 600px) {
      flex-direction: column;
      justify-content: center;
      &__columng {
        text-align: center;
      }
    }
  }

  &__logos {
    margin: 7vh 0 2vh;
  }

  &__content {
    text-align: left;

    @media only screen and (max-width: 600px) {
      text-align: center;
    }
  }

  &__title {
    margin-bottom: 25px;
    font-family: "Poppins", sans-serif;
    font-size: 48px;
    font-weight: 500;
    line-height: 56px;
    color: #2089fb;

    @media (max-width: 900px) {
      font-size: 30px;
    }
  }

  &__subtitle {
    color: #2D2926;
    font-size: 18px;
    margin-bottom: .5rem;
    font-weight: 500;
    line-height: 1.5;

    @media (max-width: 900px) {
      font-size: 20px;
    }
  }

  &__img {

    vertical-align: middle;

    &-unicef {
      width: 18vh;
      margin-right: 3vh;
    }

    &-who {
      width: 18vh;
      margin-right: 3vh;
    }

    &-bms {
      width: 26vh;
      min-width: 200px;
      display: block;
    }
    @media (max-width: 350px) {
      min-width: inherit;
    }
  }
}

</style>
