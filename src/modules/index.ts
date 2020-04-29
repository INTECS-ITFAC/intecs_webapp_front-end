import Home from "./home/Home";
import Event from "./event/Event";
import About from "./about/About";
import Project from "./project/Project";
import NotFoundPage from "./utilityPages/NotFoundPage";
import CommingSoonPage from "./utilityPages/CommingSoonPage";
import Contributes from "./contributes/Contributes";
import Dashboard from "./dashbaord/Dashbaord";
import EvenetFloorManagement from "./dashbaord/eventFlowManagement/EventFlowManagement";
import EvenetManagement from "./dashbaord/eventManagement/EventManagement";
import NewsManagement from "./dashbaord/newsManagement/NewsManagement";
import ProjectManagement from "./dashbaord/projectManagement/ProjectManagement";

export default {
  HomeView: Home,
  EventView: Event,
  AboutView: About,
  ProjectView: Project,
  NotFoundView: NotFoundPage,
  CommingSoonView: CommingSoonPage,
  contributesView: Contributes,
  DashboardView: Dashboard,
  EventFloorManagementView: EvenetFloorManagement,
  EventManagementView: EvenetManagement,
  NewsManagementView: NewsManagement,
  ProjectManagementView: ProjectManagement,
};
