import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import ProductsNavigator from "./navigation/ShopNavigator";

import productsReducer from "./store/reducers/products";

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <>
      <Provider store={store}>
        <ProductsNavigator />
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
