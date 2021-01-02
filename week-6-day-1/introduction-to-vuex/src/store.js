import { createStore } from "vuex";

const store = createStore({
  state: {
    incoming_price: 110,
    justList: ["vue", "react", "instagram", "masa"],
    userInfo: {},
    productList: [
      { id: 1, title: "Masa" },
      { id: 2, title: "Mikrofon" },
    ],
  },
  mutations: {
    setIncomingPrice(state, price) {
      state.incoming_price = price;
      //   axios.
    },
    addToList(state, newItem) {
      state.justList.push(newItem);
    },
    addProduct(state, newProduct) {
      state.productList.push(newProduct);
    },
    deleteProduct(state, productID) {
      state.productList = state.productList.filter((p) => p.id !== productID);
    },
  },
  getters: {
    userPrice(state) {
      return parseFloat(state.incoming_price) + 5;
    },
    randomList: (state) => state.justList,
    productList: (state) => state.productList,
    productResultBar: (state) =>
      `${state.productList.length} adet ürün vardır..`,
  },
});

export default store;
