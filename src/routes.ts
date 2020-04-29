// layouts
import DefaultLayout from "./layouts/DefaultLayout";
import DashboardLayout from "./layouts/DashboardLayout";

// views
import Views from "./modules";

const routes = [
  {
    path: "/dashboard",
    layout: DashboardLayout,
    exact: true,
    component: Views.DashboardView,
  },
  {
    path: "/contributes",
    layout: DefaultLayout,
    exact: true,
    component: Views.contributesView,
  },
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
