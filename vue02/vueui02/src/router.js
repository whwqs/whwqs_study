import Vue from 'vue'
import Router from 'vue-router'
import c1 from './views/c1.vue'

Vue.use(Router)

export default new Router({
    routes:[
        {
            name:'route1',
            path:'/route1',
            component:c1
        }
    ]
})
