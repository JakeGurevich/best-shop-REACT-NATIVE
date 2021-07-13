import React from "react";
import { FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../../components/ProductItem";

const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductItem
            title={item.title}
            image={item.imageUrl}
            price={item.price}
            onViewDetails={() => {
              props.navigation.navigate("ProductDetail", {
                productId: item.id,
                productTitle: item.title,
              });
            }}
            onAddtoCart={() => {}}
          />
        )}
      />
    </>
  );
};
ProductsOverviewScreen.screenOptions = {
  headerTitle: "All products",
};
export default ProductsOverviewScreen;
