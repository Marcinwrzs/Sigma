import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import "@/styles/product.css";
import type { Product as ProductType } from "@/types/types";

const Product: React.FC<{ data: ProductType }> = ({ data }) => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleClick = () => {
    navigate(`/product/${data.id}`);
  };

  return (
    <div
      className="product-item"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="product-image-container">
        {!imageLoaded && !imageError && (
          <div className="product-loader">
            <CircularProgress size={24} />
          </div>
        )}
        {!imageError ? (
          <img
            src={data.thumbnail}
            alt={data.title}
            className="product-image"
            style={{ visibility: imageLoaded ? "visible" : "hidden" }}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="product-loader error-text">N/A</div>
        )}
      </div>

      <div className="product-info-container">
        <div className="product-name-container">
          <span className="product-name">{data.title}</span>
        </div>
        <div className="product-price-container">
          <span className="product-price">${data.price}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
