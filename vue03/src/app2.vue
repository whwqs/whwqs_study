<template>
    <div id="app" style="border:1px solid red;width:100px;height:100px;" class="app" myid="myapp">
        <input v-model="p1" />
    </div>
</template>
<script>
export default {
    name:"App",
    props:{
        p1:{
            type:String,
            default:"hhh"
        }
    }
}
</script>

