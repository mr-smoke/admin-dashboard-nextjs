import styles from "./userDetail.module.css";

const UserDetailPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.userInfo}>
        <img src="https://via.placeholder.com/150" alt="user" />
        <p>Test User1</p>
      </div>
      <form className={styles.form} action="">
        <div className={styles.formGroup}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone</label>
          <input type="phone" id="phone" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="isAdmin">User Type</label>
          <select id="isAdmin">
            <option value={false}>Select user type</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="isActive">Status</label>
          <select id="isActive">
            <option value={true}>Select a status</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            rows="4"
            placeholder="Enter a address"
          ></textarea>
        </div>
        <button type="submit" className={styles.button}>
          Add User
        </button>
      </form>
    </div>
  );
};

export default UserDetailPage;
