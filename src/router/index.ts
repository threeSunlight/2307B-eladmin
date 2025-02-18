import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: "/login",
      name: "login",
      component: () => import('../views/common/Login.vue')
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import('../views/common/Dashboard.vue')
    },
    // {
    //   path: "/map",
    //   name: "map",
    //   component: () => import('../views/common/Map.vue')
    // },
    {
      path: "/mapXia",
      name: "mapXia",
      component: () => import('../views/common/Mapxiazuan.vue')
    }
  ]
})

export default router
