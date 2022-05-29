import React from "react";
import {
  Modal,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { scale } from "react-native-size-matters";
import Label from "../Component/Label";

export interface Props {
  Visible?: boolean;
  CloseDialg?(): void;
  ClickCamera?(): void;
  ClickGallery?(): void;
  ClickClose?(): void;
}

const ImageDialog = (props: Props) => {
  const { Visible, CloseDialg, ClickCamera, ClickGallery, ClickClose } = props;

  return (
    <Modal visible={Visible} transparent={true} animationType={"slide"}>
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(52, 52, 52, 0.5)",
        }}
      >
        <TouchableOpacity
          style={{ width: "100%", height: "100%" }}
          onPress={CloseDialg}
        >
          <View
            style={{
              position: "absolute",
              bottom: 0,
              backgroundColor: "#FFF",
              width: "100%",
            }}
          >
            <TouchableOpacity
              onPress={ClickCamera}
              style={{
                width: "96%",
                marginHorizontal: "2%",
                height: scale(55),
                borderBottomColor: "grey",
                borderBottomWidth: scale(1),
                justifyContent: "center",
              }}
            >
              <Label Title={"Pick image from Camera"} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={ClickGallery}
              style={{
                width: "96%",
                marginHorizontal: "2%",
                height: scale(55),
                borderBottomColor: "grey",
                borderBottomWidth: scale(1),
                justifyContent: "center",
              }}
            >
              <Label Title={"Pick image from Gallery"} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={ClickClose}
              style={{
                width: "96%",
                marginHorizontal: "2%",
                height: scale(55),
                borderBottomColor: "grey",
                borderBottomWidth: scale(1),
                justifyContent: "center",
              }}
            >
              <Label Title={"Close the Option"} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ImageDialog;
