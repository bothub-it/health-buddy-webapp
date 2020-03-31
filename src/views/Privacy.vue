<template>
    <div class="privacy">
        <Chat />
        <text-section>
            <p slot="title"> Policy </p>
            <p slot="text"> Content </p>
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
    }
}
</script>

<style lang="scss" scoped>
    .privacy {
        margin: 74px 0 0;

        @media only screen and (max-width: 1150px) {
          max-width: 720px;
        }

        max-width: 1140px;
        padding: 60px 0;
        margin: 0 auto;
    }
</style>