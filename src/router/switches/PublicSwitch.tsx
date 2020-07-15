import { IRoute } from "../constants/IClientRoute"
import {
  AboutRoute,
  ContactRoute,
  FAQsRoute,
  PrivacyRoute,
  TermsRoute
} from "../constants/ClientRoutes"
import About from "../../components/PublicModule/About/About"
import Contact from "../../components/PublicModule/Contact/Contact"
import FAQs from "../../components/PublicModule/FAQs/FAQs"
import PrivacyPolicy from "../../components/PublicModule/PrivacyPolicy/PrivacyPolicy"
import Terms from "../../components/PublicModule/Terms/Terms"

const PublicSwitch: IRoute[] = [
  {
    path: AboutRoute,
    component: About 
  },
  {
    path: ContactRoute,
    component: Contact
  },
  {
    path: FAQsRoute,
    component: FAQs
  },
  {
    path: PrivacyRoute,
    component: PrivacyPolicy
  },
  {
    path: TermsRoute,
    component: Terms
  }
]

export default PublicSwitch