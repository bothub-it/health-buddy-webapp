<template>
  <div class="info-video-list">
    <carousel :items="1"
              :nav="true"
              :mouseDrag="false"
              :touchDrag="false"
              class="carousel">
      <InfoVideoItem v-for="(video, index) in videos"
                     :key="index"
                     :video="video"/>
    </carousel>
  </div>
</template>

<script>
import InfoVideoItem from './InfoVideoItem.vue';
import carousel from 'vue-owl-carousel';

export default {
    name: 'InfoVideoList',
    components: {
        InfoVideoItem,
        carousel,
    },
    props: {
        videos: {
            type: Array,
        },
    },
};
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  .previous-btn, .next-btn {
    position: absolute;
    top: 50%;
  }
  .next-btn {
    right: 0;
  }
}
</style>
