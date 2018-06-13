<template lang="pug">
    .page-wrapper
        <top-header></top-header>
        .body
            .left
                <filter-block></filter-block>
            .right
                
</template>


<script>
import topHeader from '@/pages/filters/_topHeader';
import filterBlock from '@/pages/filters/_filterBlock';
export default {
    name: 'filters',
    components:{
        topHeader,
        filterBlock,
    },
    data(){
        return{

        }
    }
}
</script>

<style lang="scss">
@import "@/assets/pages/filters/filters.scss";
</style>



