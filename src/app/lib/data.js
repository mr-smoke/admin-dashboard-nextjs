import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";

export const menuItems = [
  {
    title: "Pages",
    list: [
      { title: "Dashboard", url: "/", icon: <MdDashboard /> },
      { title: "Users", url: "/users", icon: <MdSupervisedUserCircle /> },
      { title: "Products", url: "/products", icon: <MdShoppingBag /> },
      { title: "Transactions", url: "/transactions", icon: <MdAttachMoney /> },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        url: "/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        url: "/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        url: "/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      { title: "Settings", url: "/settings", icon: <MdOutlineSettings /> },
      { title: "Help", url: "/help", icon: <MdHelpCenter /> },
      { title: "Logout", url: "/logut", icon: <MdLogout /> },
    ],
  },
];
