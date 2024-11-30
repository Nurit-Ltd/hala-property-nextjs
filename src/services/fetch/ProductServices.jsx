import { getCname } from "@lib/auth-server";
import { baseURL, handleResponse } from "./CommonServices";

const getShowingStoreProducts = async ({
  category = "",
  title = "",
  sort = "",
  limit = 18,
}) => {
  const cname = await getCname();
  // console.log("cname", cname, typeof cname);
  try {
    const response = await fetch(
      `${baseURL}/products/store?cname=${cname}&category=${category}&title=${title}&sort=${sort}&limit=${limit}`,
      {
        method: "get",
        cache: "no-cache",
      }
    );

    const products = await handleResponse(response);

    return {
      products: products.products,
      popularProducts: products.products,
      featureProducts: products.featureProducts,
      discountedProducts: products.discountedProducts,
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

const getShowingStoreProductsAndCategory = async ({ cname }) => {
  try {
    const response = await fetch(
      `${baseURL}/products/categories/store?cname=${cname}`,
      {
        method: "get",
        cache: "no-cache",
      }
    );

    const products = await handleResponse(response);

    return {
      featureProducts: products?.featureProducts,
      categoriesWithProducts: products?.categoriesWithProducts,
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

const getRelatedProducts = async ({ cname, ids, catIds, option }) => {
  try {
    const response = await fetch(
      `${baseURL}/products/related/products?cname=${cname}`,
      {
        method: "PUT",
        cache: "no-cache",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ids, catIds, option }),
      }
    );

    const products = await handleResponse(response);

    return {
      relatedProducts: products.products,
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

const getProductBySlug = async ({ cname, slug }) => {
  try {
    const response = await fetch(
      `${baseURL}/products/product/slug?cname=${cname}&slug=${slug}`,
      {
        method: "get",
        cache: "no-cache",
      }
    );

    const product = await handleResponse(response);

    return {
      product: product?.product,
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

export {
  getProductBySlug,
  getRelatedProducts,
  getShowingStoreProducts,
  getShowingStoreProductsAndCategory,
};
