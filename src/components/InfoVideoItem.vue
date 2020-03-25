<template>
<div class="info-video-item">
            <div class="info-video-item__item">
                <iframe class="embed-responsive-item" :src="url" allowfullscreen></iframe>
              </div>
            </div>
</template>

<script>
export default {
    name: 'InfoVideoItem',
    props: {
        url: {
            type: String,
            required: true,
        },
    }
}
</script>

<style lang="scss" scoped>
  .info-video-item {
    box-sizing: content-box;
    padding: 30px 30px 30px 60px;
    margin: 30px 15px;
    min-height: 200px;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
    position: relative;
    background: #fff;
  }

  iframe {
    margin: 0 auto;
  }
  
</style>