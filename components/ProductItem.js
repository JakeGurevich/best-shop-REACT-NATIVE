import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import Colors from "../constants/Colors";

const ProductItem = ({ image, title, price, ...props }) => {
  return (
    <TouchableOpacity onPress={props.onViewDetails}>
      <View style={styles.product}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.details}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>${price.toFixed(2)}</Text>
        </View>

        <View style={styles.actions}>
          <Button
            color={Colors.primary}
            title="View Details"
            onPress={props.onViewDetails}
          ></Button>
          <Button
            color={Colors.primary}
            title="To Cart"
            onPress={props.onAddtoCart}
          ></Button>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { with: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
  },
  image: { width: "100%", height: "60%" },
  title: { fontSize: 18, marginVertical: 5 },
  price: {
    fontSize: 14,
    color: "#888",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    height: "25%",
  },
  details: {
    alignItems: "center",
    height: "15%",
  },
});
export default ProductItem;
