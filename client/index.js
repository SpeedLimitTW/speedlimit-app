import Vue          from 'vue'
import VueRouter    from 'vue-router'
import VueCookie    from 'vue-cookie'
import {sync}       from 'vuex-router-sync'
import App          from './App.vue'
import router       from './routers'
import store        from './stores'

sync(store, router)

Vue.use(VueCookie)
Vue.use(VueRouter)

const app = new Vue
({
    router,
    store,
    ...App
})

app.$mount('#app')