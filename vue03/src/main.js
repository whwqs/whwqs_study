import Vue from 'vue'
import app from './app.vue'

console.info("vue",app)

console.info("render",app.render)

new Vue({
    el:"#app",
    render:h=>{ 
        var vn = h(app)
        console.info("VNode",vn)
        return vn
    }
});