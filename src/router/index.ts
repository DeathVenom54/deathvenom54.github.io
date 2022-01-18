import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home | Deathvenom's Website",
      metaTags: [
        {
          name: "description",
          content: "The home page of Deathvenom's portfolio website.",
        },
        {
          name: "og:description",
          content: "The home page of Deathvenom's portfolio website.",
        },
      ],
    },
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
    meta: {
      title: "Projects | Deathvenom's Website",
      metaTags: [
        {
          name: "description",
          content: "Projects by Deathvenom",
        },
        {
          name: "og:description",
          content: "Projects by Deathvenom",
        },
      ],
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
