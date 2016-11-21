import Router   from 'vue-router'
import Counter  from 'views/Counter'

export default new Router
({
    mode  : 'history',
    routes:
    [
        {
            path     : '/',
            component: Counter
        }
    ]
})