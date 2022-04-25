import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { menuIcon, searchIcon, cartIcon } from "../image";
// import {} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

const MenuHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <TouchableOpacity
        style={styles.menu_Con}
        onPress={() => navigation.openDrawer()}
      >
        <Image style={styles.menu_Img} source={menuIcon} />
      </TouchableOpacity>
      <View style={styles.scond_Child}>
        <TouchableOpacity style={styles.search_Con}>
          <Image style={styles.search_Img} source={searchIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cart_Con}>
          <Image style={styles.cart_Img} source={cartIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: scale(40),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  menu_Con: {
    width: "15%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  menu_Img: {
    width: scale(20),
    height: scale(20),
    resizeMode: "contain",
  },
  scond_Child: {
    width: "26%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: scale(5),
  },
  search_Con: {
    width: scale(30),
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  search_Img: {
    width: scale(15),
    height: scale(15),
    resizeMode: "contain",
  },
  cart_Con: {
    width: scale(30),
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  cart_Img: {
    width: scale(15),
    height: scale(15),
    resizeMode: "contain",
  },
});

export default MenuHeader;
