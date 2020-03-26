/* eslint-disable vue/valid-template-root */
<template>
    <div class="hero">

        <div class="columns animated animatedFadeInUp fadeInUp">
          <div class="column is-two-fifths is-centered">
            <img class="hero__img-doctor" src="../assets/img/doctor-circle.png"/>
          </div>
          <div>
            <div class="column">
              <div class="hero__content">
                <h1 class="hero__title">HealthBuddy</h1>
                <p class="hero__subtitle">Your very own buddy for info about COVID-19.</p>
                <p class="hero__subtitle">Just a text message away!</p>
                  <img class="hero__img hero__img-unicef" src="../assets/img/unicef-horizontal.png"/>
                  <img class="hero__img hero__img-who" src="../assets/img/who-logo.png"/>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Hero',
}
</script>

<style lang="scss" scoped>

  .hero {
    width: 100%;
    position: relative;
    overflow: hidden;
    padding: 10vh 0 0 0;
    min-height: 52vh;
  }

  .hero::before {
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

  .hero {

      font-family: "Open Sans", sans-serif;
      color: #585a61;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #212529;
      text-align: left;

      &__content {

        text-align: left;

        @media only screen and (max-width: 760px) {
          max-width: 720px;
          text-align: center;
        }
      }

      &__title {
        margin: 9vh 0 0 0;
        font-size: 48px;
        font-weight: 500;
        line-height: 56px;
        color: #1CABE2;
        font-family: "Poppins", sans-serif;
        margin-bottom: .5rem;
      }

      &__subtitle {
        color: #777779;
        font-size: 18px;
        margin-bottom: .5rem;
        font-weight: 500;
        line-height: 1.2;
      }

      &__img {

        vertical-align: middle;

        &-unicef {
          width: 30vh;
          margin-right: 3vh;
        }

        &-who {
          width: 18vh;
          margin-right: 3vh;
        }

        &-doctor {
          width: 26vh;
          margin-top: 7vh;
          margin-left: 8vh;
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