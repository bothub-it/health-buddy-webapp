<template>
  <div class="about">
    <text-section id="about"
                  class="home__section">
      <h2 slot="title">
        {{ $t('about.title') }}
      </h2>


      <div slot="text">
        <p>
          {{ $t('about.text_1') }}
        </p>
        <p>
          {{ $t('about.text_2') }}
        </p>
        <p>
          {{ $t('about.text_3-1') }}
        </p>

        <ul>
          <li class="">
            <span v-if="$t('about.feature_3_title')" class="has-text-weight-bold">{{ $t('about.feature_1_title') }}:</span>
            {{ $t('about.feature_1_text') }}
          </li>
          <li class="">
            <span v-if="$t('about.feature_3_title')" class="has-text-weight-bold">{{ $t('about.feature_2_title') }}:</span>
            {{ $t('about.feature_2_text') }}
          </li>
          <li class="">
            <span v-if="$t('about.feature_3_title')" class="has-text-weight-bold">{{ $t('about.feature_3_title') }}:</span>
            {{ $t('about.feature_3_text') }}
          </li>
        </ul>
        <p>
          {{ $t('about.text_4') }}
        </p>

        <h3 class="has-text-weight-bold">
          {{ $t('about.text_title_5') }}
        </h3>

        <p>
          {{ $t('about.text_5') }}
        </p>

      </div>
    </text-section>
  </div>
</template>

<script>
import TextSection from '@/components/TextSection';

export default {
  name: 'About',
  components: {
    TextSection,
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

  ul {
    margin-bottom: 20px;
  }
}
</style>
