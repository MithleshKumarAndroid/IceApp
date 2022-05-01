import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import { scale } from "react-native-size-matters";
import { starIcon, catGlassIcon } from "../../image";
import Label from "../../Component/Label";
import PopularLayout from "./PopularLayout";

const mArray = [1, 2, 3, 4, 5, 6, 7];

const Category = () => {
  return (
    <View
      style={{
        width: "96%",
        marginHorizontal: "2%",
        height: "100%",
        backgroundColor: "#FFF",
      }}
    >
      <View style={{ width: "100%", height: scale(220) }}>
        <ScrollView
          nestedScrollEnabled={true}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {mArray.map((item, index) => (
            <View style={styles.main} key={index}>
              <View style={[styles.first_Child]}>
                <View style={styles.star_Con}>
                  <Image style={styles.star} source={starIcon} />
                  <Text style={styles.rating_Label}>4.8</Text>
                </View>
                <View style={styles.name_Price_Con}>
                  <Text style={styles.name_Lable}>Green Ice Tea</Text>
                  <Text style={styles.price_Label}>$10</Text>
                </View>
              </View>
              <Image style={styles.product_Icon} source={catGlassIcon} />
            </View>
          ))}
        </ScrollView>
      </View>
      <Label
        Style={{ fontSize: scale(13), fontWeight: "bold", color: "#10A8B2" }}
        Title={"Most Popular"}
      />
      <PopularLayout />
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    width: scale(130),
    height: scale(160),
  },
  first_Child: {
    width: scale(120),
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
    right: 10,
    resizeMode: "contain",
  },
  name_Price_Con: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: scale(7),
  },
});
export default Category;
