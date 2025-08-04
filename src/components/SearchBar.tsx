import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import api from "@/api/Api";
import type { Product } from "@/types/types";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (query.trim() === "") {
        setResults([]);
        setShowDropdown(false);
        return;
      }

      setLoading(true);
      api
        .searchProducts(query)
        .then((res) => {
          setResults(res.products);
          setShowDropdown(true);
        })
        .catch(() => {
          setResults([]);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  const handleSelect = (id: number) => {
    setQuery("");
    setShowDropdown(false);
    navigate(`/product/${id}`);
  };

  return (
    <div className="search-container">
      <div className="search-bar-container">
        <div className="search-icon-container">
          <SearchIcon className="search-icon" />
        </div>
        <input
          type="text"
          className="search-input-container"
          placeholder="Search for products"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {showDropdown && results.length > 0 && (
        <div className="search-dropdown">
          {loading ? (
            <div className="dropdown-loading">...</div>
          ) : (
            results.slice(0, 5).map((product) => (
              <div
                key={product.id}
                className="dropdown-item"
                onClick={() => handleSelect(product.id)}
              >
                {product.title}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
