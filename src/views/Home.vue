/* eslint-disable vue/valid-template-root */
<template>
<div class="home">
  <Navbar />
  <Hero class="home__section" />
  <Section 
          class="home__section"
          v-for="(section, index) in info" 
          :key="index" 
          :title="section.title" 
          :text="section.text"/>

  <FeatureList class="home__section" :list="features" />

  <div class="home__section__wrapper">
    <div class="home__section">
      <h1 class="home__section__title"> 
    Informative Videos
  </h1>
    <InfoVideoList 
        :urls="videoUrls"/>
        </div>
  </div>
</div>
</template>

<script>
import Hero from '../components/Hero';
import Section from '../components/Section';
import FeatureList from '../components/FeatureList';
import Navbar from '../components/Navbar';
import InfoVideoList from '../components/InfoVideoList'
export default {
    name: 'Home',
    components: {
        Navbar,
        Hero,
        Section,
        FeatureList,
        InfoVideoList,
    },
    data() {
      return {
        info: [{
          title: "How it works",
          text: "You can start the conversation by asking questions naturally in the chat window or select one of the questions from the list, the HealthBuddy will give you information about Covid-19 and respond to any other question related to it. You can also report Rumors and send any question which will be answered by our experts and published on this portal."
        },{
          title: "What is HealthBuddy",
          text: "HealthBuddy is a powerful artificial intelligence tool that can help you learn about the new Coronavirus (COVID-19) and how to protect yourself and others from it as per the latest evidence. There are a lot of myths and misinformation about the new Coronavirus disseminated on internet and social media. This is why it’s important to be careful where you look for information and advice! This virtual health advisor will provide you with useful information on COVID-19 and tips on how to protect yourself and others and how reduce the risk of infection."
        }],

        features: [
          {
            title: "Multi-channel support",
            text: "Integrate with social network, instant messengers, SMS, voice calls and more",
          },
                    {
            title: "Multi-language support",
            text: "HealthBuddy will automatically detect the language of your page and, if supported, will automatically speak in that language.",
          },
                    {
            title: "Easily integratable with other platforms",
            text: "See how people are rating the HealthBuddy across all channels it is available",
          },
                    {
            title: "Report fake news (coming soon)",
            text: "Report rumors or fake statements you’re seeing around your region to keep others informed and see a detailed explanation here",
          },
        ],
        videoUrls: [
          "https://www.youtube.com/embed/QYxzo3-qZRc",
          "https://www.youtube.com/embed/JKpVMivbTfg",
          "https://www.youtube.com/embed/ujWFj_6FaMY",
          "https://www.youtube.com/embed/mOV1aBVYKGA",
        ]
      };
    }
}
</script>

<style lang="scss" scoped>
    .home {
      margin: 72px + 16px 0;

      &__section {

          max-width: 1140px;
          padding: 60px 0;
          margin: 0 auto;

          @media only screen and (max-width: 1024x) {
            max-width: 720px;
          }

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