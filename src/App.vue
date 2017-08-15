<template>
  <div id="app">
    <router-view></router-view>
    <footer class="foot">
      <nav>
        <ul>
          <li><router-link :to="{path:'/index',activeClass:'router-link-active'}"><i class="fa fa-home fa-2x"></i><h5>首页</h5></router-link></li>       
          <li><router-link :to="{path:'/nearby'}"><i class="fa fa-compass fa-2x"></i><h5>附近</h5></router-link></li>
          <li><router-link :to="{path:'/kefu'}"><i class="fa fa-whatsapp fa-2x"></i><h5>客服</h5></router-link></li>
          <li><router-link :to="{path:'/sos'}"><i class="fa fa-heartbeat fa-2x"></i><h5>SOS</h5></router-link></li>
          <li><router-link :to="{path:'/user'}"><i class="fa fa-user fa-2x"></i><h5>我的</h5></router-link></li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
*{  list-style: none;text-decoration: none;margin:0;font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;color: black;padding: 0;}
.foot{position: fixed;bottom: 0;border: 1px solid #ddd;width:100%;}
.foot nav ul li{float: left;width:18%;height: 50px;margin:0 1%;}
.bottom-nav-active{color: red;}
h5{line-height: 100%;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
