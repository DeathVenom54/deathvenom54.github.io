import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/HomePage.vue"),
    meta: {
      title: "Deathvenom's Portfolio",
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
    component: () => import("@/views/ProjectsPage.vue"),
    meta: {
      title: "Projects / Deathvenom's Portfolio",
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
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/views/ContactPage.vue"),
    meta: {
      title: "Contact / Deathvenom's Portfolio",
      metaTags: [
        {
          name: "description",
          content: "How you can contact Deathvenom",
        },
        {
          name: "og:description",
          content: "How you can contact Deathvenom",
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
