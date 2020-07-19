<template>
  <div>
    <text-section class="map p-1">
      <p slot="title">
        {{ $t('map.title') }}
      </p>
      <div slot="text">
        <inline-svg :src="worldMap" />
      </div>
    </text-section>
  </div>
</template>

<script>
import TextSection from '../components/TextSection';
import worldMap from '../assets/img/bms/world-map.svg';

export default {
  name: 'Map',
  components: {
      TextSection,
  },
  data() {
      return {
        worldMap,
      };
  },
}
</script>

<style lang="scss">
.map {
  margin-top: 60px;
  background-color: white;
  border-radius: 5px;

  path {
    fill: #c4c4c4;
  }
}
</style>
