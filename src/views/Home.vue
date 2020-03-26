/* eslint-disable vue/valid-template-root */
<template>
<div class="home">
  <div id="webchat"/>
  <Navbar 
    :items="navbarItems"/>
  <Hero id="home"/>

  <text-section 
    id="how" 
    class="home__section">
    <p slot="title"> Ask me about COVID-19 </p>
    <div slot="text"> 
      <p>Hi, I’m your HealthBuddy. Just contact me via the chat window and I will give you information about the novel coronavirus disease (COVID-19). Ask anything about the virus, the disease and the pandemic and I will find the information for you, from the trusted sources of WHO and UNICEF. Before you start, here are the different options you have for talking to me:
        </p>
      <p><strong>1. Select your language:</strong> I’ll detect the language setting of your browser and, if available, will automatically speak in that language. You can also change the chat language from the language dropdown menu at the top of this web page.
      </p>
      <p><strong>2. Select from the list of common questions:</strong> To get a quick answer, you can select from the list of common questions that I display in the chat window.
      </p>
      <p><strong>3. Send me your questions in natural language:</strong> Type in your question(s) in the chat window. Remember to write as if you are talking to your friend so I can understand and answer better. 
      </p>
    </div>
  </text-section>

  <text-section
    id="about"
    class="home__section">
    <p slot="title"> What is HealthBuddy </p>
    <p slot="text"> 
      HealthBuddy is a joint initiative of the WHO Regional Office for Europe and UNICEF’s Europe and Central Asia Regional Office. It is available on multiple social media and instant messaging platforms for users around the world to provide them with scientific and evidence-based advice. There is a lot of misinformation and myths about the new coronavirus (COVID-19 virus) circulating on the Internet and in social media. Misinformation is one of the biggest challenges in fighting COVID-19. This is why it’s important to be careful where you look for information and advice.  
    </p>
    <FeatureList slot="content" class="home__section" :list="features" />
  </text-section>

  <div 
    id="info"
    class="home__section__wrapper">
    <text-section class="home__section">
    <p slot="title"> Informative Videos </p>
    <InfoVideoList
         slot="content" 
        :urls="videoUrls"/>
    <FeatureList :list="features" />
    <div slot="content" class="home__info-images">
      <img class="home__info-images__unicef" src="../assets/img/unicef-horizontal.png" />
      <img class="home__info-images__who" src="../assets/img/who-logo.png" />
    </div>
  </text-section>
  </div>
</div>
</template>

<script>
import Hero from '../components/Hero';
import TextSection from '../components/TextSection';
import FeatureList from '../components/FeatureList';
import Navbar from '../components/Navbar';
import InfoVideoList from '../components/InfoVideoList';
import * as WebChat from '../assets/js/bot.js';
import { mapGetters } from 'vuex';

export default {
    name: 'Home',
    components: {
        Navbar,
        Hero,
        TextSection,
        FeatureList,
        InfoVideoList,
    },
    data() {
      return {

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
        navbarItems: [
          {
            id: "home",
            title: "Home",
          },
          {
            id: "how",
            title: "How it works",
          },
          {
            id: "about",
            title: "About",
          },
          {
            id: "info",
            title: "Informative Videos",
          },
        ]
      };
    },
    computed: {
      ...mapGetters([
        'getLanguage',
      ]),
      initialPayload() { return `hello ${this.getLanguage}`; }
    },
    watch: {
      getLanguage() {
        WebChat.send(this.initialPayload);
      },
    },
    mounted() {
      WebChat.default.init({
        selector: '#webchat',
        initPayload: this.initialPayload,
        tooltipPayload: this.initialPayload,
        channelUuid: 'f2cc9ec6-07f1-407a-8948-ece57761d88e',
        host: 'https://rapidpro.ilhasoft.mobi',
        title: 'HealthBuddy',
        inputTextFieldHint: "Type a message...",
        profileAvatar: require('@/assets/img/doctor-darker.png'),
        openLauncherImage: require('@/assets/img/doctor-square.png'),
        docViewer: true,
        showFullScreenButton: true,
        hideWhenNotConnected: true,
        params: {
          images: {
            dims: {
              width: 712,
              height: 844,
            }
        },
        storage: "local",
       }
      });
    },
}
</script>

<style lang="scss" scoped>
  @import '../assets/css/webchat.css';

  $home-margin: 74px;
    .home {
      margin: $home-margin 0 0;

      &__info-images{
        margin-top: 15vh;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        &__unicef {
          max-width:100%;
          height: auto;
          width: 38vh;
          margin-right: 3vh;
        }

        &__who {
          max-width:100%;
          height: auto;
          width: 28vh;
          margin-right: 3vh;
        }
      }

      &__section {

        @media only screen and (max-width: 1150px) {
          max-width: 720px;
        }

        max-width: 1140px;
        padding: 60px 0;
        margin: 0 auto;

        &__wrapper {
          width: 100%;
          background-color: #f2f5fa;
        }

        &__title {
          font-size: 32px;
          font-weight: 400;
          margin-bottom: 20px;
          padding-bottom: 0;
          color: #1CABE2;
          font-family: "Poppins", sans-serif;
          line-height: 1.2;
        }
      }
    }

</style>