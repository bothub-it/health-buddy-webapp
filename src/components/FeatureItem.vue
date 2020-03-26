<template>
    <div class="feature-item column is-half">
        <i :class="['feature-item__icon', iconName]"></i>
            <h4 class="feature-item__title"> {{ title }}</h4>
            <p class="feature-item__text"> {{ text }} </p>
    </div>
</template>

<script>
export default {
    name: 'FeatureItem',
    props: {
        iconName: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
        text: {
            type: String,
            default: '',
        },
    },
}
</script>

<style lang="scss" scoped>
    .feature-item {
        // margin-top: 25px;
        // flex: 0 0 50%;
        // max-width: 50%;
        // position: relative;
        // width: 100%;
        // padding-right: 15px;
        // padding-left: 15px;

        &__icon {
            font-size: 48px;
            float: left;
            color: #1CABE2;
        }

        &__title {
            font-size: 20px;
            font-weight: 700;
            margin: 5px 0 10px 60px;
            color: #777779;
            font-family: "Raleway", sans-serif;
            line-height: 1.2;
        }

        &__text {
            font-size: 15px;
            color: #979aa1;
            margin-left: 60px;
            margin-top: 0;
            margin-bottom: 1rem;
        }
    }
</style>