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
          {{ $t('about.text_3') }}
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
}
</style>
