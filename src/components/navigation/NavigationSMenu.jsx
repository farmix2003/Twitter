import {
  AccountCircle,
  Explore,
  Group,
  Home,
  List,
  Message,
  More,
  Notifications,
  Verified,
} from "@mui/icons-material";

export const NavigationsMenu = [
  {
    title: "Home",
    icon: <Home />,
    path: "/home",
  },
  {
    title: "Explore",
    icon: <Explore />,
    path: "/explore",
  },
  {
    title: "Notifications",
    icon: <Notifications />,
    path: "/notification",
  },
  {
    title: "Messages",
    icon: <Message />,
    path: "/message",
  },
  {
    title: "Lists",
    icon: <List />,
    path: "/list",
  },
  {
    title: "Communities",
    icon: <Group />,
    path: "/community",
  },
  {
    title: "Verified",
    icon: <Verified />,
    path: "/verified",
  },
  {
    title: "Profile",
    icon: <AccountCircle />,
    path: "/profile",
  },
  {
    title: "More",
    icon: <More />,
    path: "/more",
  },
];
