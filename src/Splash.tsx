import React from "react";
import { View, Text, Image } from "react-native";
import { splash } from "./image";
import FastImage from "react-native-fast-image";

const Splash = () => {
  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "red" }}>
      <FastImage
        style={{ width: "100%", height: "100%" }}
        source={splash}
        resizeMode={"cover"}
      />
    </View>
  );
};

export default Splash;
