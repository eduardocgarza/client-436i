import { IRoute } from "../constants/IClientRoute"
import {
  AboutRoute,
  ContactRoute,
  FAQsRoute,
  PrivacyRoute,
  TermsRoute
} from "../constants/ClientRoutes"
import About from "../../components/Public/About/About"
import Contact from "../../components/Public/Contact/Contact"
import FAQs from "../../components/Public/FAQs/FAQs"
import PrivacyPolicy from "../../components/Public/PrivacyPolicy/PrivacyPolicy"
import Terms from "../../components/Public/Terms/Terms"

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