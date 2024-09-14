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

export const transactions = [
  {
    user: { name: "TestUser", img: "/noavatar.png" },
    status: "pending",
    date: "02.12.2024",
    amount: "3200",
  },
  {
    user: { name: "TestUser", img: "/noavatar.png" },
    status: "completed",
    date: "29.12.2024",
    amount: "6200",
  },
  {
    user: { name: "TestUser", img: "/noavatar.png" },
    status: "failed",
    date: "12.02.2024",
    amount: "9200",
  },
  {
    user: { name: "TestUser", img: "/noavatar.png" },
    status: "pending",
    date: "12.12.2024",
    amount: "1500",
  },
  {
    user: { name: "TestUser", img: "/noavatar.png" },
    status: "completed",
    date: "01.01.2024",
    amount: "3000",
  },
];
