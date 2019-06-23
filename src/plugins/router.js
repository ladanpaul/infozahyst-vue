import Vue from 'vue'
import VueRouter from 'vue-router'

import { InfozahystMain } from '../lib'

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'main',
    redirect: InfozahystMain
  },
  {
    path: '/',
    name: 'InfozahystMain',
    component: InfozahystMain,
  },
]

export const router = new VueRouter({
  routes,
  mode: 'history',
})