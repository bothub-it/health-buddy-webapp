<template>
  <div
    class="violation"
  >
    <text-section>
      <p slot="title">
        {{ $t('violation.title') }}
      </p>
      <div slot="text">
        <div v-for="index in 5" :key="index">
          <strong>
            {{ $t(`violation.section_${index}_title`) }}
          </strong>
          <p v-html="$t(`violation.section_${index}_text`)">
          </p>
          <br>
        </div>
      </div>
    </text-section>
  </div>
</template>

<script>
import TextSection from '../components/TextSection';

export default {
    name: 'Violation',
    components: {
        TextSection,
    },
}
</script>

<style lang="scss">
.violation {
  ul {
    padding-left: 1.2em;
    list-style: inherit;
  }
}
</style>
