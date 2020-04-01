/* eslint-disable vue/valid-template-root */
<template>
  <div class="home">
    <Chat
      :is-open.sync="isOpen"
    />
    <Hero id="home" />
    <text-section 
      id="how" 
      :class="['home__section', isOpen ? 'home__section__open' : '']"
    >
      <p slot="title">
        Ask me about COVID-19
      </p>
      <div slot="text"> 
        <p>
          Hi, I’m your HealthBuddy. Just contact me via the chat window and I will give you information about the novel coronavirus disease (COVID-19). Ask anything about the virus, the disease and the pandemic and I will find the information for you, from the trusted sources of WHO and UNICEF. Before you start, here are the different options you have for talking to me:
        </p>
        <p>
          <strong>1. Select your language:</strong> I’ll detect the language setting of your browser and, if available, will automatically speak in that language. You can also change the chat language from the language dropdown menu at the top of this web page.
        </p>
        <p>
          <strong>2. Select from the list of common questions:</strong> To get a quick answer, you can select from the list of common questions that I display in the chat window.
        </p>
        <p>
          <strong>3. Send me your questions in natural language:</strong> Type in your question(s) in the chat window. Remember to write as if you are talking to your friend so I can understand and answer better. 
        </p>
      </div>
    </text-section>

    <text-section
      id="about"
      :class="['home__section', isOpen ? 'home__section__open' : '']"
    >
      <p slot="title">
        What is HealthBuddy
      </p>
      <p slot="text"> 
        HealthBuddy is a joint initiative of the WHO Regional Office for Europe and UNICEF’s Europe and Central Asia Regional Office. It is available on multiple social media and instant messaging platforms for users around the world to provide them with scientific and evidence-based advice. There is a lot of misinformation and myths about the new coronavirus (COVID-19 virus) circulating on the Internet and in social media. Misinformation is one of the biggest challenges in fighting COVID-19. This is why it’s important to be careful where you look for information and advice.  
      </p>
      <FeatureList
        slot="content"
        class="home__section"
        :list="features"
      />
    </text-section>

    <div 
      id="info"
      class="home__section__wrapper"
    >
      <text-section class="home__section">
        <p slot="title">
          Informative Videos
        </p>
        <InfoVideoList
          slot="content" 
          :urls="videoUrls"
        />
        <FeatureList :list="features" />
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
        isOpen: false,
        features: [
          {
            iconName: "mdi mdi-comment-check-outline",
            title: "Multi-channel support",
            text: "Integrate with social network, instant messengers, SMS, voice calls and more",
          },
          {
            iconName: "mdi mdi-earth",
            title: "Multi-language support",
            text: "HealthBuddy will automatically detect the language of your page and, if supported, will automatically speak in that language.",
          },
          {
            iconName: "mdi mdi-vector-intersection",
            title: "Ask the COVID-19 expert",
            text: "Your virtual health advisor, HealthBuddy, supported by experts from WHO and UNICEF, will provide you with useful and accurate information on COVID-19: for example, tips on how to protect yourself and others, and how to reduce the risk of infection. Find answers to your questions here and share with your friends, colleagues and families.",
          },
          {
            iconName: "mdi mdi-book-open-variant",
            title: "Report fake news (coming soon)",
            text: "Report rumors or fake statements you’re seeing around your region to keep others informed and see a detailed explanation here",
          },
        ],
        videoUrls: [
          "https://www.youtube.com/embed/QYxzo3-qZRc",
          "https://www.youtube.com/embed/JKpVMivbTfg",
          "https://www.youtube.com/embed/ujWFj_6FaMY",
          "https://www.youtube.com/embed/mOV1aBVYKGA",
        ],
      };
    },
    computed: {
      ...mapGetters([
        'getLanguage',
      ]),
    },
}
</script>

<style lang="scss" scoped>

  $home-margin: 74px;
    .home {
      margin: $home-margin 0 0;

      &__section {

        @media only screen and (max-width: 1150px) {
          max-width: 720px;
        }

        max-width: 1140px;
        padding: 60px 0;
        margin: 0 auto;

        &__open {
          max-width: 60%;
          margin: 1.5rem;
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
          color: #1CABE2;
          font-family: "Poppins", sans-serif;
        }
      }
    }

</style>