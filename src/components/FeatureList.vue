<template>
    <div class="feature-list columns is-multiline">
        <FeatureItem 
        v-for="(feature, index) in list"
        :key="index"
        :iconName="feature.iconName"
        :title="feature.title"
        :text="feature.text" />
    </div>
</template>

<script>
import FeatureItem from "./FeatureItem"
export default {
    name: 'FeatureList',
    components: {
        FeatureItem,
    },
    props: {
        list: {
            type: Array,
        },
    },
}
</script>

<style lang="scss" scoped>
    .feature-list {
    }
</style>