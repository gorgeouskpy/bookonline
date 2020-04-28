<template>
<div id="demo" class="carousel slide col-8" data-ride="carousel">
 
  <!-- 指示符 -->
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
 
  <!-- 轮播图片 -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img v-bind:src="imgsrc1">
    </div>
    <div class="carousel-item">
      <img v-bind:src="imgsrc2">
    </div>
    <div class="carousel-item">
      <img v-bind:src="imgsrc3">
    </div>
  </div>
 
  <!-- 左右切换按钮 -->
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
 
<div style="clear:both"></div>
</div>
</template>

<script>
export default {
    name: 'carsouel',
    data: function(){
        return({
            imgsrc1:"/asset/DuckDuckGO.jpg",
            imgsrc2:"/asset/RubySunSet.jpg",
            imgsrc3:"/asset/Trees.jpg",
        })
    }
}
</script>

<style scoped>
img{
    width:100%;
    height: 500px;
    border-radius: 10px;
}
</style>