<template lang="pug">
    .result-body
        .result-list
            .result-item.card(:class="{'detail-page':detailStatus}" :key="index" v-for="(item,index) in resultData.data")
                .item-img.card-img(:style="{'background':'url('+item.img+') #D7D7D7'}")
                .item-right.card-info
                    h2.title {{item.title}}
                    .info
                        p.desc {{item.desc}}
                        .more-info
                            .organizer {{item.organizer}}
                            .tags(:key="index" v-for="(tag,index) in item.tags")
                                .tag {{tag}}
                        .more-info
                            .location {{item.location}}
                            .date {{item.date}}
                    span(v-if="!detailStatus" @click="changeView()" :style="{'float':'right'}") More Detail..
</template>

<script>
export default {
    name:'result',
    props:['detailStatus','resultData'],
    data(){
        return {
            
        }
    },
    methods:{
        changeView(id){
            // this.detailStatus = true;
            // console.log(this.detailStatus);
            eventBus.$emit("update-detailStatus") ;
        }
    }
}
</script>

