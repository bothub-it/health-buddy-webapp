<template>
  <div class="info-video-list">
    <carousel
      :items="1"
      :nav="false"
    >
      <InfoVideoItem
        v-for="(url, index) in urls"
        :key="index"
        :url="url"
      />
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
        urls: {
            type: Array,
        },
    },
};
</script>

<style lang="scss" scoped>

</style>