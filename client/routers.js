import Router         from 'vue-router'
import Counter        from 'views/Counter'
import Dashboard      from 'views/Dashboard'
import Landing        from 'views/Landing'
import Login          from 'views/Login'
import Registration   from 'views/Registration'
import MemberList     from 'views/MemberList'
import MemberCreate   from 'views/MemberCreate'
import MemberEdit     from 'views/MemberEdit'
import PasswordChange from 'views/PasswordChange'
import Preference     from 'views/Preference'
import Traces         from 'views/Traces'
import Looking        from 'views/Looking'
import Request        from 'views/Request'

export default new Router
({
    mode  : 'history',
    routes:
    [
        {
            path     : '/dashboard',
            component: Dashboard
        },
        {
            path     : '/',
            component: Landing
        },
        {
            path     : '/login',
            component: Login
        },
        {
            path     : '/register',
            component: Registration
        },
        {
            path     : '/members',
            component: MemberList
        },
        {
            path     : '/member/create',
            component: MemberCreate
        },
        {
            path     : '/member/edit',
            component: MemberEdit
        },
        {
            path     : '/password',
            component: PasswordChange
        },
        {
            path     : '/preference',
            component: Preference
        },
        {
            path     : '/traces',
            component: Traces
        },
        {
            path     : '/looking',
            component: Looking
        },
        {
            path     : '/request',
            component: Request
        }
    ]
})