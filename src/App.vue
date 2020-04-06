<!---html末班，只能有一个根节点-->
<template>
  <div>
      <ul >
        <li>
         <router-link to="/index">首页</router-link>
        </li>
        <li>
          <router-link to="/menu">菜单</router-link>
        </li>
      </ul>
      <router-view class="view-class"></router-view>
  </div>
</template>
<!---配置组件对象-->
<script>

export default {
  name:'App',
  components:{
  },
  data(){   //组件里数据块必须写函数
    return{
   
    }
  },
  methods:{

  },
  mounted(){
   
 
  }

  
}
</script>

<style >
ul li{
  float: left;
  margin-left:30px;
}
.view-class{
  clear:both;
  padding:30px;
}
.router-link-active{
  color: red;
  background-color: yellow;
}
</style>