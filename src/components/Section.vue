<template>
    <div class="section">
          <h2 id="title_about">{{ title }}</h2>
          <p id="info_about">{{ text }}</p>
 </div>
</template>

<script>
export default {
    name: 'Section',
    props: {
        title: {
            type: String,
            default: '',
        },
        text: {
            type: String,
            default: '',
        }
    }
}
</script>

<style lang="scss" scoped>
    .section {
        padding: 60px 0;
        overflow: hidden;
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 20px;
        padding-bottom: 0;
        color: #1CABE2;
        font-family: "Poppins", sans-serif;

        h2 {
            font-size: 32px;
            margin-top: 0;
            font-family: "Poppins", sans-serif;
        }

        &__text {
            margin-bottom: 0;
            color: #777779;
        }
    }
</style>