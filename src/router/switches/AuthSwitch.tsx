import { IRoute } from "../constants/IClientRoute"
import { 
  ProfileRoute, 
  SettingsRoute,
  MyMatchesRoute,
  ExploreRoute,
  MyClassesRoute
} from "../constants/ClientRoutes"
import Profile from "../../components/Account/Profile/Profile"
import Settings from "../../components/Account/Settings/Settings"
import MyMatches from "../../components/Matches/MyMatches/MyMatches"
import Explore from "../../components/Explore/Explore"
import MyClasses from "../../components/Classes/MyClasses/MyClasses"

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
    path: MyClassesRoute,
    component: MyClasses
  }
]

export default AuthSwitch