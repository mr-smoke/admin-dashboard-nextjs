import { addProduct } from "@/app/lib/actions";
import styles from "./addProducts.module.css";

const AddProducts = () => {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form} action={addProduct}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" maxLength={50} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            min="0"
            max="100000"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            id="stock"
            name="stock"
            min="0"
            max="100000"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="size">Size</label>
          <input type="text" id="size" name="size" maxLength={25} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="category">Category</label>
          <select id="category" name="category">
            <option value="general">Select a category</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="phones">Phones</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="desc">Description</label>
          <textarea
            id="desc"
            name="desc"
            rows="4"
            placeholder="Enter a description"
            maxLength={200}
            required
          ></textarea>
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProducts;
