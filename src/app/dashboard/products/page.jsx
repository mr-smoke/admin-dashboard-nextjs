import styles from "./products.module.css";
import { products } from "../../lib/data";
import SearchBar from "@/components/dashboard/searchBar/searchBar";

const ProductsPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <SearchBar />
        <button className={styles.button}>Add Product</button>
      </div>
      <div className={styles.table}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Created Date</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td className={styles.product}>
                  <img src={product.img} alt={product.title} />
                  {product.title}
                </td>
                <td>{product.desc}</td>
                <td>${product.price}</td>
                <td>{product.date}</td>
                <td>{product.stock}</td>
                <td>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.footer}>
        <button className={styles.button}>Previous</button>
        <button className={styles.button}>Next</button>
      </div>
    </div>
  );
};

export default ProductsPage;