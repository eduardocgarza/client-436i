import { IRoute } from "../constants/IClientRoute"
import { 
  LoginRoute, 
  SignupRoute, 
  VerifyCodeRoute, 
  ResetPasswordRoute, 
  ForgotPasswordRoute 
} from "../constants/ClientRoutes"
import ResetPassword from "../../components/AuthModule/ResetPassword/ResetPassword"
import VerifyToken from "../../components/AuthModule/VerifyToken/VerifyToken"
import ForgotPassword from "../../components/AuthModule/ForgotPassword/ForgotPassword"
import Login from "../../components/AuthModule/Login/Login"
import Signup from "../../components/AuthModule/Signup/Signup"

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