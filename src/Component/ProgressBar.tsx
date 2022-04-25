import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { scale } from "react-native-size-matters";

interface Props {
  showLoader?: boolean;
}

const ProgressBar = (props: Props) => {
  const { showLoader } = props;
  return (
    <>
      {showLoader && (
        <ActivityIndicator
          size="large"
          color={"#10A8B2"}
          style={{ position: "absolute", top: "45%", marginLeft: "38%" }}
        />
      )}
    </>
  );
};

export default ProgressBar;
