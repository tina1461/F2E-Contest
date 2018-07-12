<template lang="pug">
    .breadcrumb(v-if="detailStatus")
        el-breadcrumb(separator="/") 
            el-breadcrumb-item(:to="{ path: '/filter' }") Home
            el-breadcrumb-item
                a
</template>

<script>
export default {
    name: 'detailHead',
    props: ['detailStatus','resultData'],
    data(){
        return{

        }
    }
}
</script>


