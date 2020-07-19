/* eslint-disable vue/valid-template-root */
<template>
  <div class="home">
    <Hero id="home" :class="{'home__section__open-hero': withMargin }" />
    <text-section id="how"
                  class="home__section"
                  :class="{'home__section__open': withMargin }">
      <h2 slot="title">
        {{ $t('about.title') }}
      </h2>
      <div slot="text">
        <p>
          {{ $t('about.about_1') }}
          <br>
          <br>
          {{ $t('about.about_2') }}
          <br>
        </p>
        <p>
          <strong>{{ $t('about.about_3.emphasis_1') }}</strong> {{ $t('about.about_3.text_1') }}
        </p>
        <p>
          <strong>{{ $t('about.about_3.emphasis_2') }}</strong> {{ $t('about.about_3.text_2') }}
        </p>
        <p>
          <strong>{{ $t('about.about_3.emphasis_3') }}</strong> {{ $t('about.about_3.text_3') }}
        </p>
        <p>
          <strong>{{ $t('about.about_3.emphasis_4') }}</strong> {{ $t('about.about_3.text_4') }}
        </p>
      </div>
    </text-section>

    <text-section id="about"
                  class="home__section"
                  :class="{ 'home__section__open': withMargin }">
      <h2 slot="title">
        {{ $t('features.title') }}
      </h2>
      <div slot="text">
        <p>
          {{ $t('features.text_1') }}
        </p>
        <p>
          {{ $t('features.text_2') }}
        </p>
      </div>
      <FeatureList :list="features"
                   slot="content"
                   class="home__section"/>
      <div slot="after-content">
        <p>
          {{ $t('features.text_3') }}
        </p>
        <div class="columns  has-text-centered m-1 m-l-0 m-r-0">
          <div class="column is-4 p-1">
            <div class="feature-box p-1">
              <div class="m-1">
                <img src="../assets/img/bms/1-0-0.svg" />
              </div>
              <router-link class="subtitle" :to="{ name: 'violation' }">
                What is a violation?
              </router-link>
            </div>
          </div>
          <div class="column is-4 p-1">
            <div class="feature-box p-1">
              <div class="m-1">
                <img src="../assets/img/bms/0-1-0.svg" />
              </div>
              <router-link class="subtitle" to="/">
                Would you like to report a violation?
              </router-link>
            </div>
          </div>
          <div class="column is-4 p-">
            <div class="feature-box p-1">
              <div class="m-1">
                <img src="../assets/img/bms/0-0-1.svg" />
              </div>
              <router-link class="subtitle" to="/">
                Would you like to get more information about the code in your city?
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </text-section>

    <div v-if="isOpenVideos"
         id="video"
         class="home__section__wrapper"
         aria-labelledby="carouselheading">
      <text-section class="home__section" :class="{ 'home__section__open': withMargin }">
        <h2 id="carouselheading" slot="title">
          {{ $t('videos.title') }}
        </h2>
        <InfoVideoList
          slot="content"
          :videos="videos"
        />
        <FeatureList :list="features"/>
      </text-section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Hero from '../components/Hero.vue';
import TextSection from '../components/TextSection.vue';
import FeatureList from '../components/FeatureList.vue';
import InfoVideoList from '../components/InfoVideoList.vue';
import { isMobile } from '../util/browser';

export default {
  name: 'Home',
  components: {
      Hero,
      TextSection,
      FeatureList,
      InfoVideoList,
  },
  data() {
    return {
      isOpenVideos: true,
      videos: [],
    };
  },
  methods: {
    initVideos() {
      this.videos = [
        {
          url: this.$t('videos.video_1_url'),
          title: this.$t('videos.video_1_title'),
        },
        {
          url: this.$t('videos.video_2_url'),
          title: this.$t('videos.video_2_title'),
        },
        {
          url: this.$t('videos.video_3_url'),
          title: this.$t('videos.video_3_title'),
        },
        {
          url: this.$t('videos.video_4_url'),
          title: this.$t('videos.video_4_title'),
        },
      ];
    },
    resetVideos() {
      this.isOpenVideos = false;
      setTimeout(() => this.isOpenVideos = true, 0);
    }
  },
  watch: {
      // eslint-disable-next-line
      '$i18n.locale'() {
        this.resetVideos();
        this.initVideos();
      },
      isOpen() {
        document.body.classList.toggle('opened')
        if (isMobile()) {
          document.body.classList.toggle('mobile')
        }
        this.resetVideos();
      },
  },
  computed: {
    ...mapGetters([
      'getLanguage',
    ]),
    withMargin() {
      return this.isOpen && !isMobile();
    },
    features() {
      return [
        {
          iconName: "mdi mdi-chevron-right",
          title: this.$t( 'features.feature_1_title'),
          text: this.$t( 'features.feature_1_text'),
        },
        {
          iconName: "mdi mdi-chevron-right",
          title: this.$t( 'features.feature_2_title'),
          text: this.$t( 'features.feature_2_text'),
        },
        {
          iconName: "mdi mdi-chevron-right",
          title: this.$t( 'features.feature_3_title'),
          text: this.$t( 'features.feature_3_text'),
        },
        {
          iconName: "mdi mdi-chevron-right",
          title: this.$t( 'features.feature_4_title'),
          text: this.$t( 'features.feature_4_text'),
        },
      ];
    },
  },
}
</script>

<style lang="scss" scoped>

.home {
  &__section {
    padding: 1em;

    &__wrapper {
      background-color: #f2f5fa;
    }

    &__title {
      margin: 11vh 0 2vh 0;
      font-size: 38px;
      font-weight: 500;
      line-height: 56px;
      color: #2089fb;
      font-family: "Poppins", sans-serif;
    }
  }
}
.feature-box {
  height: 100%;
  border-radius: 5px;
  box-shadow: 0px 9px 12px -1px rgba(0,0,0,0.47);
  .subtitle {
    color: #36ade1;
  }
}
</style>
