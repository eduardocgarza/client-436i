import { IRoute } from "../constants/IClientRoute"
import {
  ProfileRoute,
  SettingsRoute,
  MyMatchesRoute,
  MyCoursesRoute,
} from "../constants/ClientRoutes"
import Profile from "../../components/AccountModule/Profile/Profile"
import Settings from "../../components/AccountModule/Settings/Settings"
import MyMatches from "../../components/MyMatches/MyMatches"
import MyCourses from "../../components/CoursesModule/MyCourses/MyCourses/MyCourses"
import MatchProfile from "../../components/AccountModule/Profile/MatchProfile"

const AuthSwitch: IRoute[] = [
  /**
   * @Account Routes
   */
  {
    path: ProfileRoute,
    component: Profile,
  },
  {
    path: SettingsRoute,
    component: Settings,
  },
  {
    path: MyMatchesRoute,
    component: MyMatches,
  },
  {
    path: MyCoursesRoute,
    component: MyCourses,
  },
  {
    path: "/profile/:accountId",
    component: MatchProfile,
  },
]

export default AuthSwitch
