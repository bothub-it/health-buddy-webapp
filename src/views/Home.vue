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

export default {
  name: 'Home',
  components: {
      Hero,
      TextSection,
      InfoVideoList,
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
  },
  mounted() {
    this.initVideos();
    this.resetVideos();
  },
}
</script>

<style lang="scss" scoped>

</style>
