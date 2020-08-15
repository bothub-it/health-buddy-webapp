/* eslint-disable vue/valid-template-root */
<template>
  <div class="home">
    <Hero id="home" :class="{'home__section__open-hero': withMargin }" />
    <text-section id="how"
                  class="home__section"
                  :class="{'home__section__open': withMargin }">
      <h2 slot="title">
        {{ $t('tips.title') }}
      </h2>
      <div slot="text">
        <p>
          {{ $t('tips.tip_1') }}
          <br>
          <br>
          {{ $t('tips.tip_2') }}
          <br>
        </p>
        <p>
          <strong>{{ $t('tips.tip_3.emphasis_1') }}</strong> {{ $t('tips.tip_3.text_1') }}
        </p>
        <p>
          <strong>{{ $t('tips.tip_3.emphasis_2') }}</strong> {{ $t('tips.tip_3.text_2') }}
        </p>
        <p>
          <strong>{{ $t('tips.tip_3.emphasis_3') }}</strong> {{ $t('tips.tip_3.text_3') }}
        </p>
      </div>
    </text-section>
    <text-section  class="home__section"
                   :class="{'home__section__open': withMargin }">
      <h2 slot="title">
        {{ $t('features.title') }}
      </h2>
      <div slot="text">
        <p>
          {{ $t('features.text') }}
        </p>

        <FeatureList :list="features"
                     slot="content"
                     class="home__section"/>
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
      </text-section>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero';
import TextSection from '@/components/TextSection';
import InfoVideoList from '@/components/InfoVideoList';
import { mapGetters } from 'vuex';
import { isMobile } from '@/util/browser';
import FeatureList from '../components/FeatureList';

export default {
  name: 'Home',
  components: {
      Hero,
      TextSection,
      InfoVideoList,
    FeatureList,
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
  mounted() {
    this.initVideos();
    this.resetVideos();
  },
}
</script>

<style lang="scss" scoped>

</style>
