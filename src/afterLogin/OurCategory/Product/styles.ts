import React from "react";
import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  main: {
    width: scale(130),
    height: scale(160),
    marginRight:scale(10)
  },
  first_Child: {
    width: scale(130),
    height: scale(150),
    marginTop: scale(40),
    backgroundColor: "#10A8B2",
    borderRadius: scale(20),
    paddingHorizontal: scale(15),
    paddingVertical: scale(10),
    flexDirection: "column",
    justifyContent: "space-between",
  },
  star_Con: {
    flexDirection: "row",
    alignItems: "center",
    width: scale(50),
  },
  star: {
    width: scale(13),
    height: scale(13),
    resizeMode: "contain",
  },
  rating_Label: {
    color: "#000",
    fontSize: scale(10),
    marginLeft: scale(5),
  },
  name_Lable: {
    fontSize: scale(12),
    color: "#FFF",
    fontWeight: "bold",
  },
  price_Label: {
    fontSize: scale(12),
    color: "#FFF",
    fontWeight: "bold",
  },
  product_Icon: {
    width: scale(70),
    height: scale(160),
    position: "absolute",
    top: 0,
    right: 5,
    resizeMode: "contain",
  },
  name_Price_Con: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: scale(7),
  },
});

export default styles;
