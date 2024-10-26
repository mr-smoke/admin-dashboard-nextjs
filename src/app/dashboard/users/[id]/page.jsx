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
            maxLength={20}
            placeholder={user.username}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            maxLength={50}
            placeholder={user.email}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            minLength={6}
            placeholder="Enter new password"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone</label>
          <input
            type="phone"
            id="phone"
            name="phone"
            maxLength={15}
            placeholder={user.phone ? user.phone : "Enter phone number"}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="isAdmin">User Type</label>
          <select id="isAdmin" name="isAdmin" defaultValue={user.isAdmin}>
            <option value={true} selected={user.isAdmin}>
              Admin
            </option>
            <option value={false} selected={!user.isAdmin}>
              User
            </option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="isActive">Status</label>
          <select id="isActive" name="isActive" defaultValue={user.isActive}>
            <option value={true} selected={user.isActive}>
              Active
            </option>
            <option value={false} selected={!user.isActive}>
              Passive
            </option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            rows="4"
            maxLength={100}
            placeholder={user.address ? user.address : "Enter address"}
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
