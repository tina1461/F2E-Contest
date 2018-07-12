<template lang="pug">
    .filter-wrapper
        el-collapse(v-model="filterCollapse" @change="CollapseChange")
            el-collapse-item(:key="index" v-for="(item,index) in filterItems" :title="item.name" :name="index")
                select.location(v-if="index == 0" v-model="filterItems[0].value")
                    option(:key="index" v-for="(location, index) in filterItems[index].data" :label="location" :value="location" :value-key="index")
</template>

<script>
export default {
    name: 'filterBlock',
    props:['filterItems'],
    data(){
        return{
            filterCollapse:[0,1,2],
            windowWidth: '',
        }
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', () => {
                this.windowWidth = window.innerWidth
            });
            document.addEventListener('DOMContentLoaded',() =>{
                this.windowWidth = window.innerWidth;
            })
        })
    },
    watch:{
        
    },
    methods:{
        CollapseChange(val){
            console.log(val);
        },
        getWidth() {
            return Math.max(
                document.body.scrollWidth,
                document.documentElement.scrollWidth,
                document.body.offsetWidth,
                document.documentElement.offsetWidth,
                document.documentElement.clientWidth
            );
        }
    }
}
</script>


