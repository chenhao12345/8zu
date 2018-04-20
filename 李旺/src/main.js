import Vue from "vue"
import app  from "./components/app.vue"
import ajax from "./tool/ajax.js"
Vue.prototype.$ajax=ajax

var vm=new Vue({
  el:"#app",
  template:"<div><App /></div>",
  components:{
    App:app
  }
})