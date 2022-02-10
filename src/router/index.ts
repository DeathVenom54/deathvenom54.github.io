import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import Contact from "../views/Contact.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
    component: Projects,
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
    component: Contact,
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
