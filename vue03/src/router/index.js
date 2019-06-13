import Vue from 'vue'
import Router from 'vue-router'
import v1 from '../views/v1.vue'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/'
            ,name:'v1'
            ,component:v1
        }
        ,{
            path:'/v2'
            ,name:'v2'
            ,component:()=>import('@/views/v2.vue')
        }
    ]
})