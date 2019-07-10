import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Object.keys({a:1,b:2}).forEach(key=>console.info(key))
Object.values({a:1}).forEach(v=>console.info(v))


new Vue({
  render: h => h("H1",[process.env.NODE_ENV]),
}).$mount('#app')
