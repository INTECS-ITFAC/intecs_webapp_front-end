import React from "react";

// layouts
import DefaultLayout from "./layouts/DefaultLayout";
// views
import Views from "./modules";

const routes = [
  {
    path: "/events",
    layout: DefaultLayout,
    exact: true,
    component: Views.EventView,
  },
  {
    path: "/about",
    layout: DefaultLayout,
    exact: true,
    component: Views.AboutView,
  },
  {
    path: "/projects",
    layout: DefaultLayout,
    exact: true,
    component: Views.ProjectView,
  },
  {
    path: "/",
    layout: DefaultLayout,
    exact: true,
    component: Views.HomeView,
  },
  {
    layout: DefaultLayout,
    component: Views.NotFoundView,
  },
];

export default routes;
