import Logo from "../../public/logo.png";

export const IMAGES = {
  Logo,
};

export const ROUTES = {
  // PUBLIC ROUTES
  HOME: "/",
  ABOUT: "/#about",
  CONTACT: "/#contact",
  FEATURE:"/#feature",

  // AUTHENTICATION
  REGISTER: "/register",
  LOGIN: "/login",
  VERIFY_EMAIL: "/verify-email",
  FORGOT_PASSWORD: "/forgot-password",
  RESET: "/reset-password",

  // Protected routes
};


export const NavUrl =[
  {
    path:ROUTES.HOME,
    label:"Home"
  },
    {
    path:ROUTES.ABOUT,
    label:"About"
  },
     {
    path:ROUTES.FEATURE,
    label:"Features"
  },
   
]