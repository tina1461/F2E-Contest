<template>
    <div class="tab">
        <div class="tab-items">
            <div class="tab-item" 
            :class="{active: toDoListTab.currentStatus == item.status}" 
            :key="index" 
            v-for="(item,index) in toDoListTab.data"
            @click="toDoListTab.currentStatus = item.status"
            >
                {{item.name}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "tab",
  props: ['toDoListTab'],
};
</script>

