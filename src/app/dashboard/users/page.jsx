import styles from "./users.module.css";
import { users } from "../../lib/data";
import SearchBar from "@/components/dashboard/searchBar/searchBar";

const UsersPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <SearchBar />
      </div>
      <div className={styles.table}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Created Date</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td className={styles.user}>
                  <img src={user.img} alt={user.name} />
                  {user.name}
                </td>
                <td>{user.email}</td>
                <td>{user.date}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>
                <td>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.footer}>
        <button className={styles.button}>Previous</button>
        <button className={styles.button}>Next</button>
      </div>
    </div>
  );
};

export default UsersPage;
