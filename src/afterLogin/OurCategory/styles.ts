import React from "react";
import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    paddingTop: 20,
  },
  sub_Main: {
    width: "90%",
    marginHorizontal: "5%",
    height: "100%",
  },
  title_Label: {
    fontSize: scale(20),
    fontWeight: "bold",
    color: "#10A8B2",
    margin: scale(15),
  },
  scroll_Container: {
    width: "100%",
    height: scale(30),
  },
  category_Container: {
    borderBottomColor: "#FA4A0C",
    borderBottomWidth: scale(1),
  },
  category_Margin: {
    marginRight: scale(20),
  },
  category_Label: {
    fontSize: scale(12),
    color: "#000",
  },
  label_Color: {
    color: "#FA4A0C",
  },
});

export default styles;
