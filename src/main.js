/**
 * 入口js,创建vue实例
 */
import Vue from 'vue'
import App from './App'
import router from './router'   //index不用写，默认就可以找到
new Vue({
  el:"#app",
  components:{
    App
  },
  template:'<App/>',
  router:router          //配置对象，专门配置路由
})
