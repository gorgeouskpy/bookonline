<template>
<div class="col-3">
    <div class="book">
        <h5>{{book.name}}</h5>
    </div>
</div>
</template>

<script>
export default {
    name: "book",
    props: ["book"],
}
</script>

<style scoped>
@font-face{
    font-family:myfont1;
    src:url(/asset/ZiTiQuanXinYiGuanHeiTi2.0-2.ttf);
}
.book{
    font-family: myfont1;
    align-self: center;
    width: 200px;
    height: 300px;
    background-color: bisque;
    padding: 10px;
    border-radius: 10px;
    border-left: 1px solid antiquewhite;
    border-top:  1px solid antiquewhite;
    box-shadow: 3px 6px 20px #00000054;
    margin: auto;
    margin-bottom: 50px;
}
</style>