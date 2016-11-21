import Vue          from 'vue'
import Vuex         from 'vuex'
import VueResource  from 'vue-resource'
import VueRouter    from 'vue-router'
import VueCookie    from 'vue-cookie'
import {sync}       from 'vuex-router-sync'
import App          from './App.vue'
import router       from './routers'
import store        from './stores'

sync(store, router)

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueCookie)
Vue.use(VueRouter)

const app = new Vue
({
    router,
    store,
    ...App
})

app.$mount('#app')