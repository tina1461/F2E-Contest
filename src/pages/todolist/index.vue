<template>
    <div class="page-wrapper">
        <tab
        :to-do-list-tab="toDoListTab"
        
        ></tab>
        <div class="page-content">
            <add
            :to-do-list-tab="toDoListTab"
            :to-do="toDo"
            >
            </add>
        </div>
    </div>
</template>

<script>
import tab from "@/pages/todolist/_tab";
import add from "@/pages/todolist/_add";
export default {
  name: "todolist",
  components: {
    tab,
    add
  },
  data() {
    return {
      toDoListTab: {
        currentStatus: 0,
        data: [
          {
            status: 0,
            name: "All Tasks"
          },
          {
            status: 1,
            name: "In Progress"
          },
          {
            status: 2,
            name: "Completed"
          }
        ]
      },
      toDo:{
          status: {
              add: false,
              edit: false,
          },//add、edi,
          data:[]
      }
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/pages/todolist/todolist.scss";
</style>



