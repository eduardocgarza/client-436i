type RouteArg = number | string

/**
 * @Public Routes
 */
export const AboutRoute = "/about"
export const FAQsRoute = "/faqs"
export const ContactRoute = "/contact"
export const PrivacyRoute = "/privacy"
export const TermsRoute = "/terms"

/**
 * @Unauthenticated Routes
 */
export const HomeRoute = "/"
export const LoginRoute = "/login"
export const SignupRoute = "/signup"
export const ForgotPasswordRoute = "/forgot"
export const VerifyCodeRoute = "/verify"
export const ResetPasswordRoute = "/reset"

/**
 * @Authenticated Routes
 *  All the routes below are authenticated routes
 */
export const DashboardRoute = "/"

/**
 * @Account Routes
 */
export const ProfileRoute = "/profile"
export const ManageIntegrationsRoute = "/settings"
export const ExploreRoute = "/explore"
export const MyMatchesRoute = "/matches"
export const MyClassesRoute = "/classes"

/**
 * @Error Routes
 */
export const NotFoundRoute = "/not-found"
export const CatchAllRoute = "/*"