<template>
  <div class="footer">
    <div class="footer__wrapper">
      <div class="footer__info">
        {{ $t('extraInfo.text') }}
      </div>
      <div class="footer__info-images">
        <a href="https://www.unicef.org/eca/" title="UNICEF ECARO">
          <img class="footer__info-images__unicef" :src="unicefLogo" alt="UNICEF ECARO">
        </a>
        <a href="http://www.euro.who.int/en/home" title="WHO/Europe">
          <img class="footer__info-images__who" :src="whoLogo" alt="WHO/Europe">
        </a>
      </div>
      <div class="footer__links">
        <div>
          <router-link :to="'privacy'" :title="$t('footer.policy')">
            {{ $t('footer.policy') }}
          </router-link>
        </div>
        <div>
          <a href="https://bothub.it/" :title="$t('footer.bothub')">
            {{ $t('footer.bothub') }}
          </a>
        </div>
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
$img-height: 9vh;
.footer {
  width: 100%;
  color: #47536e;
  font-size: 1em;
  background: white;
  padding: 0;

  &__links {
    margin: 1.5vh;
    flex-wrap: wrap;
    column-gap: 1rem;
    justify-content: flex-start;
  }

  &__info-images, &__info {
    background-color: #047afb;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  &__info-images {
    padding: 2vh 3vh 3vh;

    &__unicef {
      max-width: 100%;
      height: $img-height;
      margin-right: 3vh;
    }

    &__who {
      max-width: 100%;
      height: $img-height;
      margin-right: 3vh;
    }
  }

  &__info {
    color: white;
    padding: 1vh 5vh;
    text-align: center;
  }

  &__wrapper {
    margin: 0 auto;
    width: 100%;
    display: flex;
    column-gap: 50px;
    flex-wrap: wrap;
  }

  a {
    color: #2089fb;
  }

  a:hover {
    color: #7b94c9;
  }
}
</style>
