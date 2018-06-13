<template>
    <div class="page-wrapper">
      <h1 class="page-title">{{pageTitle}}</h1>
      <div class="page-content">
          <div class="contest-list">
            <div class="contest-list-item"  :key="index" v-for="(item, index) in listData">
                <div class="contest-time">{{item.time}}</div>
                <div class="contest-subject"> <router-link :to="item.url" >{{item.subject}}</router-link> </div>
            </div>
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
          subject: "ToDoList",
          url:'todolist'
        },
        {
          time: "Week2",
          subject: "Filter",
          url:'filter'
        }
      ]
    };
  }
};
</script>
