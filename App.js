import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import AppNavigator from "./navigation/AppNavigator";
import cartReducer from "./store/reducers/cart";
import productsReducer from "./store/reducers/products";
import ordersReducer from "./store/reducers/orders";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
