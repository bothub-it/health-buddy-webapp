<template>
  <div class="footer">
    <div class="footer__wrapper">
      <div class="footer__info-images">
        <a href="https://www.unicef.org/eca/"><img
          class="footer__info-images__unicef"
          :src="unicefLogo"
        ></a>
        <a href="http://www.euro.who.int/en/home"><img
          class="footer__info-images__who"
          :src="whoLogo"
        ></a>
      </div>
      <div class="footer__links">
        <a href="https://bothub.it/"> 
          {{ $t('footer.bothub') }}
        </a>
        <router-link :to="'privacy'">
          {{ $t('footer.policy') }}
        </router-link> 
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Footer',
    computed: {
      ...mapGetters([
        'getLanguage',
      ]),
      unicefLogo() {
        return require(this.getLanguage !== 'ru' ? 
          "@/assets/img/unicef-eu-asia.png" : "@/assets/img/unicef-russian-white.png");
      },
      whoLogo() {
        return require("@/assets/img/who-europe-white.png");
      },
    },
}
</script>

<style lang="scss" scoped>
    .footer {
        width: 100%;
        color: #47536e;
        font-size: 14px;
        background: white;
        padding: 0;

    &__links {
        margin: 3vh;
        display: flex;
        flex-wrap: wrap;
        column-gap: 1rem;
        justify-content: flex-start;
    }

    &__info-images{
        padding: 3vh;
        background-color: #1CABE2;
        margin-top: 15vh;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        &__unicef {
          max-width:100%;
          height: auto;
          width: 18vh;
          margin-right: 3vh;
        }

        &__who {
          max-width:100%;
          height: auto;
          width: 28vh;
          margin-right: 3vh;
        }
      }

        &__wrapper {
            margin: 0 auto;
            width: 100%;
            display: flex;
            column-gap: 50px;
            flex-wrap: wrap;
        }

        a {
            color: #1CABE2;
        }

        a:hover {
            color: #7b94c9;
        }
    }
</style>