import React from "react";
import Square from "../icons/square";
import PortfolioIcon from "../icons/portfolio-icon";
import IndustriesIcon from "../icons/industries.icon";
import CustomersIcon from "../icons/customers-icon";
import MessagesIcon from "../icons/messages-icon";
import Calls from "../icons/calls";
import Settings from "../icons/settings";
import Logout from "../icons/logout";
import { Moon } from "../icons/moon";

export const AsideData = [
  {
    icon: <Square/>,
    text: "Dashboard",
    link: '/dashboard'
  },
  {
    icon: <PortfolioIcon/>,
    text: "Portfolio",
    link: '/portfolio'
  },
  {
    icon: <IndustriesIcon/>,
    text: "Industries",
    link:'/industries'
  },
  {
    icon: <CustomersIcon />,
    text: "Customers",
    link: '/customers'
  },
  {
    icon: <MessagesIcon/>,
    text: "Messages",
    link: '/messages'
  },
  {
    icon:<Calls />,
    text: "Calls",
    link:'/calls'
  },
];

export const LogoutList = [
  {
    icon: <Settings />,
    text: "Settings",
    link: "settings",
  },
  {
    icon: <Logout />,
    text: "LogOut",
    link: "logout",
  },
];

