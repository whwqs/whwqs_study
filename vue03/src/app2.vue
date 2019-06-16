<template>
    <div id="app" style="border:1px solid red;width:100px;height:100px;" class="app" myid="myapp">
        <input v-model="v1"  />
        <h1>{{v1}}</h1>
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
    },
    data(){
        return {
            v1:'我是开始'
        }
    }
    ,methods:{
        f1:function(){
            console.info("app2 method this",this)
        }
    }
}

//console.info("app2 this:",this) undefined
</script>

