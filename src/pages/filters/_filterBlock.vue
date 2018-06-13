<template lang="pug">
    .filter-wrapper
        el-collapse(accordion)
            el-collapse-item(:key="index" v-for="(item,index) in filterItems" :title="item.name")
</template>

<script>
export default {
    name: 'filterBlock',
    data(){
        return{
            filterItems:[
                {
                    name: 'Location',
                },
                {
                    name: 'Location',
                },
                {
                    name: 'Categories',
                }
            ]
        }
    },
}
</script>


