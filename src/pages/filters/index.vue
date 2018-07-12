<template lang="pug">
    .page-wrapper
        section.header-wrapper
            .logo
                img(src="https://hexschool.github.io/THE_F2E_Design/week2-filter/assets/logo.svg")
            .searchBar
                el-input.search-input(type="text", 
                                placeholder="Explore your own activities",
                                prefix-icon="el-icon-search" v-model="searchData") 
        .body
            .left
                <filter-block :filter-items="filterItems">
                </filter-block>
            .right
                .content-wrapper
                    <result-head :detail-status="detailStatus" :result-data="resultData"></result-head>
                    <detail-head :detail-status="detailStatus" :result-data="resultData"></detail-head>
                    <result :detail-status="detailStatus" :result-data="resultData"></result>
                
                       
</template>


<script>

import filterBlock from '@/pages/filters/_filterBlock';
import resultHead from '@/pages/filters/_resultHead';
import detailHead from '@/pages/filters/_detailHead';
import result from '@/pages/filters/_result';

export default {
    name: 'filters',
    components:{
        filterBlock,
        resultHead,
        detailHead,
        result,
    },
    data(){
        return{
            filterItems:[
                {
                    name: 'Location',
                    data:['Taipei','Koashong'],
                    value:''
                },
                {
                    name: 'Date',
                },
                {
                    name: 'Categories',
                }
            ],
            searchData:'',
            detailStatus:false,
            resultData:{
                total: '1',
                data:[
                    {
                        title: 'Kogi Cosby sweater.',
                        desc: 'Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id. Donec eget massa a diam condimentum pretium. Aliquam erat volutpat. Integer ut tincidunt orci. Etiam tristique, elit ut consectetur iaculis, metus lectus mattis justo, vel mollis eros neque quis augue. Sed lobortis ultrices lacus, a placerat metus rutrum sit amet. Aenean ut suscipit justo.',
                        img: '',
                        organizer: 'Ethan Foster',
                        tags:[
                            'Entertainment'
                        ],
                        location: 'Kaohsiung City',
                        date: '2018/5/24 - 2018/5/31'
                    }
                ]
            }
        }
    },
    created(){
        this.changeStatus();
    },
    mounted(){
         this.getPlaceData();
    },
    methods:{
        changeStatus(){
            eventBus.$on('update-detailStatus',()=>{
                this.detailStatus = ! this.detailStatus;
            });
        },
        getPlaceData(){
            this.$axios.get('https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97')
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                console.log(err);
            });
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/pages/filters/filters.scss";
</style>



