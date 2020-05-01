// layouts
import DefaultLayout from "./layouts/DefaultLayout";
// views
import Views from "./modules";

const routes = [
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
    path: "/linkIT",
    layout: DefaultLayout,
    exact: true,
    component: Views.LinkITView,
  },
  {
    path: "/INTECSOpenSourceProjects",
    layout: DefaultLayout,
    exact: true,
    component: Views.IntecsOpenSourceProjectsView,
  },
  {
    path: "/studentsWork",
    layout: DefaultLayout,
    exact: true,
    component: Views.StudentsWorkView,
  },
  {
    path: "/gallery",
    layout: DefaultLayout,
    exact: true,
    component: Views.GalleryView,
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
