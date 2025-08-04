import { useEffect, useState } from "react";
import api from "@/api/Api";
import type { Product as ProductType } from "@/types/types";
import Product from "@/components/Product";

const Products: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.getAllProducts();
        setProducts(res.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const featured = products.slice(0, 6);
  const newArrivals = products.slice(6, 12);

  return (
    <div className="content-container">
      <div className="products-container">
        <div className="products-header">Featured products</div>
        <div className="products-list-container">
          {featured.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>

        <div className="products-header">New arrivals</div>
        <div className="products-list-container">
          {newArrivals.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
