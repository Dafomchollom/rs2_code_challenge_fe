export default {
  // get all products action
  LOG_IN({ commit }) {
    const response = ProductService.getAllProducts();

    Promise.resolve(response).then((result) => {
      const update = JSON.parse(JSON.stringify(result));
      commit("GET_ALL_PRODUCTS", update.data.content.data);
    });
  },
  SET_USER_DETAILS({ commit }) {
    // const response = ProductService.getAllProductsTypes();

    Promise.resolve(response).then((result) => {
      const update = JSON.parse(JSON.stringify(result));
      commit("GET_ALL_PRODUCTS", update.data.content.data);
    });
  },
};
