import apiClient from "./client";
import type { ProductListResponse, Product } from "../types/types";

class Api {
  async getAllProducts(): Promise<ProductListResponse> {
    const res = await apiClient.get<ProductListResponse>("/products");
    return res.data;
  }

  async searchProducts(query: string): Promise<ProductListResponse> {
    const res = await apiClient.get<ProductListResponse>(
      `/products/search?q=${query}`
    );
    return res.data;
  }

  async getProductById(id: Number): Promise<Product> {
    const res = await apiClient.get<Product>(`/products/${id}`);
    return res.data;
  }
}

const api = new Api();
export default api;
