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
import ArrowDown from "../icons/arrow-down";

export const AsideData = [
  {
    icon: <Square />,
    text: "Dashboard",
    link: "/dashboard",
  },
  {
    icon: <PortfolioIcon />,
    text: "Portfolio",
    link: "/portfolio",
  },
  {
    icon: <IndustriesIcon />,
    text: "Industries",
    link: "/industries",
  },
  {
    icon: <CustomersIcon />,
    text: "Customers",
    link: "/customers",
  },
  {
    icon: <MessagesIcon />,
    text: "Messages",
    link: "/messages",
  },
  {
    icon: <Calls />,
    text: "Calls",
    link: "/calls",
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

export const details = [
  { value: 50, color: "black" },
  { value: 17, color: "#FF9E2C" },
  { value: 13, color: "#C3FF44" },
  { value: 20, color: "#FF805D" },
];

export const detailslist = [
  { color: "black", text: "Civil Service" },
  { color: "#FF805D", text: "Service" },
  { color: "#FF9E2C", text: "Trading" },
  { color: "#C3FF44", text: "IT" },
];

export const news = [
  { text: "NASDAQ Daily", paragraph: "Giving you live reports from the..." },
  { text: "NASDAQ Daily", paragraph: "Giving you live reports from the..." },
  { text: "NASDAQ Daily", paragraph: "Giving you live reports from the..." },
];

export const portList = [
  { text: "Date", icon: <ArrowDown /> },
  { text: "Amount", icon: <ArrowDown /> },
  { text: "Status", icon: <ArrowDown /> },
];
