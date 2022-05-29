import React from "react";
import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
  },
  subMain: {
    width: "86%",
    marginHorizontal: "7%",
    height: "100%",
  },
  product_Name_Label: {
    color: "#10A8B2",
    fontSize: scale(16),
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: scale(30),
  },
  price_Label:{
    alignSelf: "center",
    marginTop: scale(10),
    color: "#FA4A0C",
    fontSize: scale(14),
  },
  deliveryInfo_Label:{
    color: "#000", fontSize: scale(14), marginTop: scale(10)
  },
  delivery_Description:{
    fontSize: scale(12), color: "grey", marginTop: scale(5)
  },
  addTocart_Container:{
    width: "70%",
    marginHorizontal: "15%",
    height: scale(45),
    borderRadius: scale(20),
    marginTop: scale(30),
  }
});

export default styles;
