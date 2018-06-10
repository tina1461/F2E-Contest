<template>
    <div class="page-wrapper">
    <h1 class="page-title">{{pageTitle}}</h1>
        <div class="page-content">
            <div class="contest-list"  :key="index" v-for="(item, index) in listData">
                <div>{{item.time}}</div>
                <div> <router-link to="todolist">{{item.subject}}</router-link> </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      pageTitle: "F2E CONTEST",
      listData: [
        {
          time: "Week1",
          subject: "ToDoList"
        }
      ]
    };
  }
};
</script>
