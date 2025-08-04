import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Products from "./pages/Products";
import Product from "./pages/Product";
import "@/styles/index.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;
