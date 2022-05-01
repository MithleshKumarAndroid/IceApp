import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { scale } from "react-native-size-matters";
import { starIcon, glassIcon } from "../../image";

const mArray = [
  "Pure Milk",
  "Milk Tea",
  "Milk Pista",
  "Cream",
  "Milk Tea",
  "Milk Special",
];

const BrowserMenu = () => {
  return (
    <>
      <Text style={styles.manu_Label}>Browser Our Menu</Text>
      <ScrollView
        nestedScrollEnabled={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {mArray.map((item, index) => (
          <View key={index} style={styles.list_Main}>
            <View style={styles.dummy} />
            <View style={styles.product_Con}>
              <Image style={styles.product_Icon} source={glassIcon} />
              <Text style={styles.name_Label}>{item}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  manu_Label: {
    color: "#000",
    fontSize: scale(12),
    marginVertical: scale(20),
  },
  list_Main: {
    width: scale(80),
    height: scale(90),
    borderRadius: scale(20),
    marginRight: scale(10),
  },
  dummy: {
    width: scale(74),
    marginHorizontal: scale(3),
    height: scale(70),
    backgroundColor: "#10A8B2",
    borderRadius: scale(20),
    marginTop: scale(20),
  },
  product_Con: {
    width: "100%",
    height: scale(70),
    position: "absolute",
    top: 5,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  product_Icon: {
    width: scale(70),
    height: scale(70),
    resizeMode: "contain",
  },
  name_Label: {
    color: "#FFF",
    fontSize: scale(10),
    fontWeight: "bold",
    marginTop: scale(3),
  },
});

export default BrowserMenu;
