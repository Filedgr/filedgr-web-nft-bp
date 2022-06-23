import { createRouter as createVueRouter, createWebHashHistory, Router } from 'vue-router'
import Home from '../views/Home.vue'
import { createAuthGuard } from '@auth0/auth0-vue'
import { App } from 'vue'

export function createRouter (app: App): Router {
  return createVueRouter({
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home,
        beforeEnter: createAuthGuard(app)
      }
    ],
    history: createWebHashHistory()
  })
}
