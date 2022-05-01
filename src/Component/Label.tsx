import React from "react";
import { View, Text, TextStyle } from "react-native";
import { scale } from "react-native-size-matters";

export interface Porps {
  Title?: string;
  Style?: TextStyle;
}

const Label = (props: Porps) => {
  const { Title, Style } = props;
  return <Text style={[{ fontSize: scale(13) }, { ...Style }]}>{Title}</Text>;
};

export default Label;
