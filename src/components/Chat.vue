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
        this.sendInitial();
      }
    },
  },
  methods: {
    sendInitial() {
      WebChat.send(this.initialPayload);
    },
    openChat() {
      if (!isMobile()) {
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

body.mobile #webchat .widget-container.chat-open {
  top: 0px;
  bottom: 0;
  .messages-container {
    position: fixed;
    top: 55px;
    bottom: 50px;
    height: initial;
  }
  .sender {
    position: fixed;
    bottom: 0;
    height: 45px;
    overflow: hidden;
  }

  .messages-container, .sender {
    right: 0;
    left: 0;
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
  border: 4px solid #1CABE2;
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
  background-color: #1CABE2;
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

.messages-container {
  min-height: 75vh;
}

@media only screen and (max-height: 500px) {
  .messages-container {
    min-height: 20vh;
  }
}

/*.conversation-container {*/
/*  max-height: 90vh;*/
/*}*/

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
