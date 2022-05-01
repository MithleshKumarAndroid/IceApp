import React from "react";
import { View } from "react-native";
import { scale } from "react-native-size-matters";
import Label from "../../Component/Label";
import AntDesign from "react-native-vector-icons/AntDesign";
import EditText from "../../Component/EditText";

const Search = () => {
  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "#FFF" }}>
      <Label
        Style={{
          alignSelf: "center",
          color: "#10A8B2",
          fontSize: scale(14),
          fontWeight: "bold",
          marginVertical: scale(10),
        }}
        Title={"Search"}
      />
      <View
        style={{
          width: "90%",
          marginHorizontal: "5%",
          height: scale(40),
          borderRadius: scale(10),
          borderColor: "grey",
          borderWidth: scale(0.5),
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: "15%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name={"search1"} color={"grey"} size={scale(20)} />
        </View>

        <View style={{ width: "85%", height: "100%" }}>
          <EditText
            Placeholder={"Search product here...."}
            Style={{ borderWidth: 0 }}
          />
        </View>
      </View>
    </View>
  );
};

export default Search;
