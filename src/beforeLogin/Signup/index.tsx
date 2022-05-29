import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Keyboard,
  Alert,
} from "react-native";
import { scale } from "react-native-size-matters";
import Header from "../../Component/Header";
import FastImage from "react-native-fast-image";
import { profileIcon } from "../../image";
import Label from "../../Component/Label";
import EditText from "../../Component/EditText";
import Button from "../../Component/Button";
import { validateEmail } from "../../utily/validation";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import ImageDialog from "../../Dialog/ImageDialog";
import { UserRegister } from "../../redux/reducer/RegisterSlice";
import { useSelector, useDispatch } from "react-redux";
import ProgressBar from "../../utily/ProgressBar";

const Signup = (navigation: any) => {
  const [email, setEmail] = useState<string | undefined>("");
  const [phone, setPhone] = useState<string | undefined>("");
  const [password, setPassword] = useState<string | undefined>("");
  const [Conpassword, setConPassword] = useState<string | undefined>("");
  const [address, setAddress] = useState<string | undefined>("");
  const [showImageOption, setImageImageOption] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  var loader = useSelector((state) => state.UserRegister.loader);

  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log("------loader---->", loader);
  }, []);

  const firstRef = useRef();
  const lastRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const conPasswordRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();

  const submit = () => {
    if (
      !email?.trim() &&
      !phone?.trim() &&
      !password?.trim() &&
      !Conpassword?.trim() &&
      !address?.trim() &&
      !firstName.trim() &&
      !lastName.trim()
    ) {
      Alert.alert("Warning", "All fields are required");
    } else if (!firstName) {
      Alert.alert("Warning", "Please enter first name");
    } else if (!lastName) {
      Alert.alert("Warning", "Please enter last name");
    } else if (!email) {
      Alert.alert("Warning", "Please enter email");
    } else if (!validateEmail(email)) {
      Alert.alert("Warning", "Please enter valid email");
    } else if (!password) {
      Alert.alert("Warning", "Please enter password");
    } else if (!Conpassword) {
      Alert.alert("Warning", "Please enter confirm password");
    } else if (password.trim().length < 5) {
      Alert.alert("Warning", "Password should be minimum 6 charcter");
    } else if (password.trim() != Conpassword.trim()) {
      Alert.alert("Warning", "Password and confirm password did not match");
    } else if (!phone?.trim()) {
      Alert.alert("Warning", "Please enter phone number");
    } else if (phone?.trim().length < 10) {
      Alert.alert("Warning", "Please enter valid phone number");
    } else {
      console.log("-------submit---->");
      let pars = {
        email: email,
        password: password,
        phone: phone,
        address: address,
        firstname: firstName,
        lastname: lastName,
      };
      dispatch(UserRegister(pars));
    }
  };

  const openCamera = () => {
    Alert.alert("7");
  };

  const openGallery = () => {
    Alert.alert("7");
  };

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Header Label={"Sign Up"} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ProgressBar loader={loader} />
        <ScrollView contentContainerStyle={{ paddingBottom: scale(80) }}>
          <View
            style={{ width: "90%", height: "100%", marginHorizontal: "5%" }}
          >
            <ImageDialog
              CloseDialg={() => setImageImageOption(false)}
              Visible={showImageOption}
              ClickCamera={() => openCamera()}
              ClickGallery={() => openGallery()}
              ClickClose={() => setImageImageOption(false)}
            />
            <FastImage
              style={{
                width: scale(120),
                height: scale(120),
                borderRadius: scale(60),
                alignSelf: "center",
                marginTop: scale(20),
              }}
              source={profileIcon}
              resizeMode={FastImage.resizeMode.cover}
            />
            {/* <TouchableOpacity
              onPress={() => setImageImageOption(!showImageOption)}
              style={{ alignSelf: "center", marginTop: scale(10) }}
            >
              <Text style={{ fontSize: scale(12) }}>Change Picture</Text>
            </TouchableOpacity> */}
            <Label Title={"First Name"} />
            <EditText
              Value={firstName}
              Style={{ marginTop: scale(10) }}
              Placeholder={"Please enter a first name"}
              SubmitEditing={() => lastRef.current?.focus()}
              ReturnKeyType={"next"}
              KeyboardType={"default"}
              ChangeText={(txt) => setFirstName(txt.trim())}
            />
            <Label Style={{ marginTop: scale(10) }} Title={"Last Name"} />
            <EditText
              Ref={lastRef}
              Value={lastName}
              Style={{ marginTop: scale(10) }}
              Placeholder={"Please enter a last name"}
              SubmitEditing={() => emailRef.current?.focus()}
              ReturnKeyType={"next"}
              KeyboardType={"default"}
              ChangeText={(txt) => setLastName(txt.trim())}
            />
            <Label Style={{ marginTop: scale(10) }} Title={"Email"} />
            <EditText
              Ref={emailRef}
              Value={email}
              Style={{ marginTop: scale(10) }}
              Placeholder={"Please enter a email"}
              SubmitEditing={() => passwordRef.current?.focus()}
              ReturnKeyType={"next"}
              KeyboardType={"default"}
              ChangeText={(txt) => setEmail(txt.trim())}
            />

            <Label Style={{ marginTop: scale(10) }} Title={"Password"} />
            <EditText
              Value={password}
              Ref={passwordRef}
              SubmitEditing={() => conPasswordRef.current?.focus()}
              Style={{ marginTop: scale(10) }}
              Placeholder={"Please enter a password"}
              KeyboardType={"default"}
              ChangeText={(txt) => setPassword(txt)}
              ReturnKeyType={"next"}
            />
            <Label
              Style={{ marginTop: scale(10) }}
              Title={"Confirm Password"}
            />
            <EditText
              Value={Conpassword}
              Ref={conPasswordRef}
              ReturnKeyType={"next"}
              SubmitEditing={() => phoneRef.current?.focus()}
              Style={{ marginTop: scale(10) }}
              Placeholder={"Please enter a confirm password"}
              KeyboardType={"default"}
              ChangeText={(txt) => setConPassword(txt)}
            />
            <Label Style={{ marginTop: scale(10) }} Title={"Phone Number"} />
            <EditText
              Value={phone}
              Ref={phoneRef}
              SubmitEditing={() => addressRef.current?.focus()}
              Style={{ marginTop: scale(10) }}
              Placeholder={"Please enter a phone number"}
              KeyboardType={"number-pad"}
              ReturnKeyType={"next"}
              ChangeText={(txt) => setPhone(txt.trim())}
              MaxLength={10}
            />
            <Label Style={{ marginTop: scale(10) }} Title={"Address"} />
            <EditText
              Value={address}
              Ref={addressRef}
              Style={{ marginTop: scale(10) }}
              Placeholder={"Please enter a address"}
              ReturnKeyType={"done"}
              SubmitEditing={() => Keyboard.dismiss()}
              KeyboardType={"default"}
              ChangeText={(txt) => setAddress(txt)}
            />
            <Button
              PressOn={() => submit()}
              Style={{
                marginVertical: scale(20),
                width: "80%",
                marginHorizontal: "10%",
              }}
              Label={"Submit"}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Signup;
