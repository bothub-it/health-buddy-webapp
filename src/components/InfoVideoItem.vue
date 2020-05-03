<template>
  <div class="info-video-item">
    <div class="info-video-item__wrapper">
      <div class="info-video-item__content">
        <iframe
          class="info-video-item__item"
          :title="video.title"
          :src="video.url"
          allowfullscreen
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'InfoVideoItem',
    props: {
        video: {
            type: Object,
            required: true,
        },
    }
}
</script>

<style lang="scss" scoped>
  .info-video-item {

    margin: auto;
    max-width: 70%;

    &__wrapper {
      display: flex;
      align-items: center;
      box-sizing: content-box;
      padding: 30px 30px 30px 30px;
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

    @media (max-width: 900px) {
      max-width: 100%;
    }
    @media (max-width: 500px) {
      &__wrapper {
        padding: 10px;
      }
    }
  }

</style>
