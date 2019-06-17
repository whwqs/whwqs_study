import Vue from 'vue'
import app from './app.vue'
import app2 from '@/app2.vue'
import router from '@/router'

console.info("vue",app)

console.info("render",app.render)

var root = new Vue({
    el:"#app",
    router,
    render:h=>{ 
        var vn = h(app)
        console.info("VNode",vn)
        return vn
    }
});


console.info("root",root)