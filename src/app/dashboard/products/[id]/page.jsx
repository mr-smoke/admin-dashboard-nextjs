import Image from "next/image";
import styles from "./productDetail.module.css";
import { fetchProduct } from "@/app/lib/data";
import { updateProduct } from "@/app/lib/actions";

const ProductDetailPage = async ({ params }) => {
  const id = params.id;
  const product = await fetchProduct(id);

  return (
    <div className={styles.wrapper}>
      <div className={styles.productInfo}>
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
            maxLength={50}
            placeholder={product.title}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            min="0"
            max="100000"
            placeholder={product.price}
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
            placeholder={product.stock}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="size">Size</label>
          <input
            type="text"
            id="size"
            name="size"
            maxLength={25}
            placeholder={product.size ? product.size : "Enter size"}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="category">Category</label>
          <select id="category" name="category" defaultValue={product.category}>
            <option
              value="general"
              selected={product.category === "general" ? "selected" : ""}
            >
              General
            </option>
            <option
              value="electronics"
              selected={product.category === "electronics" ? "selected" : ""}
            >
              Electronics
            </option>
            <option
              value="jewelery"
              selected={product.category === "jewelery" ? "selected" : ""}
            >
              Jewelery
            </option>
            <option
              value="phones"
              selected={product.category === "phones" ? "selected" : ""}
            >
              Phones
            </option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <textarea
            id="desc"
            name="desc"
            rows="4"
            maxLength={200}
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
