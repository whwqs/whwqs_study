<template>
<div id="app">
    <a href="#/">v1</a>
    <a href="#/v2">v2</a>
    <router-view />
    <button v-on:click="f1">测试this</button>
</div>
</template>
<script>

export default {
    methods:{
        f1(){
            console.info("this",this)
            this.$router.push({path:'/v2'})
        }
    }
}
</script>


