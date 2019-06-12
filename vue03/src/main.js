import Vue from 'vue'
import app from './app.vue'
import v1 from './views/v1.vue'
import Router from 'vue-router'

Vue.use(Router)

var router = new Router({
    routes:[
        {
            path:'/'
            ,name:'v1'
            ,component:v1
        }
        ,{
            path:'/v2'
            ,name:'v2'
            ,component:()=>import('./views/v2.vue')
        }
    ]
})

console.info("vue",app)

console.info("render",app.render)

new Vue({
    el:"#app",
    router,
    render:h=>{ 
        var vn = h(app)
        console.info("VNode",vn)
        return vn
    }
});