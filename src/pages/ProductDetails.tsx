import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "@/api/Api";
import CircularProgress from "@mui/material/CircularProgress";
import "@/styles/product-details.css";
import type { Product as ProductType } from "@/types/types";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.getProductById(Number(id));
        setProduct(res);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="product-details-loader">
        <CircularProgress />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-details-loader">
        <p>Product not found.</p>
      </div>
    );
  }

  return (
    <div className="content-container">
      <div className="product-details-container">
        <div className="product-details-image-container">
          {!imageError ? (
            <img
              src={product.thumbnail}
              alt={product.title}
              className="product-details-image"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="product-details-fallback">N/A</div>
          )}
        </div>
        <div className="product-details-info">
          <h1 className="product-details-title">{product.title}</h1>
          <p className="product-details-description">{product.description}</p>
          <p className="product-details-price">${product.price}</p>
          <div className="product-details-meta">
            <span>ID: {product.id}</span>
            <span>Category: {product.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
