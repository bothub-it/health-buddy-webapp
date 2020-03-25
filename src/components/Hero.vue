/* eslint-disable vue/valid-template-root */
<template>
    <div class="hero">

        <div class="hero__container">
        <div class="row">
            <div class="column" data-aos="fade-up">
            <div>
                <h1 class="hero__title">HealthBuddy</h1>
                <h2 class="hero__subtitle">Your very own buddy for info about COVID-19. Just a text message away!</h2>
                <div>
                <img class="hero__img hero__img-unicef" src="../assets/img/unicef-horizontal.png"/>
                <img class="hero__img hero__img-who" src="../assets/img/who-logo.png"/>
                </div>
            </div>

            </div>
            <div class="" data-aos="fade-up">
            <img class="hero__img-doctor" src="../assets/img/doctor-square.png"/>
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

  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }

  .column {
    flex-direction: column-reverse !important;
    align-items: stretch !important;
    justify-content: center !important;
    display: flex !important;
    flex: 0 0 50%;
    max-width: 50%;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }

  .hero {

      font-family: "Open Sans", sans-serif;
      color: #585a61;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #212529;
      text-align: left;

      &__container {
        max-width: 960px;
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
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
        font-size: 20px;
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
          width: 35vh;
        }
    }
  }

</style>