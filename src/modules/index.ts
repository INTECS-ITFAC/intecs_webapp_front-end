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
import Login from "./auth/login/Login";
import LinkIT from "./project/LinkIT/LinkIT";
import IntecsOpenSourceProjects from "./project/IntecsOpenSource/IntecsOpenSourceProjects";
import StudentsWork from "./project/StudentsWork/StudentsWork";
import Gallery from "./gallery/Gallery";
import AddStudentWork from "./dashbaord/addstudentWork/addStudentWork";
import OpenSourceManagement from "./dashbaord/openSourceManagement/openSourceManagement";
import DashboardLintIT from "./dashbaord/dashboardLinkIT/dashboardLintIT";

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
  DashboardLinkITView: DashboardLintIT,
  AddStudentWorkView: AddStudentWork,
  OpenSourceManagementView: OpenSourceManagement,
  LoginView: Login,
  LinkITView: LinkIT,
  IntecsOpenSourceProjectsView: IntecsOpenSourceProjects,
  StudentsWorkView: StudentsWork,
  GalleryView: Gallery,
};
