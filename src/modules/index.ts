import Home from "./home/Home";
import Event from "./event/Event";
import About from "./about/About";
import Project from "./project/Project";
import NotFoundPage from "./utilityPages/NotFoundPage";
import ComingSoonPage from "./utilityPages/CommingSoonPage";
import Contributes from "./contributes/Contributes";
import Dashboard from "./dashbaord/Dashbaord";
import EventFloorManagement from "./dashbaord/eventFlowManagement/EventFlowManagement";
import EventManagement from "./dashbaord/eventManagement/EventManagement";
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
import FirstYearProjects from "./project/StudentsWork/firstYearProjects/firstYearProjects";
import SecondYearProjects from "./project/StudentsWork/secondYearProjects/secondYearProjects";
import FourthYearProjects from "./project/StudentsWork/fourthYearProjects/fourthYearProjects";
import ResearchPublications from "./project/StudentsWork/researchPublications/researchPublications";

export default {
  HomeView: Home,
  EventView: Event,
  AboutView: About,
  ProjectView: Project,
  NotFoundView: NotFoundPage,
  ComingSoonView: ComingSoonPage,
  contributesView: Contributes,
  DashboardView: Dashboard,
  EventFloorManagementView: EventFloorManagement,
  EventManagementView: EventManagement,
  NewsManagementView: NewsManagement,
  ProjectManagementView: ProjectManagement,
  DashboardLinkITView: DashboardLintIT,
  AddStudentWorkView: AddStudentWork,
  OpenSourceManagementView: OpenSourceManagement,
  LoginView: Login,
  LinkITView: LinkIT,
  IntecsOpenSourceProjectsView: IntecsOpenSourceProjects,
  FirstYearWorkView: FirstYearProjects,
  SecondYearWorkView: SecondYearProjects,
  FinalYearWorkView: FourthYearProjects,
  ResearchWorkView: ResearchPublications,
  StudentsWorkView: StudentsWork,
  GalleryView: Gallery,
};
