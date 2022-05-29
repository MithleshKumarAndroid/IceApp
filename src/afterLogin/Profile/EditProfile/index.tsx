import React, { useState, useRef, useEffect } from "react";
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableOpacity,
  Text,
  Keyboard,
  Alert,
} from "react-native";
import Header from "../../../Component/Header";
import ProgressBar from "../../../utily/ProgressBar";
import { scale } from "react-native-size-matters";
import ImageDialog from "../../../Dialog/ImageDialog";
import FastImage from "react-native-fast-image";
import { profileIcon } from "../../../image";
import Label from "../../../Component/Label";
import EditText from "../../../Component/EditText";
import Button from "../../../Component/Button";
import { useRoute } from "@react-navigation/native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { updateProfile } from "../../../redux/reducer/ProfileSlice";
import { useDispatch, useSelector } from "react-redux";
import * as Storage from "../../../utily/Storage";
import { RootState } from "../../../redux/Store";


const EditProfile = () => {
  const dispatch = useDispatch<any>();
  const {loader, user} = useSelector((state: RootState) => state.Profile);
  const route = useRoute<any>();
  const [email, setEmail] = useState<string | undefined>("");
  const [phone, setPhone] = useState<string | undefined>("");
  const [password, setPassword] = useState<string | undefined>("");
  const [Conpassword, setConPassword] = useState<string | undefined>("");
  const [address, setAddress] = useState<string | undefined>("");
  const [showImageOption, setImageImageOption] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [profile, setProfileImage] = useState<any>("");
  const [photoName, setPhotoName] = useState<string>("");

  const firstRef = useRef<any>();
  const lastRef = useRef<any>();
  const emailRef = useRef<any>();
  const phoneRef = useRef<any>();
  const addressRef = useRef<any>();

  useEffect(() => {
    let mUser = route.params?.USER;
    setFirstName(mUser.firstname);
    setLastName(mUser.lastname);
    setEmail(mUser.email);
    setPhone(mUser.phone);
    setAddress(mUser.address);
  }, []);

  const openGallery = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        mediaType: "images",
      },
    };
    launchImageLibrary({mediaType: "photo"}, (res :any) => {
      console.log("Response = ", res);
      if (res.didCancel) {
        console.log("User cancelled image picker");
      } else if (res.errorCode) {
        console.log("ImagePicker Error: ", res.errorCode);
      } else if (res.errorMessage) {
        console.log("ImagePicker errorMessage: ", res.errorMessage);
      } else {
        setProfileImage(res?.assets[0].uri);
        setPhotoName(res?.assets[0].fileName);
        setImageImageOption(false);
      }
    });
  };

  const openCamera = () => {
    launchCamera({ mediaType: "photo", saveToPhotos: false }, (res) => {
      console.log("Response--launchCamera---= ", res);
      if (res.didCancel) {
        console.log("User cancelled image picker");
      } else if (res.errorCode) {
        console.log("ImagePicker Error: ", res.errorCode);
      } else if (res.errorMessage) {
        console.log("ImagePicker errorMessage: ", res.errorMessage);
      } else {
        setProfileImage(res?.assets);
        setImageImageOption(false);
      }
    });
  };

  const submit = () => {
    if (
      !email?.trim() &&
      !phone?.trim() &&
      !password?.trim() &&
      !Conpassword?.trim() &&
      !address?.trim() &&
      !firstName.trim() &&
      !lastName.trim() &&
      !address
    ) {
      Alert.alert("Warning", "All fields are required");
    } else if (!firstName) {
      Alert.alert("Warning", "Please enter first name");
    } else if (!lastName) {
      Alert.alert("Warning", "Please enter last name");
    } else if (!phone?.trim()) {
      Alert.alert("Warning", "Please enter phone number");
    } else if (phone?.trim().length < 10) {
      Alert.alert("Warning", "Please enter valid phone number");
    } else if (!address) {
      Alert.alert("Warning", "Please enter address");
    } else {
      Storage.getData("UserId").then((value) => {
        var formData = new FormData();
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("address", address);
        formData.append("firstname", firstName.trim());
        formData.append("lastname", lastName.trim());
        // formData.append("profile_pic", {
        //   name: photoName,
        //   type: "image/jpg",
        //   uri: Platform.OS === "ios" ? profile.replace("file://", "") : profile,
        // });
        let pars={
          email : email,
          phone: phone,
          address: address,
          firstname: firstName.trim(),
          lastname: lastName.trim(),
        }
        dispatch(updateProfile(pars))
      });
    }
  };

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Header Label={"Update Profile"} />
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
              source={profile ? { uri: profile } : profileIcon}
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
              ChangeText={(txt) => setFirstName(txt)}
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
              ChangeText={(txt) => setLastName(txt)}
            />
            <Label Style={{ marginTop: scale(10) }} Title={"Email"} />
            <EditText
              EditTextStyle={{ color: "grey" }}
              // Editable={false}
              Ref={emailRef}
              Value={email}
              Style={{ marginTop: scale(10) }}
              Placeholder={"Please enter a email"}
              ReturnKeyType={"next"}
              KeyboardType={"default"}
              ChangeText={(txt) => setEmail(txt.trim())}
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

export default EditProfile;
