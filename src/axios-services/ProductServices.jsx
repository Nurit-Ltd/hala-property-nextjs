import requests from "./httpServices";


const ProductServices = {
  getShowingStoreProducts: async ({
    cname,
    category = "",
    title = "",
    sort = "",
    limit = 18,
  }) => {
    return requests.get(
      `/products/store?cname=${cname}&category=${category}&title=${title}&sort=${sort}&limit=${limit}`
    );
  },

  getShowingStoreProductsAndCategory: async ({ cname }) => {
    return requests.get(`/products/categories/store?cname=${cname}`);
  },

  getRelatedProducts: async (body) => {
    return requests.put(`/products/related/products`, body);
  },

  getProductBySlug: async ({ cname, slug }) => {
    return requests.get(`/products/product/slug?cname=${cname}&slug=${slug}`);
  },
};

export default ProductServices;
