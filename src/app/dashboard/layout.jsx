import styles from "./layout.module.css";
import Footer from "@/components/dashboard/footer/footer";
import Navbar from "@/components/dashboard/navbar/navbar";
import Sidebar from "@/components/dashboard/sidebar/sidebar";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <main className={styles.content}>
        <navbar className={styles.navbar}>
          <Navbar />
        </navbar>
        {children}
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </main>
      <Toaster />
    </div>
  );
};

export default Layout;
