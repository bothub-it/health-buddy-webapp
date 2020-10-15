<template>
  <div class="webchat-container">
    <div
      id="webchat"
      @click="updateOpenStatus()"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { isMobile } from '@/util/browser';

const WebChat = require('@/assets/js/bot.js');

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
    initialPayload() {
      return `hello ${this.getLanguage || 'en'}`;
    },
    language() {
      return this.getLanguage || 'en';
    },
  },
  data() {
    return {
      initalized: false,
      botConfig: undefined,
    };
  },
  watch: {
    getLanguage() {
      if (!this.initalized) {
        this.initalized = true;
        this.setupChat();
        this.updateOpenStatus();
      } else {
        this.botConfig.suggestionsConfig.language = (this.language || '').split('-')[0];
        WebChat.clear();
        this.sendInitial();
      }
    },
    $route (to){
      if (to.fullPath.indexOf('about') === -1 && to.hash.indexOf('webchat') !== -1 && !WebChat.isOpen()) {
        WebChat.open();
      }
    },
  },
  methods: {
    sendInitial() {
      WebChat.send(this.initialPayload);
    },
    openChat() {
      if (this.$router.currentRoute.fullPath.indexOf('about') === -1 && (!isMobile() || this.$router.currentRoute.hash.indexOf('webchat') !== -1)) {
        setTimeout(() => {
          WebChat.open();
          WebChat.clear();
        }, 150);
      }
    },
    updateOpenStatus() {
      if (!WebChat.isOpen() && isMobile()) {
        setTimeout(() => {
          document.querySelectorAll('.sender .new-message')[0].blur();
        }, 0);
      }

      setTimeout(() => {
        if (WebChat.isOpen() === this.isOpen) return;
        this.$emit('update:isOpen', WebChat.isOpen());
      }, 100);
    },
    setupChat() {
      this.botConfig = {
        selector: '#webchat',
        initPayload: this.initialPayload,
        channelUuid: '0e004b79-bd8b-4145-9279-3ee8cece2f87',
        host: 'https://rapidpro.ilhasoft.mobi',
        title: 'HealthBuddy',
        inputTextFieldHint: "Type a question...",
        profileAvatar: require('@/assets/img/doctor-darker.png'),
        openLauncherImage: require('@/assets/img/doctor-square.png'),
        disableTooltips: true,
        docViewer: true,
        showFullScreenButton: true,
        autoOpen: true,
        hideWhenNotConnected: false,
        onWidgetEvent: {
          onChatOpen: () => {
            this.$router.push('index#webchat');
          },
          onChatClose: () => {
            this.$router.push('index');
          },
        },
        params: {
          images: {
            dims: {
              width: 712,
              height: 844
            }
          },
          storage: "local"
        },
        suggestionsConfig: {
          // url: 'https://api.bothub.it/v2/repository/examples/search_repositories_examples/',
          datasets: [
            "4771b0b2-4859-49a7-a170-163ec9b34d22"
          ],
          language: (this.language || '').split('-')[0],
          excludeIntents: ['bias']
        },
      };
      WebChat.default.init(this.botConfig);
      this.sendInitial();
      this.openChat();

    }
  }
}
</script>

<style lang="scss">

.webchat-container {
  box-sizing: initial;
}

@media (min-width: 801px) and (min-height: 361px) {
  #webchat .push-widget-container:not(.full-screen) {
    z-index: 28; // nav tem 29
  }
}

#webchat * {
  font-size: 1em;
}
.push-launcher {
  -webkit-box-shadow: 1px 1px 5px 1px var(--launcherColor);
  -moz-box-shadow: 1px 1px 5px 1px var(--launcherColor);
  box-shadow: 1px 1px 5px 1px var(--launcherColor);
}

:not(.push-hide-sm).push-launcher:after {
    content: '';
    width: var(--launcherWidth);
    height: var(--launcherHeight);
    border: 4px solid #007BFF;
    border-radius: 50%;
    position: absolute;
    animation: pulsate infinite 1.4s;
}

@-webkit-keyframes pulsate {
  0% {
    -webkit-transform: scale(1.1, 1.1);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1.2, 1.2);
    opacity: 0;
  }
}

@media (min-height: 500px) {
  .push-widget-container.push-chat-open {
    min-height: 72vh;
  }
}

@media (min-height: 610px) {
  .push-widget-container.push-chat-open {
    min-height: 80vh;
  }
}

@media (min-height: 735px) {
  .push-widget-container.push-chat-open {
    min-height: 85vh;
  }
}

#webchat .push-hide-sm {
  display: none;
}

#webchat .push-quickReplies-container {
  max-width: 100%;
}

#webchat .push-replies .push-reply {
  justify-content: center;
  width: 100%;
}

#webchat .push-response {
  width: calc(100% - 30px);
  div#push-wave {
    margin-left: initial;
  }
}

.push-new-message {
  font-weight: bolder;
}

.push-send-icon {
  filter: brightness(50%);
}

#webchat .push-widget-container:not(.push-chat-open):after {
  content: '';
  display: block;
  position: absolute;
  top: -1vh;
  left: -2vh;
  height: 4vh;
  width: 4vh;
  background-image: url(../assets/img/tooltip-chat.svg);
  background-repeat: no-repeat;
}

</style>
