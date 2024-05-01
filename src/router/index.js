import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/coin",
    name: "Coin",
    component: () => import("../views/CoinView.vue"),
  },
  {
    path: "/random",
    name: "RandomNumber",
    component: () => import("../views/RandomNumberView.vue"),
  },
  {
    path: "/magicball",
    name: "MagicBall",
    component: () => import("../views/MagicBallView.vue"),
  },
  {
    path: "/matches",
    name: "Matches",
    component: () => import("../views/MatchesView.vue"),
  },
  {
    path: "/crossroads",
    name: "Crossroads",
    component: () => import("../views/CrossroadsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
