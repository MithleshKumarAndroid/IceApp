import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { scale } from "react-native-size-matters";
import { starIcon, glassIcon } from "../../image";

const mArray = [1, 2, 3, 4, 5, 6, 7];

export interface props {
  List: [] | undefined;
}

const PopularLayout = (Props: props) => {
  const { List } = Props;
  return (
    <>
      <ScrollView
        nestedScrollEnabled={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {List?.map((item: any, index: number) => (
          <View style={styles.main} key={index}>
            <View style={styles.first_Child}>
              <View style={styles.star_Con}>
                <Image style={styles.star} source={starIcon} />
                <Text style={styles.rating_Label}>4.8</Text>
              </View>
              <View>
                <Text style={styles.name_Lable}>{item?.name}</Text>
                <Text style={styles.price_Label}>
                  ${" " + item.price / 100}
                </Text>
              </View>
            </View>
            {/* <Image style={styles.product_Icon} source={glassIcon} /> */}
          </View>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    width: scale(150),
    height: scale(140),
    marginRight: scale(10),
  },
  first_Child: {
    width: "100%",
    height: scale(80),
    marginTop: scale(60),
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
    fontSize: scale(10),
    color: "#FFF",
    fontWeight: "bold",
  },
  price_Label: {
    fontSize: scale(10),
    color: "#FFF",
    fontWeight: "bold",
  },
  product_Icon: {
    width: scale(70),
    height: scale(100),
    position: "absolute",
    top: 10,
    right: 0,
    resizeMode: "contain",
  },
});

export default PopularLayout;
