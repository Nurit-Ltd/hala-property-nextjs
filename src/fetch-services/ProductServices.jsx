// services/productServices.js
import { baseURL, handleResponse } from "./CommonServices";

// Create Product (POST)
const createProduct = async (body) => {
  try {
    const response = await fetch(`${baseURL}/products`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body), // Send product data without cname
    });

    const product = await handleResponse(response);
    return { product };
  } catch (error) {
    return { error: error.message };
  }
};

// Get All Products (GET)
const getAllProducts = async ({
  category = "",
  title = "",
  sort = "",
  limit = 18,
}) => {
  try {
    const response = await fetch(
      `${baseURL}/products/store?category=${category}&title=${title}&sort=${sort}&limit=${limit}`,
      {
        method: "GET",
        cache: "no-cache",
      }
    );

    const products = await handleResponse(response);
    return {
      products: products.products,
      popularProducts: products.popularProducts,
      featureProducts: products.featureProducts,
      discountedProducts: products.discountedProducts,
    };
  } catch (error) {
    return { error: error.message };
  }
};

// Get Product by Slug (GET)
const getProductBySlug = async ({ slug }) => {
  try {
    const response = await fetch(
      `${baseURL}/products/product/slug?slug=${slug}`,
      {
        method: "GET",
        cache: "no-cache",
      }
    );

    const product = await handleResponse(response);
    return { product: product?.product };
  } catch (error) {
    return { error: error.message };
  }
};

// Update Product (PUT)
const updateProduct = async (slug, body) => {
  try {
    const response = await fetch(`${baseURL}/products/${slug}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body), // Send updated product data without cname
    });

    const updatedProduct = await handleResponse(response);
    return { updatedProduct };
  } catch (error) {
    return { error: error.message };
  }
};

// Delete Product (DELETE)
const deleteProduct = async (slug) => {
  try {
    const response = await fetch(`${baseURL}/products/${slug}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
      },
    });

    await handleResponse(response); // If the response is successful, return nothing
    return { message: "Product deleted successfully" };
  } catch (error) {
    return { error: error.message };
  }
};

// Get Related Products (PUT)
const getRelatedProducts = async ({ ids, catIds, option }) => {
  try {
    const response = await fetch(`${baseURL}/products/related/products`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ids, catIds, option }),
    });

    const products = await handleResponse(response);
    return { relatedProducts: products.products };
  } catch (error) {
    return { error: error.message };
  }
};

// Get Categories and Featured Products (GET)
const getShowingStoreProductsAndCategory = async () => {
  try {
    const response = await fetch(`${baseURL}/products/categories/store`, {
      method: "GET",
      cache: "no-cache",
    });

    const products = await handleResponse(response);
    return {
      featureProducts: products?.featureProducts,
      categoriesWithProducts: products?.categoriesWithProducts,
    };
  } catch (error) {
    return { error: error.message };
  }
};

// Export all services
export {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductBySlug,
  getRelatedProducts,
  getShowingStoreProductsAndCategory,
  updateProduct,
};
