<template>
  <div 
    :class="['privacy', isOpen ? 'privacy__open' : '']"
  >
    <Chat
      :is-open.sync="isOpen"
    />
    <text-section>
      <p slot="title">
        {{ $t('policy.title') }}
      </p>
      <div slot="text">
        <div v-for="index in 7" :key="index">
          <strong>
            {{ $t(`policy.section_${index}_title`) }}
          </strong>
          <p>
            {{ $t(`policy.section_${index}_text`) }}
          </p>
          <br>
        </div>
        <br>
        <p>
            {{ $t(`policy.updated`) }}
          </p>
      </div>
    </text-section>
  </div>
</template>

<script>
import TextSection from '@/components/TextSection';
import Chat from '@/components/Chat';
export default {
    name: 'Privacy',
    components: {
        TextSection,
        Chat,
    },
    data() {
        return {
            isOpen: false,
        }
    }
}
</script>

<style lang="scss" scoped>
    .privacy {
        margin: 74px 0 0;

        @media only screen and (max-width: 1150px) {
          max-width: 720px;
        }
        
        &__open {
          max-width: 60%;
          margin: 1.5rem;
        }

        max-width: 1140px;
        padding: 60px 0;
        margin: 0 auto;
    }
</style>