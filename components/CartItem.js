import React from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CartItem = ({ item, ...props }) => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>QTY: {item.quantity}</Text>
        <Text style={styles.title}>{item.productTitle}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.amount}>${item.sum.toFixed(2)}</Text>
        <TouchableOpacity onPress={props.onRemove} style={styles.deleteButton}>
          <Ionicons
            name={Platform.OS === "android" ? "md-trash" : "ios-trash"}
            size={24}
            color="red"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  itemData: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    fontSize: 18,
    color: "#888",
  },
  title: {
    marginLeft: 10,
    fontSize: 18,
  },
  amount: {
    fontSize: 18,
  },
  deleteButton: {
    marginLeft: 20,
  },
});
export default CartItem;
