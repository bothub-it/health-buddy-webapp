<template>
  <div class="about">
    <text-section id="about"
                  class="home__section">
      <h2 slot="title">
        {{ $t('features.title') }}
      </h2>


      <div slot="text">
        <p v-if="showFeatures">
          {{ $t('features.text') }}
        </p>
        <div v-if="!showFeatures">
          <p>
            {{ $t('features.text_1') }}
          </p>
          <p>
            {{ $t('features.text_2') }}
          </p>
          <p>
            {{ $t('features.text_3') }}
          </p>
        </div>

        <FeatureList v-if="showFeatures"
                     :list="features"
                     slot="content"
                     class="home__section"/>
      </div>
    </text-section>
  </div>
</template>

<script>
import TextSection from '@/components/TextSection';
import FeatureList from '../components/FeatureList';

export default {
  name: 'About',
  components: {
    FeatureList,
    TextSection,
  },
  computed: {
    showFeatures() {
      return this.$t( 'features.showFeatures') !== 'no';
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
.about {
    margin: 74px 0 0;

    @media only screen and (max-width: 1150px) {
      max-width: 720px;
    }

    &__open {
      max-width: 60%;
      margin: 1.5rem;
    }

    max-width: 1140px;
    padding: 60px 0;
    margin: 0 auto;
}
</style>
