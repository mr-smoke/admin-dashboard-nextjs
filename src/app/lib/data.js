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
  MdOutlinePlayCircle,
  MdAddBox,
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

export const items = [
  {
    img: "/astronaut.png",
    time: "🔥 Avaible Now",
    title: "How to use the new version of the admin panel",
    info: "Takes 4 minutes to learn",
    desc: "This is a guide for the new version of the admin panel. Learn how to use the new features of the admin panel. Quick and easy guide. For more information, click the button below.",
    button: "Watch",
    buttonIcon: <MdOutlinePlayCircle size={20} />,
  },
  {
    img: "/astronaut.png",
    time: "🚀 Coming Soon",
    title: "New features are coming soon",
    info: "Boost your productivity",
    desc: "We are working on new features to increase your productivity. Stay tuned for the new features. For more information, click the button below.",
    button: "Add",
    buttonIcon: <MdAddBox size={20} />,
  },
];

export const products = [
  {
    title: "Product 1",
    img: "/noavatar.png",
    desc: "Description of product 1",
    date: "12.12.2024",
    stock: "20",
    price: "200",
  },
  {
    title: "Product 2",
    img: "/noavatar.png",
    desc: "Description of product 2",
    date: "12.12.2024",
    stock: "10",
    price: "200",
  },
  {
    title: "Product 3",
    img: "/noavatar.png",
    desc: "Description of product 3",
    date: "12.12.2024",
    stock: "30",
    price: "200",
  },
  {
    title: "Product 4",
    img: "/noavatar.png",
    desc: "Description of product 4",
    date: "12.12.2024",
    stock: "40",
    price: "200",
  },
  {
    title: "Product 5",
    img: "/noavatar.png",
    desc: "Description of product 5",
    date: "12.12.2024",
    stock: "50",
    price: "200",
  },
];
