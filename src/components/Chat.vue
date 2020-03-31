<template>
    <div id="webchat"/>
</template>

<script>
import * as WebChat from '../assets/js/bot.js';
import { mapGetters } from 'vuex';
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
    computed: {
      ...mapGetters([
        'getLanguage',
      ]),
      initialPayload() { return `hello ${this.getLanguage}`; },
    },
    watch: {
      getLanguage() {
        WebChat.send(this.initialPayload);
      },
    },
    mounted() {
      this.setupChat();
      this.$nextTick(()=> { this.setEvents(); });
    },
    methods: {
      setEvents() {
        this.$el.querySelector('.launcher').addEventListener('click', function() {
          this.$emit('update:isOpen', WebChat.isOpen());
        });
       this.$el.querySelector('.close-button').addEventListener('click', function() {
          this.$emit('update:isOpen', WebChat.isOpen());
        });
      },
      setupChat() {
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
      }
    }
}
</script>