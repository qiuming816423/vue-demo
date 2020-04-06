//路由配置文件
import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/Index.vue'
import Menu from '../pages/Menu.vue'
import Submenu from '../pages/SubMenu.vue'
import Submenu1 from '../pages/SubMenu1.vue'
//作为插件
Vue.use(VueRouter)

//导出，给main.js使用
export default new VueRouter({
    //数组
    routes:[
        {path:'/index',component:Index},
        {path:'/menu',component:Menu,children:[
            {path:'/menu/submenu',component:Submenu},
            {path:'submenu1',component:Submenu1}    //相对写法，相当于/menu/submenu1
        ]},
        {path:'/',redirect:'/index'}
    ]
})


