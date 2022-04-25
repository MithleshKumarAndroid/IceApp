import React, { useState } from "react";
import {
  View,
  Text,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
} from "react-native";
import { scale } from "react-native-size-matters";
import FastImage from "react-native-fast-image";
import { loginBack } from "../../image/index";
import Header from "../../Component/Header";
import Label from "../../Component/Label";
import EditText from "../../Component/EditText";
import Button from "../../Component/Button";
import { validateEmail } from "../../utily/validation";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string | undefined>("");

  const submit = () => {
    if (!email) {
      Alert.alert("Warning", "Please enter email");
    } else if (!validateEmail(email)) {
      Alert.alert("Warning", "Please enter valid email");
    }
  };

  return (
    <KeyboardAvoidingView style={{ width: "100%", height: "100%" }}>
      <ScrollView contentContainerStyle={{ paddingBottom: scale(280) }}>
        <FastImage
          style={{ width: "100%", height: scale(250) }}
          source={loginBack}
          resizeMode={FastImage.resizeMode.cover}
        >
          <Header Label={"Forgot Password"} />
        </FastImage>
        <View
          style={{
            width: "90%",
            marginHorizontal: "5%",
            marginTop: scale(20),
          }}
        >
          <Label Title={"Email"} />
          <EditText
            Style={{ marginTop: scale(10) }}
            Placeholder={"Please enter email"}
            ChangeText={(txt) => setEmail(txt)}
            ReturnKeyType={"done"}
            SubmitEditing={() => Keyboard.dismiss()}
          />
          <Button
            Style={{
              width: scale(200),
              alignSelf: "center",
              marginVertical: scale(20),
              marginBottom: scale(100),
            }}
            Label={"Submit"}
            PressOn={() => submit()}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ForgotPassword;