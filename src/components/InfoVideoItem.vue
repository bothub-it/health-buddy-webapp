<template>
<div class="info-video-item">
  <div class="info-video-item__wrapper">
    <div class="info-video-item__content">
        <iframe class="info-video-item__item" :src="url" allowfullscreen></iframe>
      </div>
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

    margin-left: 22.5%;
    max-width: 55%;

    &__wrapper {
      box-sizing: content-box;
      padding: 30px 30px 30px 60px;
      margin: 30px 15px;
      min-height: 200px;
      box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
      position: relative;
      background: #fff;
    }

    &__content {
      position: relative;
      display: block;
      width: 100%;
      padding: 0;
      overflow: hidden;
    }

    &__content::before {
      padding-top: 56.25%;
      display: block;
      content: "";
      box-sizing: border-box;
    }

    &__item {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
  }
  
</style>