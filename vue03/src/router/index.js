import Vue from 'vue'
import Router from 'vue-router'
import v1 from '../views/v1.vue'

Vue.use(Router)

var c1 = Vue.component("c1",{
    render:h=>
         h("div",[h("a",{
             attrs:{
                 href:'#/v2/567/karl'
             }
         },"dddd")])
    
})

export default new Router({
    routes:[
        {
            path:'/'
            ,name:'v1'
            ,component:v1
            ,hidden:true
        }
        ,{
            path:'/v2/:id/:name'
            ,name:'v2'
            ,component:()=>import('@/views/v2.vue')
        },{
            path:'/c1'
            ,name:'c1'
            ,component:c1
        }
    ]
})