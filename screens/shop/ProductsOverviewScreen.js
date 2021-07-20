import React from "react";
import { FlatList, Text, Platform } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/ProductItem";
import Colors from "../../constants/Colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import * as cartActions from "../../store/actions/cart";
import HeaderButton from "../../components/UI/HeaderButton";
const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();
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
            onAddtoCart={() => {
              dispatch(cartActions.addToCart(item));
            }}
          />
        )}
      />
    </>
  );
};
ProductsOverviewScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "All products",
    // headerTintColor: Platform.OS === "android" ? "#fff" : Colors.accent,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName="cart"
          onPress={() => {
            navData.navigation.navigate("Cart");
          }}
        />
      </HeaderButtons>
    ),
  };
};
export default ProductsOverviewScreen;
