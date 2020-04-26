<template>
    <div class="col-3 navcontainer">
        <h3 class="navtitle">板块导航</h3>
        <li class="navlist">
            <ul>计算机技术</ul>
            <ul>文学</ul>
            <ul>艺术</ul>
            <ul>思想文化</ul>
        </li>
    </div>
</template>
<script>
    export default {
        name:"tabnav"
    }
</script>
<style scoped>
@font-face{
    font-family: myfont1;
    src: url(/asset/ZiTiQuanXinYiGuanHeiTi2.0-2.ttf);
}
.navcontainer{
    height: 500px;
    background-image: linear-gradient(to bottom, rgb(188, 197, 229), rgb(165, 176, 228));
    box-shadow: 2px 2px 12px #afb9e485;
    border-top: 1px solid rgb(203, 209, 243);
    border-left: 1px solid rgb(203, 209, 243);
    border-radius: 15px;
}
.navtitle{
    font-family: myfont1;
    color: rgb(48, 48, 95);
    text-align: center;
}
.navlist{
    font-family: myfont1;
    list-style: none;
    margin: 20px;
    color: rgb(48, 48, 95);
}
</style>