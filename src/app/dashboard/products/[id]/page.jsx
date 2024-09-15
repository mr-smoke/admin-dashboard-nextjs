import Image from "next/image";
import styles from "./productDetail.module.css";

const ProductDetailPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.userInfo}>
        <Image width={300} height={300} src="/noavatar.png" alt="user" />
        <p>Test User1</p>
      </div>
      <form className={styles.form} action="">
        <div className={styles.formGroup}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="price">Price</label>
          <input type="number" id="price" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="stock">Stock</label>
          <input type="number" id="stock" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="size">Size</label>
          <input type="text" id="size" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="category">Category</label>
          <select id="category">
            <option value="general">Select a category</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="phones">Phones</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="desc"
            rows="4"
            placeholder="Enter a description"
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.button}>
          Update
        </button>
      </form>
    </div>
  );
};

export default ProductDetailPage;
