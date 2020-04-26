<template>
<div>
    <topbar class="topbar"></topbar>
    <div class="container">
        <div class="row">
            <tabnav class="tabnav"></tabnav>
            <carso></carso>
        </div>
    </div>
</div>
</template>
<script>
    import Topbar from '../components/Topbar.vue';
    import Carsouel from '../components/Carsouel.vue';
    import Tabnav from '../components/Tabnav.vue';
    export default {
        components:{Topbar, Tabnav, Carsouel},
    }
</script>
<style scoped>
.topbar{
    z-index: 99;
}
.tabnav{
    position: absolute;
    top:100px;
    z-index: 10;
}
.container{
    margin:  20px;
}
</style>