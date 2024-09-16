import styles from "./users.module.css";
import { fetchUsers } from "../../lib/data";
import SearchBar from "@/components/dashboard/searchBar/searchBar";
import Image from "next/image";
import Link from "next/link";

const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.search || "";

  const users = await fetchUsers(q);

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <SearchBar placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button>Add User</button>
        </Link>
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
                  <Image
                    width={40}
                    height={40}
                    src={user.img}
                    alt={user.username}
                  />
                  {user.username}
                </td>
                <td>{user.email}</td>
                <td>{user.createdAt?.toString().slice(4, 16)}</td>
                <td>{user.isAdmin ? "admin" : "user"}</td>
                <td>{user.isActive ? "active" : "passive"}</td>
                <td>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={styles.view}>View</button>
                  </Link>
                  <button className={styles.delete}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.footer}>
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default UsersPage;
