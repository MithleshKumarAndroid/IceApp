import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { scale } from "react-native-size-matters";

export interface Props {
  Label?: string;
  Style?: ViewStyle;
  PressOn?(): void;
}

const Button = (props: Props) => {
  const { Label, Style, PressOn } = props;
  return (
    <TouchableOpacity style={[styles.main, { ...Style }]} onPress={PressOn}>
      <Text style={{ color: "#FFF", fontSize: scale(13) }}>{Label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: 45,
    borderRadius: scale(5),
    backgroundColor: "#02A4AE",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Button;
