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
  MdOutlinePlayCircle,
  MdAddBox,
} from "react-icons/md";
import { ProductModel, UserModel } from "./models";
import { connectToDatabase } from "./utils";

export const itemsPerPage = 5;

export const menuItems = [
  {
    title: "Pages",
    list: [
      { title: "Dashboard", url: "/dashboard", icon: <MdDashboard /> },
      {
        title: "Users",
        url: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        url: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        url: "/dashboard/",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        url: "/dashboard/",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        url: "/dashboard/",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        url: "/dashboard/",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        url: "/dashboard/",
        icon: <MdOutlineSettings />,
      },
      { title: "Help", url: "/dashboard/", icon: <MdHelpCenter /> },
    ],
  },
];

export const cards = [
  {
    icon: <MdSupervisedUserCircle size={30} />,
    title: "Total Users",
    amount: "20.270",
    percentage: 2.5,
  },
  {
    icon: <MdShoppingBag size={30} />,
    title: "Total Products",
    amount: "1.270",
    percentage: 3.7,
  },
  {
    icon: <MdAttachMoney size={30} />,
    title: "Total Transactions",
    amount: "270",
    percentage: -1.2,
  },
];

export const transactions = [
  {
    id: 1,
    name: "TestUser",
    img: "/noavatar.png",
    status: "pending",
    date: "02.12.2024",
    amount: "3200",
  },
  {
    id: 2,
    name: "TestUser",
    img: "/noavatar.png",
    status: "completed",
    date: "29.12.2024",
    amount: "6200",
  },
  {
    id: 3,
    name: "TestUser",
    img: "/noavatar.png",
    status: "failed",
    date: "12.02.2024",
    amount: "9200",
  },
  {
    id: 4,
    name: "TestUser",
    img: "/noavatar.png",
    status: "pending",
    date: "12.12.2024",
    amount: "1500",
  },
  {
    id: 5,
    name: "TestUser",
    img: "/noavatar.png",
    status: "completed",
    date: "01.01.2024",
    amount: "3000",
  },
];

export const chart = [
  {
    name: "Sun",
    visits: 4000,
    clicks: 2400,
  },
  {
    name: "Mon",
    visits: 3000,
    clicks: 1398,
  },
  {
    name: "Tue",
    visits: 2000,
    clicks: 3800,
  },
  {
    name: "Wed",
    visits: 2780,
    clicks: 3908,
  },
  {
    name: "Thu",
    visits: 1890,
    clicks: 4800,
  },
  {
    name: "Fri",
    visits: 2390,
    clicks: 3800,
  },
  {
    name: "Sat",
    visits: 3490,
    clicks: 4300,
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
    img: "/astronaut2.png",
    time: "🚀 Coming Soon",
    title: "New features are coming soon",
    info: "Boost your productivity",
    desc: "We are working on new features to increase your productivity. Stay tuned for the new features. For more information, click the button below.",
    button: "Add",
    buttonIcon: <MdAddBox size={20} />,
  },
];

export const dummyProductsData = [
  {
    id: 1,
    title: "Product 1",
    img: "/noavatar.png",
    desc: "Description of product 1",
    date: "12.12.2024",
    stock: "20",
    price: "200",
  },
  {
    id: 2,
    title: "Product 2",
    img: "/noavatar.png",
    desc: "Description of product 2",
    date: "12.12.2024",
    stock: "10",
    price: "200",
  },
  {
    id: 3,
    title: "Product 3",
    img: "/noavatar.png",
    desc: "Description of product 3",
    date: "12.12.2024",
    stock: "30",
    price: "200",
  },
  {
    id: 4,
    title: "Product 4",
    img: "/noavatar.png",
    desc: "Description of product 4",
    date: "12.12.2024",
    stock: "40",
    price: "200",
  },
  {
    id: 5,
    title: "Product 5",
    img: "/noavatar.png",
    desc: "Description of product 5",
    date: "12.12.2024",
    stock: "50",
    price: "200",
  },
];

export const dummyUsersData = [
  {
    id: 1,
    name: "Test User 1",
    img: "/noavatar.png",
    email: "testuser1@gmail.com",
    role: "Admin",
    status: "Active",
    date: "12.12.2024",
  },
  {
    id: 2,
    name: "Test User 2",
    img: "/noavatar.png",
    email: "testuser2@gmail.com",
    role: "User",
    status: "Active",
    date: "12.12.2024",
  },
];

export const fetchUsers = async (query, page) => {
  const regex = new RegExp(query, "i");

  try {
    await connectToDatabase();
    const count = await UserModel.countDocuments({
      username: { $regex: regex },
    });
    if (
      page < 1 ||
      isNaN(page) ||
      page * itemsPerPage - (itemsPerPage - 1) > count
    ) {
      page = 1;
    }
    const users = await UserModel.find({ username: { $regex: regex } })
      .limit(itemsPerPage)
      .skip((page - 1) * itemsPerPage)
      .sort({ createdAt: -1 });
    return { users, count };
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchProducts = async (query, page) => {
  const regex = new RegExp(query, "i");

  try {
    await connectToDatabase();
    const count = await ProductModel.countDocuments({
      title: { $regex: regex },
    });
    if (
      page < 1 ||
      isNaN(page) ||
      page * itemsPerPage - (itemsPerPage - 1) > count
    ) {
      page = 1;
    }
    const products = await ProductModel.find({ title: { $regex: regex } })
      .limit(itemsPerPage)
      .skip((page - 1) * itemsPerPage)
      .sort({ createdAt: -1 });
    return { products, count };
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchUser = async (id) => {
  try {
    await connectToDatabase();
    const user = await UserModel.findById(id);
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchProduct = async (id) => {
  try {
    await connectToDatabase();
    const product = await ProductModel.findById(id);
    return product;
  } catch (error) {
    throw new Error(error);
  }
};
