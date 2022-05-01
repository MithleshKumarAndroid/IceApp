import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import Entypo from "react-native-vector-icons/Entypo";

import { useNavigation } from "@react-navigation/native";

export interface Porps {
  Label?: string;
}

const Header = (props: Porps) => {
  const { Label } = props;
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <TouchableOpacity
        style={styles.bac_Con}
        onPress={() => navigation.goBack()}
      >
        <Entypo name={"chevron-thin-left"} size={scale(20)} color={"#000"} />
      </TouchableOpacity>
      <View style={styles.label_Con}>
        <Text style={{ fontSize: scale(13), color: "#000" }}>{Label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: scale(47),
    flexDirection: "row",
    borderBottomColor: "grey",
    borderBottomWidth: scale(0.5),
  },
  bac_Con: {
    width: "15%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  label_Con: {
    width: "70%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "15%",
  },
});

export default Header;
