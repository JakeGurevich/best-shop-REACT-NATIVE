import React from "react";
import { FlatList, Text, Platform } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../../components/ProductItem";
import Colors from "../../constants/Colors";
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
ProductsOverviewScreen.navigationOptions = {
  headerTitle: "All products",
  headerTintColor: Platform.OS === "android" ? "#fff" : Colors.accent,
};
export default ProductsOverviewScreen;
