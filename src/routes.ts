// layouts
import DefaultLayout from "./layouts/DefaultLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import LoginLayout from "./layouts/LoginLayout";

// views
import Views from "./modules";

const routes = [
  {
    path: "/dashboard/newsManagement",
    layout: DashboardLayout,
    exact: true,
    component: Views.NewsManagementView,
  },
  {
    path: "/dashboard/eventManagement",
    layout: DashboardLayout,
    exact: true,
    component: Views.EventManagementView,
  },
  {
    path: "/dashboard/eventFlowManagement",
    layout: DashboardLayout,
    exact: true,
    component: Views.EventFloorManagementView,
  },
  {
    path: "/dashboard/projectManagement",
    layout: DashboardLayout,
    exact: true,
    component: Views.ProjectManagementView,
  },
  {
    path: "/dashboard/linkIT",
    layout: DashboardLayout,
    exact: true,
    component: Views.DashboardLinkITView,
  },
  {
    path: "/dashboard/addStudentWork",
    layout: DashboardLayout,
    exact: true,
    component: Views.AddStudentWorkView,
  },
  {
    path: "/dashboard/openSourceManagement",
    layout: DashboardLayout,
    exact: true,
    component: Views.OpenSourceManagementView,
  },

  {
    path: "/dashboard",
    layout: DashboardLayout,
    exact: true,
    component: Views.DashboardView,
  },
  {
    path: "/login",
    layout: LoginLayout,
    exact: true,
    component: Views.LoginView,
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
