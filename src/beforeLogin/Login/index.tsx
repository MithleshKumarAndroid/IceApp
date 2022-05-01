import React, { useState, useRef } from "react";
import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  StyleSheet,
  Alert,
  Image,
  TextInput,
} from "react-native";
import { loginBack, googleIcon, facebookIcon, appleIcon } from "../../image";
import FastImage from "react-native-fast-image";
import { scale } from "react-native-size-matters";
import EditText from "../../Component/EditText";
import Button from "../../Component/Button";
import { validateEmail } from "../../utily/validation";
import { useNavigation } from "@react-navigation/native";
import Label from "../../Component/Label";
import * as Storage from "../../utily/Storage";

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
GoogleSignin.configure();

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string | undefined>("");
  const [password, setPassword] = useState<string | undefined>("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const submit = () => {
    if (!email && !password) {
      Alert.alert("Warning", "Both fileds are required");
    } else if (!email) {
      Alert.alert("Warning", "Please enter Email");
    } else if (!password) {
      Alert.alert("Warning", "Please enter Password");
    } else if (!validateEmail(email)) {
      Alert.alert("Warning", "Please enter valid email");
    } else {
      console.log("----submith----->");
      Storage.storeData("UserId", "1");
      Storage.getData("UserId").then((value) => {
        console.log("-----UserId--->", value);
        if (value != null && value != "" && value != undefined) {
          // navigation.navigate("HomePage");
          navigation.reset({
            index: 0,
            routes: [{ name: "HomePage" }],
          });
        }
      });
    }
  };

  // Somewhere in your code
  const callGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      // const logout = await GoogleSignin.signOut();
      const userInfo = await GoogleSignin.signIn();
      // console.log("-----userInfo---->", userInfo);
      // {"idToken": null, "scopes": ["https://www.googleapis.com/auth/userinfo.profile",
      //  "https://www.googleapis.com/auth/userinfo.email"], "serverAuthCode": null, "user":
      // {"email": "mithleshkumarmca@gmail.com", "familyName": "kumar", "givenName": "Mithlesh",
      // "id": "116699210075386598321", "name": "Mithlesh kumar", "photo": null}}

      // this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  return (
    <View style={{ width: "100%", height: "100%" }}>
      {/* <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flexGrow: 1 }}
      >
        <ScrollView contentContainerStyle={{ paddingBottom: scale(80) }}> */}
      <FastImage
        style={{ width: "100%", height: scale(230) }}
        source={loginBack}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View
        style={{
          width: "80%",
          marginTop: scale(20),
          marginHorizontal: "10%",
        }}
      >
        <EditText
          Placeholder={"Please enter email id"}
          ChangeText={(txt) => setEmail(txt.trim())}
          ReturnKeyType={"next"}
          Ref={emailRef}
          SubmitEditing={() => passwordRef.current?.focus()}
        />
        <EditText
          Ref={passwordRef}
          Style={{ marginTop: scale(10) }}
          Placeholder={"Please enter password"}
          ChangeText={(txt) => setPassword(txt.trim())}
          ReturnKeyType={"done"}
          SubmitEditing={() => Keyboard.dismiss()}
        />
        <TouchableOpacity
          style={styles.forgot_Con}
          onPress={() => navigation.navigate("Forgot")}
        >
          <Label Style={styles.forgot_Label} Title={"Forgot Password?"} />
        </TouchableOpacity>
        <Button
          PressOn={() => submit()}
          Style={{ marginVertical: scale(20) }}
          Label={"Login"}
        />
        <View style={styles.signup_Con}>
          <View style={styles.signup_F} />
          <Label Style={styles.signup_Label} Title={"Or Sign up with"} />
          <View style={styles.signup_F} />
        </View>

        <View style={styles.bottom_Con}>
          <TouchableOpacity
            style={styles.google_Con}
            onPress={() => callGoogleSignIn()}
          >
            <Image style={styles.google_Icon} source={googleIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.facebook_Con}>
            <Image style={styles.facebook_Icon} source={facebookIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.apple_Con}>
            <Image style={styles.apple_Icon} source={appleIcon} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.notReg_Con}
          onPress={() => navigation.navigate("Signup")}
        >
          <Label Style={styles.not_Reg_Label} Title={" Not register yet ?"} />
          <Label Style={styles.create_Label} Title={"Create account"} />
        </TouchableOpacity>
      </View>
      {/* </ScrollView>
      </KeyboardAvoidingView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  signup_Con: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signup_F: {
    width: "33%",
    height: scale(1),
    backgroundColor: "grey",
    marginTop: scale(1),
  },
  signup_Label: {
    fontSize: scale(10),
    color: "grey",
    marginHorizontal: scale(2),
  },
  forgot_Con: {
    alignSelf: "flex-end",
    marginTop: scale(6),
  },
  forgot_Label: {
    fontSize: scale(10),
    padding: scale(1),
  },
  bottom_Con: {
    width: "100%",
    height: scale(50),
    flexDirection: "row",
    marginVertical: scale(25),
    justifyContent: "center",
  },
  google_Con: {
    width: scale(60),
    height: scale(40),
    backgroundColor: "#FFF",
    borderRadius: scale(5),
    justifyContent: "center",
    alignItems: "center",
  },
  google_Icon: {
    width: scale(20),
    height: scale(20),
    resizeMode: "contain",
  },
  facebook_Con: {
    width: scale(60),
    height: scale(40),
    backgroundColor: "#FFF",
    borderRadius: scale(5),
    marginHorizontal: scale(20),
    justifyContent: "center",
    alignItems: "center",
  },
  facebook_Icon: {
    width: scale(23),
    height: scale(23),
    resizeMode: "contain",
  },
  apple_Con: {
    width: scale(60),
    height: scale(40),
    backgroundColor: "#FFF",
    borderRadius: scale(5),
    justifyContent: "center",
    alignItems: "center",
  },
  apple_Icon: {
    width: scale(23),
    height: scale(23),
    resizeMode: "contain",
  },
  notReg_Con: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  not_Reg_Label: {
    color: "grey",
    fontSize: scale(10),
  },
  create_Label: {
    color: "#000",
    fontSize: scale(10),
    marginLeft: scale(3),
    fontWeight: "bold",
  },
});

export default Login;
