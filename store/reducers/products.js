import PRODUCTS from "../../data/4.1 dummy-data";

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((product) => product.ownerId === "u1"),
};
export default (state = initialState, action) => {
  return state;
};
