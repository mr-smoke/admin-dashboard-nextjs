import styles from "./users.module.css";
import { fetchUsers } from "../../lib/data";
import SearchBar from "@/components/dashboard/searchBar/searchBar";
import Image from "next/image";
import Link from "next/link";
import Pagination from "@/components/dashboard/pagination/pagination";
import { deleteUser } from "@/app/lib/actions";

const UsersPage = async ({ searchParams }) => {
  const query = searchParams?.query || "";
  const page = searchParams?.page || 1;

  const { users, count } = await fetchUsers(query, page);

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <SearchBar placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button>Add User</button>
        </Link>
      </div>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th style={{ width: "20%" }}>Name</th>
              <th style={{ width: "25%" }}>Email</th>
              <th style={{ width: "15%" }}>Created Date</th>
              <th style={{ width: "15%" }}>Role</th>
              <th style={{ width: "10%" }}>Status</th>
              <th style={{ width: "10%" }}>Action</th>
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
                <td className={styles.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={styles.view}>View</button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={user.id} />
                    <button className={styles.delete}>Delete</button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.tableInfo}>
          <p className={styles.count}>{`${count} products founded.`}</p>
          {count > 0 && (
            <p className={styles.page}>{`Page ${page} of ${Math.ceil(
              count / 5
            )}`}</p>
          )}
        </div>
      </div>
      <div className={styles.footer}>
        <Pagination count={count} />
      </div>
    </div>
  );
};

export default UsersPage;
