# Admin Dashboard - Fullstack

![Banner](https://i.ibb.co/k2x7sYy/banner.png)

## Table of Contents

- [About The Project](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

##About The Project

An advanced full-stack admin dashboard built with Next.js, MongoDB, and NextAuth. This project provides a comprehensive and user-friendly interface for managing products, users, and other administrative tasks. It leverages the power of Next.js for server-side rendering and static site generation, MongoDB for a flexible and scalable database solution, and NextAuth for secure authentication and session management.

![Gif](https://i.ibb.co/QJkmgYk/New-Project-Clipchampileyapld-ezgif-com-video-to-gif-converter.gif)

### Key Use Cases:

- Manage products and users with ease using intuitive forms and dynamic updates.
- Efficiently handle large data sets with pagination and search functionality.
- Visualize data through interactive charts.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/mr-smoke/admin-dashboard-nextjs.git
   ```

2. Navigate to the project directory:

   ```bash
   cd admin-dashboard-nextjs
   ```

3. Install the [dependencies](#dependencies):

   ```bash
   npm install
   ```

4. Set up environment variables:

   - Create a `.env` file in the root directory and add the necessary environment variables.

5. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

To use the admin dashboard, follow these steps:

1. Open your browser and navigate to `http://localhost:3000`.
2. Log in using the provided credentials (e.g., username: `admin`, password: `admin`).
3. Use the navigation menu to access different sections of the dashboard, such as Products, Users, and Settings.

### Example Commands

- To add a new product:

  1. Navigate to the Products section.
  2. Click on the "Add Product" button.
  3. Fill in the product details and submit the form.

- To manage users:
  1. Navigate to the Users section.
  2. View, edit, or delete users as needed.

## Features

- **Authentication**: Secure login and session management using NextAuth. Includes login and logout functionality.
- **User Management**: Add, edit, and delete users. Includes pagination and search functionality.
- **Product Management**: Add, edit, and delete products. Includes pagination and search functionality.
- **Charts**: Visualize data with charts made using Recharts.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Real-time Updates**: Dynamic updates without page reloads.
- **Server-side Rendering**: Improved performance and SEO with Next.js.
- **Database Integration**: MongoDB for flexible and scalable data storage.

## Technologies Used

- [![Next][Next.js]][Next-url]
- [![NextAuth][NextAuth.js]][NextAuth-url]
- [![MongoDB][MongoDB]][Mongo-url]

## Dependencies

- **bcrypt**: For hashing passwords and ensuring secure authentication.
- **mongodb**: NoSQL database for storing users and products data.
- **mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.
- **next**: The React framework used for server-side rendering and static site generation.
- **next-auth**: Library to implement authentication with various providers.
- **react**: Core library for building the frontend interface.
- **react-dom**: React library for DOM rendering.
- **react-hot-toast**: To display non-intrusive toast notifications.
- **react-icons**: Collection of popular icons to enhance the UI.
- **recharts**: Simple and flexible charts for data visualization.
- **use-debounce**: Hook for adding debounce functionality in various parts of the UI.

## Contributing

Contributions are welcome! To contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.

## Contact

For questions or feedback, feel free to reach out:

- Email: [muhammetbakiduman@gmail.com](mailto:muhammetbakiduman@gmail.com)
- LinkedIn: [Baki Duman](https://www.linkedin.com/in/muhammet-baki-duman-019451195/)

---

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[MongoDB]: https://img.shields.io/badge/mongodb-000000?style=for-the-badge&logo=mongodb&logoColor=white
[Mongo-url]: https://www.mongodb.com
[NextAuth.js]: https://img.shields.io/badge/nextauth-20232A?style=for-the-badge&logo=nextauth&logoColor=61DAFB
[NextAuth-url]: https://next-auth.js.org
