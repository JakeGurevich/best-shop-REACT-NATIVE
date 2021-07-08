import React from "react";
import { FlatList, Text } from "react-native";
import { useSelector } from "react-redux";

const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </>
  );
};
ProductsOverviewScreen.screenOptions = {
  headerTitle: "All products",
};
export default ProductsOverviewScreen;
