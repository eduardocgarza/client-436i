import { IRoute } from "../constants/IClientRoute"
import { 
  LoginRoute, 
  SignupRoute, 
  VerifyCodeRoute, 
  ResetPasswordRoute, 
  ForgotPasswordRoute 
} from "../constants/ClientRoutes"
import ResetPassword from "../../components/Authentication/ResetPassword/ResetPassword"
import VerifyToken from "../../components/Authentication/VerifyToken/VerifyToken"
import ForgotPassword from "../../components/Authentication/ForgotPassword/ForgotPassword"
import Login from "../../components/Authentication/Login/Login"
import Signup from "../../components/Authentication/Signup/Signup"

const UnauthSwitch: IRoute[] = [
  {
    path: LoginRoute,
    component: Login
  },
  {
    path: SignupRoute,
    component: Signup
  },
  {
    path: ResetPasswordRoute,
    component: ResetPassword
  },
  {
    path: VerifyCodeRoute,
    component: VerifyToken
  },
  {
    path: ForgotPasswordRoute,
    component: ForgotPassword
  }
]

export default UnauthSwitch