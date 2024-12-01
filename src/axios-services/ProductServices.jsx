import requests from "./httpServices";

const ProductServices = {
  // Create a new product
  createProduct: async (body) => {
    return requests.post("/products", body); // POST request to create a new product
  },

  // Read all products (or filtered by category)
  getAllProducts: async ({ cname, category = "", limit = 10, sort = "" }) => {
    return requests.get(
      `/products?cname=${cname}&category=${category}&limit=${limit}&sort=${sort}`
    );
  },

  // Get a single product by slug
  getProductBySlug: async ({ cname, slug }) => {
    return requests.get(`/products/product/slug?cname=${cname}&slug=${slug}`);
  },

  // Update product details
  updateProduct: async (slug, body) => {
    return requests.put(`/products/${slug}`, body); // PUT request to update a product by its slug
  },

  // Delete a product
  deleteProduct: async (slug) => {
    return requests.delete(`/products/${slug}`); // DELETE request to remove the product
  },

  // Get related products based on a specific product
  getRelatedProducts: async (body) => {
    return requests.put(`/products/related/products`, body); // PUT request to get related products
  },
};

export default ProductServices;
