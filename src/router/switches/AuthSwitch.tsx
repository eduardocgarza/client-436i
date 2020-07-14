import { IRoute } from "../constants/IClientRoute"
import { 
  ProfileRoute, 
  SettingsRoute,
  MyMatchesRoute,
  ExploreRoute,
  MyCoursesRoute
} from "../constants/ClientRoutes"
import Profile from "../../components/AccountModule/Profile/Profile"
import Settings from "../../components/AccountModule/Settings/Settings"
import MyMatches from "../../components/MyMatches/MyMatches"
import Explore from "../../components/Explore/Explore"
import MyCourses from "../../components/CoursesModule/MyCourses/MyCourses/MyCourses"

const AuthSwitch: IRoute[] = [
  /**
   * @Account Routes
   */
  {
    path: ProfileRoute,
    component: Profile
  },
  {
    path: SettingsRoute,
    component: Settings
  },
  {
    path: MyMatchesRoute,
    component: MyMatches
  },
  {
    path: ExploreRoute,
    component: Explore
  },
  {
    path: MyCoursesRoute,
    component: MyCourses
  }
]

export default AuthSwitch