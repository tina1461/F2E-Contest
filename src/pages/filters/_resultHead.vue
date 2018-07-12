<template lang="pug">
    .result-head(v-if="!detailStatus")
        .result-info Showing #[span.result-num {{resultData.total}}] results by…
        .result-tags
            .tag-item Taipei
                i.far.fa-times-circle
</template>

<script>
export default {
    name: 'resultHead',
    props: ['detailStatus','resultData'],
    data(){
        return{
            
        }
    }
}

</script>


