import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import ProductsOverviewScreen, {
  screenOptions as productsOverviewScreenOptions,
} from "../screens/shop/ProductsOverviewScreen";
import Colors from "../constants/Colors";
import { Platform } from "react-native";
import ProductDetailScreen, {
  screenOptions as productDetailScreenOptions,
} from "../screens/shop/ProductDitailScreen";
import CartScreen, {
  screenOptions as cartScreenOptions,
} from "../screens/shop/CartScreen";
import OrdersScreen, {
  screenOptions as ordersScreenOptions,
} from "../screens/shop/OrdersScreen";
import { Ionicons } from "@expo/vector-icons";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? "#fff" : Colors.accent,
};

const ProductsStackNavigator = createStackNavigator();

export const ProductsNavigator = () => {
  return (
    <ProductsStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <ProductsStackNavigator.Screen
        name="ProductsOverview"
        component={ProductsOverviewScreen}
        options={productsOverviewScreenOptions}
      />
      <ProductsStackNavigator.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={productDetailScreenOptions}
      />
      <ProductsStackNavigator.Screen
        name="Cart"
        component={CartScreen}
        options={cartScreenOptions}
      />
    </ProductsStackNavigator.Navigator>
  );
};

const OrdersStackNavigator = createStackNavigator();

export const OrdersNavigator = () => {
  return (
    <OrdersStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <OrdersStackNavigator.Screen
        name="Orders"
        component={OrdersScreen}
        options={ordersScreenOptions}
      />
    </OrdersStackNavigator.Navigator>
  );
};

const ShopDrawerNavigator = createDrawerNavigator();

const ShopNavigator = () => {
  return (
    <ShopDrawerNavigator.Navigator
      drawerContentOptions={{
        activeTintColor: Colors.primary,
      }}
    >
      <ShopDrawerNavigator.Screen
        name="Products"
        component={ProductsNavigator}
      />
      <ShopDrawerNavigator.Screen
        name="Orders"
        component={OrdersNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-list" : "ios-list"}
              size={25}
              // color={props.color}
            />
          ),
        }}
      />
    </ShopDrawerNavigator.Navigator>
  );
};

// const ProductsNavigator = createStackNavigator(
//   {
//     ProductsOverview: ProductsOverviewScreen,
//     ProductDetail: ProductDetailScreen,
//     Cart: CartScreen,
//   },

//   {
//     defaultNavigationOptions: defaultNavOptions,
//   }
// );
// const OrdersNavigator = createStackNavigator(
//   {
//     Orders: OrdersScreen,
//   },
//   {
//     navigationOptions: {
//       drawerIcon: (drawerConfig) => (
//         <Ionicons
//           name={Platform.OS === "android" ? "md-list" : "ios-list"}
//           size={25}
//           // color={drawerConfig.tintColor}
//         />
//       ),
//     },
//   },
//   {
//     defaultNavigationOptions: defaultNavOptions,
//   }
// );

// const ShopNavigator = createDrawerNavigator(
//   {
//     Products: ProductsNavigator,
//     Orders: OrdersNavigator,
//   },
//   {
//     contentOptions: {
//       activeTintColor: Colors.primary,
//     },
//   }
// );

export default ShopNavigator;
