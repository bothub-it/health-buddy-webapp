<template>
<div class="info-video-list columns is-multiline">
    <InfoVideoItem
    v-for="(url, index) in urls"
    class="column is-half"
    :key="index"
    :url="url"/>
</div>
</template>

<script>
import InfoVideoItem from './InfoVideoItem.vue'
export default {
    name: 'InfoVideoList',
    components: { 
        InfoVideoItem
    },
    props: {
        urls: {
            type: Array,
        },
    },
    
}
</script>

<style lang="scss" scoped>

</style>