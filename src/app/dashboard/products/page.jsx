import styles from "./products.module.css";
import { fetchProducts } from "../../lib/data";
import SearchBar from "@/components/dashboard/searchBar/searchBar";
import Image from "next/image";
import Link from "next/link";
import Pagination from "@/components/dashboard/pagination/pagination";

const ProductsPage = async ({ searchParams }) => {
  const query = searchParams?.query || "";
  const page = searchParams?.page || 1;

  const { products, count } = await fetchProducts(query, page);
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <SearchBar placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button>Add Product</button>
        </Link>
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
                  <Image
                    width={50}
                    height={50}
                    src={product.img}
                    alt={product.title}
                  />
                  {product.title}
                </td>
                <td>{product.desc}</td>
                <td>{`${
                  product.price ? "$" + product.price : "No price information"
                }`}</td>
                <td>{product.createdAt.toString().slice(4, 16)}</td>
                <td>{`${product.stock ? product.stock : "-"}`}</td>
                <td>
                  <Link href={`/dashboard/products/${product.id}`}>
                    <button className={styles.view}>View</button>
                  </Link>
                  <button className={styles.delete}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.footer}>
        <Pagination count={count} />
      </div>
    </div>
  );
};

export default ProductsPage;
