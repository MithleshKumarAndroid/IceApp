import React from "react";
import { View } from "react-native";
import { scale } from "react-native-size-matters";
import Header from "../../Component/Header";
import Label from "../../Component/Label";

const Offer = () => {
  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "#FFF" }}>
      <Header Label={"MyOffer"} />

      <View
        style={{
          width: "90%",
          height: "100%",
          marginHorizontal: "5%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Label
          Style={{ fontSize: scale(18), color: "#000" }}
          Title={"ohh snap!  No offers yet"}
        />
        <Label
          Style={{ fontSize: scale(12), color: "grey" }}
          Title={"Bella dose’t have any offers"}
        />
        <Label
          Style={{ fontSize: scale(12), color: "grey" }}
          Title={"yet please check again."}
        />
      </View>
    </View>
  );
};

export default Offer;
