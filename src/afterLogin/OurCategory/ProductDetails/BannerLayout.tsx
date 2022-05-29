import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { scale } from "react-native-size-matters";
import Swiper from "react-native-swiper";
import { Image_Base_Url_Product } from "../../../Service/Api";

export interface Props {
  List?: [];
}
const BannerLayout = (props: Props) => {
  const { List } = props;
  return (
    <View style={styles.slider_Con}>
      <Swiper
        style={styles.wrapper}
        loop={true}
        showsButtons={false}
        autoplay={true}
      >
        {List?.map((item: any, index) => (
          <View style={styles.slide1} key={index}>
            <Image
              style={styles.image_Con}
              source={{ uri: Image_Base_Url_Product + item }}
            />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slider_Con: {
    width: "100%",
    height: scale(230),
    marginTop: scale(10),
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight:scale(10)
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  header_Con: {
    width: "100%",
    position: "absolute",
    top: 0,
    zIndex: 9999,
  },
  image_Con: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: scale(20),
  },
});
export default BannerLayout;
