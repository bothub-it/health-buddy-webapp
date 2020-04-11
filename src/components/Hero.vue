<template>
  <div class="banner">
      <div class="banner__columns animated animatedFadeInUp fadeInUp">
        <div class="banner__columns__column">
          <img class="banner__img-doctor"
               src="@/assets/img/doctor-circle.png"
               alt="">
        </div>
        <div class="banner__columns__column">
          <div class="banner__content">
            <h1 class="banner__title">
              HealthBuddy
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
  position: relative;
  overflow: hidden;
  font-family: "Open Sans", sans-serif;
  color: #212529;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;

  &::before {
    content: '';
    position: absolute;
    right: -100%;
    top: 20%;
    width: 230%;
    height: 200%;
    z-index: -1;
    background-color: rgba(28,171,226,0.2);
    transform: skewY(145deg);
  }

  &__columns {
    padding: 50px 10px;
    margin: 3.5em auto .5em auto;
    display: flex;
    max-width: 1150px;
    align-items: center;
    &__column {
      display: flex;
      align-items: center;
      margin-left: 20px;
      &:first-child {
        margin-left: 0;
      }
    }

    @media (max-width: 1150px) {
      flex-direction: column;
      justify-content: center;
    }
  }

  &__logos {
    margin: 7vh 0 2vh;
  }

  &__content {
    text-align: left;

    @media only screen and (max-width: 760px) {
      max-width: 720px;
      text-align: center;
    }
  }

  &__title {
    margin-bottom: 25px;
    font-family: "Poppins", sans-serif;
    font-size: 48px;
    font-weight: 500;
    line-height: 56px;
    color: #1CABE2;

    @media (max-width: 768px) {
      font-size: 30px;
    }
  }

  &__subtitle {
    color: #777779;
    font-size: 18px;
    margin-bottom: .5rem;
    font-weight: 500;
    line-height: 1.2;

    @media (max-width: 768px) {
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

    &-doctor {
      width: 26vh;
      display: block;
    }
  }
}

  /* Animation */

@keyframes fadeInUp {
  from {
    transform: translate3d(0,40px,0)
  }

  to {
    transform: translate3d(0,0,0);
    opacity: 1
  }
}

@-webkit-keyframes fadeInUp {
  from {
    transform: translate3d(0,40px,0)
  }
  to {
    transform: translate3d(0,0,0);
    opacity: 1
  }
}

.animated {
    animation-duration: 1s;
    animation-fill-mode: both;
    -webkit-animation-duration: 1s;
    -webkit-animation-fill-mode: both
}

.animatedFadeInUp {
    opacity: 0
}

.fadeInUp {
    opacity: 0;
    animation-name: fadeInUp;
    -webkit-animation-name: fadeInUp;
}

</style>
