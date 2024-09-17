import Image from "next/image";
import styles from "./productDetail.module.css";
import { fetchProduct } from "@/app/lib/data";
import { updateProduct } from "@/app/lib/actions";

const ProductDetailPage = async ({ params }) => {
  const id = params.id;
  const product = await fetchProduct(id);

  return (
    <div className={styles.wrapper}>
      <div className={styles.userInfo}>
        <Image width={300} height={300} src={product.img} alt="user" />
        <p>{product.title}</p>
      </div>
      <form className={styles.form} action={updateProduct}>
        <input type="hidden" name="id" value={id} />
        <div className={styles.formGroup}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder={product.title}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder={product.price}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            id="stock"
            name="stock"
            placeholder={product.stock}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="size">Size</label>
          <input type="text" id="size" name="size" placeholder={product.size} />
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
          <label htmlFor="description">Description</label>
          <textarea
            id="desc"
            name="desc"
            rows="4"
            placeholder={product.desc}
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
