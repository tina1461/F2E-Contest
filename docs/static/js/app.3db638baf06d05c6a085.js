webpackJsonp([1],{NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.0.13/css/all.css",integrity:"sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp",crossorigin:"anonymous"}}),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var n=s("VU/8")({name:"App"},i,!1,function(t){s("iE06")},null,null).exports,l=s("/ocq"),r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-wrapper"},[s("h1",{staticClass:"page-title"},[t._v(t._s(t.pageTitle))]),t._v(" "),s("div",{staticClass:"page-content"},[s("div",{staticClass:"contest-list"},t._l(t.listData,function(e,a){return s("div",{key:a,staticClass:"contest-list-item"},[s("div",{staticClass:"contest-time"},[t._v(t._s(e.time))]),t._v(" "),s("div",{staticClass:"contest-subject"},[s("router-link",{attrs:{to:e.url}},[t._v(t._s(e.subject))])],1)])}))])])},staticRenderFns:[]},o=s("VU/8")({name:"Home",data:function(){return{pageTitle:"F2E CONTEST",listData:[{time:"Week1",subject:"ToDoList",url:"todolist"},{time:"Week2",subject:"Filter",url:"filter"}]}}},r,!1,null,null,null).exports,c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tab"},[s("div",{staticClass:"tab-items"},t._l(t.toDoListTab.data,function(e,a){return s("div",{key:a,staticClass:"tab-item",class:{active:t.toDoListTab.currentStatus==e.status},on:{click:function(s){t.toDoListTab.currentStatus=e.status}}},[t._v("\n            "+t._s(e.name)+"\n        ")])}))])},staticRenderFns:[]},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0==t.toDoListTab.currentStatus?s("div",{staticClass:"block-add"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.toDo.status.add,expression:"!toDo.status.add"}],staticClass:"item-add",on:{click:function(e){t.toDo.status.add=!0}}},[s("i",{staticClass:"fas fa-plus"}),t._v(" "),s("span",[t._v("Add Task")])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.toDo.status.add,expression:"toDo.status.add"}],staticClass:"item-add-more add"},[t._m(0),t._v(" "),s("div",{staticClass:"card-content"}),t._v(" "),t._m(1)])]):t._e()},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("div",{staticClass:"block-input"},[e("div",{staticClass:"check-input"},[e("input",{staticClass:"form-check-input ",attrs:{type:"checkbox",name:"",id:"check_add",value:"false"}}),this._v(" "),e("label",{staticClass:"form-check-label",attrs:{for:"check_add"}})]),this._v(" "),e("input",{attrs:{type:"text",placeholder:"Type Somthing here..."}})]),this._v(" "),e("div",{staticClass:"block-control"},[e("div",{staticClass:"control-item get-favorite"},[e("i",{staticClass:"fas fa-star"})]),this._v(" "),e("div",{staticClass:"control-item get-edit"},[e("i",{staticClass:"fas fa-edit"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-btn-groups"},[e("div",{staticClass:"card-btn cancel"},[e("i",{staticClass:"fas fa-times"}),this._v("\n                Cancel\n            ")]),this._v(" "),e("div",{staticClass:"card-btn add"},[e("i",{staticClass:"fas fa-plus"}),this._v("\n                Add Task\n            ")])])}]},d={name:"todolist",components:{tab:s("VU/8")({name:"tab",props:["toDoListTab"]},c,!1,null,null,null).exports,add:s("VU/8")({name:"add",props:["toDoListTab","toDo"]},u,!1,null,null,null).exports},data:function(){return{toDoListTab:{currentStatus:0,data:[{status:0,name:"All Tasks"},{status:1,name:"In Progress"},{status:2,name:"Completed"}]},toDo:{status:{add:!1,edit:!1},data:[]}}}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-wrapper"},[e("tab",{attrs:{"to-do-list-tab":this.toDoListTab}}),this._v(" "),e("div",{staticClass:"page-content"},[e("add",{attrs:{"to-do-list-tab":this.toDoListTab,"to-do":this.toDo}})],1)],1)},staticRenderFns:[]};var v=s("VU/8")(d,m,!1,function(t){s("aJk2")},null,null).exports,f={name:"filterBlock",props:["filterItems"],data:function(){return{filterCollapse:[0,1,2],windowWidth:""}},mounted:function(){var t=this;this.$nextTick(function(){window.addEventListener("resize",function(){t.windowWidth=window.innerWidth}),document.addEventListener("DOMContentLoaded",function(){t.windowWidth=window.innerWidth})})},watch:{},methods:{CollapseChange:function(t){console.log(t)},getWidth:function(){return Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.documentElement.clientWidth)}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"filter-wrapper"},[s("el-collapse",{on:{change:t.CollapseChange},model:{value:t.filterCollapse,callback:function(e){t.filterCollapse=e},expression:"filterCollapse"}},t._l(t.filterItems,function(e,a){return s("el-collapse-item",{key:a,attrs:{title:e.name,name:a}},[0==a?s("select",{directives:[{name:"model",rawName:"v-model",value:t.filterItems[0].value,expression:"filterItems[0].value"}],staticClass:"location",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.filterItems[0],"value",e.target.multiple?s:s[0])}}},t._l(t.filterItems[a].data,function(t,e){return s("option",{key:e,attrs:{label:t,"value-key":e},domProps:{value:t}})})):t._e()])}))],1)},staticRenderFns:[]},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.detailStatus?t._e():s("div",{staticClass:"result-head"},[s("div",{staticClass:"result-info"},[t._v("Showing "),s("span",{staticClass:"result-num"},[t._v(t._s(t.resultData.total))]),t._v(" results by…")]),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"result-tags"},[e("div",{staticClass:"tag-item"},[this._v("Taipei"),e("i",{staticClass:"far fa-times-circle"})])])}]},_={render:function(){var t=this.$createElement,e=this._self._c||t;return this.detailStatus?e("div",{staticClass:"breadcrumb"},[e("el-breadcrumb",{attrs:{separator:"/"}},[e("el-breadcrumb-item",{attrs:{to:{path:"/filter"}}},[this._v("Home")]),e("el-breadcrumb-item",[e("a")])],1)],1):this._e()},staticRenderFns:[]},C={name:"result",props:["detailStatus","resultData"],data:function(){return{}},methods:{changeView:function(t){eventBus.$emit("update-detailStatus")}}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"result-body"},[s("div",{staticClass:"result-list"},t._l(t.resultData.data,function(e,a){return s("div",{key:a,staticClass:"result-item card",class:{"detail-page":t.detailStatus}},[s("div",{staticClass:"item-img card-img",style:{background:"url("+e.img+") #D7D7D7"}}),s("div",{staticClass:"item-right card-info"},[s("h2",{staticClass:"title"},[t._v(t._s(e.title))]),s("div",{staticClass:"info"},[s("p",{staticClass:"desc"},[t._v(t._s(e.desc))]),s("div",{staticClass:"more-info"},[s("div",{staticClass:"organizer"},[t._v(t._s(e.organizer))]),t._l(e.tags,function(e,a){return s("div",{key:a,staticClass:"tags"},[s("div",{staticClass:"tag"},[t._v(t._s(e))])])})],2),s("div",{staticClass:"more-info"},[s("div",{staticClass:"location"},[t._v(t._s(e.location))]),s("div",{staticClass:"date"},[t._v(t._s(e.date))])])]),t.detailStatus?t._e():s("span",{style:{float:"right"},on:{click:function(e){t.changeView()}}},[t._v("More Detail..")])])])}))])},staticRenderFns:[]},b={name:"filters",components:{filterBlock:s("VU/8")(f,p,!1,null,null,null).exports,resultHead:s("VU/8")({name:"resultHead",props:["detailStatus","resultData"],data:function(){return{}}},h,!1,null,null,null).exports,detailHead:s("VU/8")({name:"detailHead",props:["detailStatus","resultData"],data:function(){return{}}},_,!1,null,null,null).exports,result:s("VU/8")(C,g,!1,null,null,null).exports},data:function(){return{filterItems:[{name:"Location",data:["Taipei","Koashong"],value:""},{name:"Date"},{name:"Categories"}],searchData:"",detailStatus:!1,resultData:{total:"1",data:[{title:"Kogi Cosby sweater.",desc:"Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id. Donec eget massa a diam condimentum pretium. Aliquam erat volutpat. Integer ut tincidunt orci. Etiam tristique, elit ut consectetur iaculis, metus lectus mattis justo, vel mollis eros neque quis augue. Sed lobortis ultrices lacus, a placerat metus rutrum sit amet. Aenean ut suscipit justo.",img:"",organizer:"Ethan Foster",tags:["Entertainment"],location:"Kaohsiung City",date:"2018/5/24 - 2018/5/31"}]}}},created:function(){this.changeStatus()},methods:{changeStatus:function(){var t=this;eventBus.$on("update-detailStatus",function(){t.detailStatus=!t.detailStatus})}}},D={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-wrapper"},[s("section",{staticClass:"header-wrapper"},[t._m(0),s("div",{staticClass:"searchBar"},[s("el-input",{staticClass:"search-input",attrs:{type:"text",placeholder:"Explore your own activities","prefix-icon":"el-icon-search"},model:{value:t.searchData,callback:function(e){t.searchData=e},expression:"searchData"}})],1)]),s("div",{staticClass:"body"},[s("div",{staticClass:"left"},[s("filter-block",{attrs:{"filter-items":t.filterItems}})],1),s("div",{staticClass:"right"},[s("div",{staticClass:"content-wrapper"},[s("result-head",{attrs:{"detail-status":t.detailStatus,"result-data":t.resultData}}),t._v(" "),s("detail-head",{attrs:{"detail-status":t.detailStatus,"result-data":t.resultData}}),t._v(" "),s("result",{attrs:{"detail-status":t.detailStatus,"result-data":t.resultData}})],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:"https://hexschool.github.io/THE_F2E_Design/week2-filter/assets/logo.svg"}})])}]};var w=s("VU/8")(b,D,!1,function(t){s("yBMS")},null,null).exports;a.default.use(l.a);var k=new l.a({routes:[{path:"/",name:"Home",component:o},{path:"/todolist",name:"toDoList",component:v},{path:"/filter",name:"filters",component:w}]}),y=s("zL8q"),E=s.n(y);s("tvR6");a.default.config.productionTip=!1,a.default.use(E.a),window.eventBus=new a.default,new a.default({el:"#app",router:k,render:function(t){return t(n)}})},aJk2:function(t,e){},iE06:function(t,e){},tvR6:function(t,e){},yBMS:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3db638baf06d05c6a085.js.map