import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from './components/Layout.vue'
// Pages
import ErrorPage from './pages/Error.vue'
import HelloWorld from './pages/HelloWorld.vue'
import Foo from './pages/Foo.vue'
import Bar from './pages/Bar.vue'

Vue.use(VueRouter)

// Set vue router
const router = new VueRouter({
    mode: 'history',
    fallback: false, // Setting this to false essentially makes every router-link navigation a full page refresh in IE9.
    routes: [
      { path: '/',
        component: Layout,
        children: [
          { path: '', component: HelloWorld },
          { path: 'foo', component: Foo },
          { path: 'bar/:id', component: Bar },
        ]
      },
      {
        path: '*',
        component: ErrorPage,
      }
    ]
})

export default router
