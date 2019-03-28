import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/BlogHome.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'blog-home',
      component: Home
    },
    {
      path: '/blog/',
      name: 'blog-home',
      component: Home
    },
    {
      path: '/blog/:slug',
      name: 'blog-post',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/BlogPost.vue')
    },
    {
      path: '/rss',
      name: 'rss',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/RssAtomSitemap.vue')
    }
  ]
})
