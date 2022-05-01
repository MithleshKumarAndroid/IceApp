import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { scale } from "react-native-size-matters";
import Swiper from "react-native-swiper";
import { bannerIcon, loginBack } from "../../image";

const bannerArray = [1, 2, 3, 4, 5];
const BannerLayout = () => {
  return (
    <View style={styles.slider_Con}>
      <Swiper
        style={styles.wrapper}
        loop={false}
        showsButtons={false}
        autoplay={true}
      >
        {bannerArray.map((item, index) => (
          <View style={styles.slide1} key={index}>
            <Image
              style={{ width: "100%", height: "100%", resizeMode: "cover" }}
              source={index % 2 == 0 ? bannerIcon : loginBack}
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
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
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
});
export default BannerLayout;
