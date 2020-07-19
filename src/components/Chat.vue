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
  },
  data() {
    return {
      initalized: false
    };
  },
  watch: {
    getLanguage() {
      if (!this.initalized) {
        this.initalized = true;
        this.setupChat();
        this.updateOpenStatus();
      } else {
        WebChat.dropMessages();
        this.sendInitial()
      }
    },
    $route (to){
      if (to.hash.indexOf('webchat') !== -1 && !WebChat.isOpen()) {
        WebChat.open()
      }
    },
  },
  methods: {
    sendInitial() {
      WebChat.send(this.initialPayload);
    },
    openChat() {
      if (!isMobile() || this.$router.currentRoute.hash.indexOf('webchat') !== -1) {
        setTimeout(() => WebChat.open(), 150);
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
      WebChat.default.init({
        selector: '#webchat',
        initPayload: this.initialPayload,
        channelUuid: 'f2cc9ec6-07f1-407a-8948-ece57761d88e',
        host: 'https://rapidpro.ilhasoft.mobi',
        title: 'Baby Feeding Codifier',
        inputTextFieldHint: "Type a question...",
        profileAvatar: require('@/assets/img/bms/bms-chat-logo.svg'),
        openLauncherImage: require('@/assets/img/bms/bms-chat-logo.svg'),
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
          storage: "session"
        },
      });
      this.sendInitial();
      this.openChat();

    }
  }
}
</script>

<style lang="scss">
$header-height: 55px;
$sender-height: 45px;

body.mobile #webchat .widget-container.chat-open {
  .messages-container {
    height: calc(100% - #{$header-height} - #{$sender-height});
    min-height: inherit;
  }
}

@media (min-width: 801px) and (min-height: 361px) {
  #webchat .widget-container:not(.full-screen) {
    z-index: 28; // nav tem 29
  }

}

#webchat .conversation-container .title.with-avatar {
  color: white;
}

.launcher {
  -webkit-box-shadow: 1px 1px 5px 1px rgba(28, 171, 226, 1);
  -moz-box-shadow: 1px 1px 5px 1px rgba(28, 171, 226, 1);
  box-shadow: 1px 1px 5px 1px rgba(28, 171, 226, 1);
  height: 8vh;
  width: 8vh;
}

.launcher:after {
  content: '';
  width: 8vh;
  height: 8vh;
  border: 4px solid #2089fb;
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

#webchat .conversation-container .close-button {
  display: flex;
  justify-content: center;
  align-items: center;

  display: inline-block;
  background-color: #2089fb;
  border: 0;
  width: 40px;
  cursor: pointer;
}

.close-button:focus, .close-button:active, .close-button:hover {
  outline: none;
}

.close-button::-moz-focus-inner {
  border: 0;
}

.conversation-container .close {
  display: inline-block;
  width: 20px;
  height: 20px;
}

@media (min-height: 500px) {
  .messages-container {
    min-height: 62vh;
  }
}

@media (min-height: 610px) {
  .messages-container {
    min-height: 70vh;
  }
}

@media (min-height: 735px) {
  .messages-container {
    min-height: 75vh;
  }
}

#webchat .hide-sm {
  display: none;
}

.quickReplies-container {
  max-width: 100%;
}

.replies {
  align-items: stretch;
  padding: 0 0 0 0;
  overflow: auto;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.new-message {
  font-weight: bolder;
}

.send-icon {
  filter: brightness(50%);
}

#webchat .replies {
  justify-content: center;
}

#webchat .conversation-container .reply {
  width: 55%;
  min-width: 280px;
  justify-content: center;
}

.avatar {
  min-width: 17px;
}


#webchat .widget-container:not(.chat-open):after {
  content: '';
  display: block;
  position: absolute;
  top: -1vh;
  left: -2vh;
  height: 5vh;
  width: 5vh;
  background-image: url(../assets/img/tooltip-chat.svg);
  background-repeat: no-repeat;
}

</style>
