"use client";
import { authenticate } from "../lib/actions";
import styles from "./login.module.css";
import { useFormState } from "react-dom";

const LoginPage = () => {
  const [state, formAction] = useFormState(authenticate, undefined);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Login</h1>
        <form className={styles.form} action={formAction}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="username"
              id="username"
              name="username"
              maxLength={20}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className={styles.button}>
            Login
          </button>
          <span style={{ textAlign: "center", color: "gray" }}>
            You can login with username: admin, password: admin for testing
            purposes.
          </span>
          {state && (
            <span style={{ textAlign: "center", color: "red" }}>{state}</span>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
