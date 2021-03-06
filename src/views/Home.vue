/* eslint-disable vue/valid-template-root */
<template>
  <div class="home">
    <Chat :is-open.sync="isOpen" />
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
          {{ $t('features.text') }}
        </p>
      </div>
      <FeatureList :list="features"
                   slot="content"
                   class="home__section"/>
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
import Hero from '@/components/Hero';
import TextSection from '@/components/TextSection';
import FeatureList from '@/components/FeatureList';
import InfoVideoList from '@/components/InfoVideoList';
import Chat from '@/components/Chat'
import { mapGetters } from 'vuex';
import { isMobile } from '@/util/browser';

export default {
  name: 'Home',
  components: {
      Hero,
      TextSection,
      FeatureList,
      InfoVideoList,
      Chat,
  },
  data() {
    return {
      isOpenVideos: true,
      isOpen: false,
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
          iconName: "mdi mdi-comment-check-outline",
          title: this.$t( 'features.feature_1_title'),
          text: this.$t( 'features.feature_1_text'),
        },
        {
          iconName: "mdi mdi-earth",
          title: this.$t( 'features.feature_2_title'),
          text: this.$t( 'features.feature_2_text'),
        },
        {
          iconName: "mdi mdi-vector-intersection",
          title: this.$t( 'features.feature_3_title'),
          text: this.$t( 'features.feature_3_text'),
        },
        {
          iconName: "mdi mdi-book-open-variant",
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
    margin: 0 auto;
    padding: 20px 20px;
    max-width: 1140px;
    @media only screen and (max-width: 1150px) {
      max-width: 720px;
    }

    &__open {
      max-width: 60%;
      margin: 1.5rem;
    }

    &__open-hero {
      /deep/ .banner__columns {
        max-width: 60%;
        margin: 1.5rem;
      }
    }

    &__wrapper {
      width: 100%;
      background-color: #f2f5fa;
    }

    &__title {
      margin: 11vh 0 2vh 0;
      font-size: 38px;
      font-weight: 500;
      line-height: 56px;
      color: #007BFF;
      font-family: "Poppins", sans-serif;
    }
  }
}

</style>
