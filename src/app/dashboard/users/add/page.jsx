"use client";
import { addUser } from "@/app/lib/actions";
import styles from "./addUsers.module.css";
import toast from "react-hot-toast";

const AddUsers = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await addUser(formData);

    if (!response.error) {
      toast.success("User added successfully");
      window.location.href = "/dashboard/users";
    } else {
      toast.error(response.error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            maxLength={20}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" maxLength={50} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            minLength={6}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="isAdmin">User Type</label>
          <select id="isAdmin" name="isAdmin">
            <option value={false}>User</option>
            <option value={true}>Admin</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="isActive">Status</label>
          <select id="isActive" name="isActive">
            <option value={true}>Active</option>
            <option value={false}>Passive</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            rows="4"
            placeholder="Enter a address"
            maxLength={100}
          ></textarea>
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUsers;
