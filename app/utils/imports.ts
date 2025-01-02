import Logo from "../../public/logo.png";
import Logo_white from "../../public/logo-white.png";
import ImageHolder from "../../public/images/image-holder.png";
import Auth_BG from "../../public/images/bg-login.svg";
import Auth_Placeholder from "../../public/images/auth-placeholder.png";
import Loader from "../../public/loader.gif";
import DB from "../../public/images/relational.png";

export const IMAGES = {
  Logo,
  Logo_white,
  ImageHolder,
  Auth_BG,
  Auth_Placeholder,
  Loader,
  DB,
};

export const ROUTES = {
  // PUBLIC ROUTES
  HOME: "/",
  ABOUT: "/#about",
  CONTACT: "/#contact",
  FEATURE: "/#feature",

  // AUTHENTICATION
  REGISTER: "/register",
  LOGIN: "/login",
  VERIFY_EMAIL: "/verify-email",
  RESET_PASSWORD: "/reset-password",

  // Protected routes
  DASHBOARD: "/dashboard",
  PROFILE: "/profile",
  HISTORY: "/history",
  LEADERBOARD: "/leaderboard",
  Qode: "/qode",
};

export const NavUrl = [
  {
    path: ROUTES.HOME,
    label: "Home",
  },
  {
    path: ROUTES.ABOUT,
    label: "About",
  },
  {
    path: ROUTES.FEATURE,
    label: "Features",
  },
];

export const FooterUrl = [
  {
    title: "Quick Links",
    links: [
      {
        path: ROUTES.HOME,
        label: "Home",
      },
      {
        path: ROUTES.ABOUT,
        label: "About",
      },
      {
        path: ROUTES.FEATURE,
        label: "Features",
      },
      {
        path: ROUTES.LOGIN,
        label: "Login",
      },
      {
        path: ROUTES.REGISTER,
        label: "Register",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        path: "/privacy-policy",
        label: "Privacy Policy",
      },
      {
        path: "/terms-of-service",
        label: "Terms of Service",
      },
    ],
  },
];
