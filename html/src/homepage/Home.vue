<template>
<div>
    <topbar class="topbar"></topbar>
    <div class="container-fluid subcontainer">
        <div class="row">
            <tabnav class="tabnav"></tabnav>
            <carsouel class="carsouel"></carsouel>
        </div>
        <div class="row bookrow">
            <book v-for="book in bookinfo" v-bind:book="book"></book>
        </div>
        <bottom class="bottomarea"></bottom>
    </div>
</div>
</template>
<script>
    import Topbar from '../components/Topbar.vue';
    import Carsouel from '../components/Carsouel.vue';
    import Tabnav from '../components/Tabnav.vue';
    import Book from '../components/Book.vue';
    import Bottom from '../components/Bottom.vue';
    export default {
        components:{Topbar, Tabnav, Carsouel, Book, Bottom},
        data:()=>({
            bookinfo:[
                {key:1,name:"The First Book"},
                {key:2,name:"第二版书"},
                {key:3,name:"第二版书"},
                {key:4,name:"第二版书"},
                {key:5,name:"第二版书"},
                {key:6,name:"第二版书"},
                {key:7,name:"第二版书"},
                {key:8,name:"第二版书"},
                {key:9,name:"第二版书"},
                {key:10,name:"第二版书"},
                {key:11,name:"第二版书"},
                {key:12,name:"第二版书"},
            ]
        })
    }
</script>
<style scoped>
.topbar{
    z-index: 99;
}
.tabnav{
    position: absolute;
    top:100px;
    left: 30px;
    z-index: 10;
}
.container{
    margin:  20px;
}
.carsouel{
    position:absolute;
    margin-right: 40px;
    right:0;
    top:100px
}
.bookrow{
    width: 100%;
}
.bottomrow{
    width: 100%;
    position: absolute;
}
.bottomarea{
    float:left;
}
</style>