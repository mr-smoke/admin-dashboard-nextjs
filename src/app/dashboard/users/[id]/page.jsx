import Image from "next/image";
import styles from "./userDetail.module.css";
import { fetchUser } from "@/app/lib/data";
import { updateUser } from "@/app/lib/actions";

const UserDetailPage = async ({ params }) => {
  const id = params.id;
  const user = await fetchUser(id);
  return (
    <div className={styles.wrapper}>
      <div className={styles.userInfo}>
        <Image width={300} height={300} src={user.img} alt="user" />
        <p>{user.username}</p>
      </div>
      <form className={styles.form} action={updateUser}>
        <input type="hidden" name="id" value={id} />
        <div className={styles.formGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder={user.username}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={user.email}
          />
        </div>
        {/* <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password"  />
        </div> */}
        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone</label>
          <input
            type="phone"
            id="phone"
            name="phone"
            placeholder={user.phone}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="isAdmin">User Type</label>
          <select id="isAdmin" name="isAdmin">
            <option value={false}>Select user type</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="isActive">Status</label>
          <select id="isActive" name="isActive">
            <option value={true}>Select a status</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            rows="4"
            placeholder={user.address}
          ></textarea>
        </div>
        <button type="submit" className={styles.button}>
          Update
        </button>
      </form>
    </div>
  );
};

export default UserDetailPage;
