import React , {useEffect} from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { scale } from "react-native-size-matters";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import Header from "../../Component/Header";
import Label from "../../Component/Label";
import { profileIcon } from "../../image";
import {useSelector, useDispatch} from "react-redux";
import {getProfile} from "../../redux/reducer/ProfileSlice";
import * as Storage from "../../utily/Storage";
import { RootState } from "../../redux/Store";
import ProgressBar from "../../utily/ProgressBar";
import { getUser } from "../../utily/Helper";

const Profile = (props:any) => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<any>();
  const {loader, user} = useSelector((state: RootState) => state.Profile);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Storage.getData("UserId").then((value)=>{
        dispatch(getProfile())
      })
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View>
      <Header Label={"My Profile"} />
      <View style={{ width: "80%", marginHorizontal: "10%" }}>
      <ProgressBar loader={loader} />
        <View style={styles.first_Child}>
          <Label Title={"Personal etail"} Style={styles.personal_Label} />
          <TouchableOpacity onPress={()=> navigation.navigate("EditProfile", {USER: user})} >
          <Label Title={"Change"} Style={styles.change_Label} />
          </TouchableOpacity>
       
        </View>
        <View style={styles.profile_Con}>
          <View style={styles.profile_First_Child}>
            <Image style={styles.profile_Icn} source={profileIcon} />
          </View>
          <View style={styles.profile_Second_Child}>
            <Label Style={styles.profile_Name} Title={user.firstname+" " +user.lastname} />
            <Label Style={styles.profile_Email} Title={user.email} />
            <View style={styles.line} />
            <Label Style={styles.phone_Label} Title={user.phone} />
            <View style={styles.line} />
            <Label
              Style={styles.phone_Label}
              Title={user.address}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.button_Con}
          onPress={() => navigation.navigate("Order")}
        >
          <Label Style={styles.button_Label} Title={"Order"} />
          <Entypo name={"chevron-thin-right"} color={"#000"} size={scale(14)} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button_Con}
          onPress={() => navigation.navigate("Faq")}
        >
          <Label Style={styles.button_Label} Title={"Faq"} />
          <Entypo name={"chevron-thin-right"} color={"#000"} size={scale(14)} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button_Con}>
          <Label Style={styles.button_Label} Title={"Payment"} />
          <Entypo name={"chevron-thin-right"} color={"#000"} size={scale(14)} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  first_Child: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: scale(20),
  },
  personal_Label: {
    fontSize: scale(12),
    color: "#000",
  },
  change_Label: {
    fontSize: scale(12),
    color: "#10A8B2",
  },
  profile_Con: {
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: scale(10),
    marginTop: scale(10),
    flexDirection: "row",
    padding: scale(15),
  },
  profile_First_Child: {
    width: "35%",
    justifyContent: "center",
    alignItems: "center",
  },
  profile_Icn: {
    width: scale(60),
    height: scale(60),
    resizeMode: "contain",
  },
  profile_Second_Child: {
    width: "65%",
    height: "100%",
  },
  profile_Name: {
    fontSize: scale(12),
    color: "#000",
    fontWeight: "bold",
  },
  profile_Email: {
    fontSize: scale(10),
    color: "grey",
    marginVertical: scale(2),
  },
  line: {
    width: "100%",
    height: scale(0.5),
    backgroundColor: "grey",
    opacity: 0.5,
  },
  phone_Label: {
    fontSize: scale(10),
    color: "grey",
    marginVertical: scale(5),
  },
  button_Con: {
    width: "100%",
    height: scale(50),
    backgroundColor: "#FFF",
    borderRadius: scale(10),
    marginTop: scale(20),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: scale(20),
  },
  button_Label: {
    fontSize: scale(12),
    color: "#000",
  },
});

export default Profile;
