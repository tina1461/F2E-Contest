<template>
    <div class="page-wrapper">
      <h1 class="page-title">{{pageTitle}}</h1>
      <div class="page-content">
          <div class="contest-list">
            <div class="contest-list-item-wrapper" :key="index" v-for="(item, index) in listData">
              <div class="contest-list-item">
                  <div class="contest-time">{{item.time}}</div>
                  <div class="contest-subject"> <router-link :to="item.url" >{{item.subject}}</router-link> </div>
              </div>
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
          time: "Week 1",
          subject: "ToDoList",
          url:'todolist'
        },
        {
          time: "Week 2",
          subject: "Filter",
          url:'filter'
        },
        {
          time: "Week 3",
          subject: "Admin",
          url: 'admin'
        },
        {
          time: "Week 4",
          subject: "ProductGallery",
          url: "productGallery"
        },
        {
          time: "Week 5",
          subject: "ComicViewer",
          url: "comicViewer"
        },
        {
          time: "Week 6",
          subject: "Validation",
          url: "validation"
        },
      ]
    };
  }
};
</script>
