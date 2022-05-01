import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { scale } from "react-native-size-matters";
import {
  whiteLogo,
  DrawerProfile,
  securityIcon,
  privacyIcon,
  DrawerPromo,
  DrawerCart,
} from "../../image";
import Label from "../../Component/Label";
import AntDesign from "react-native-vector-icons/AntDesign";
import * as Storage from "../../utily/Storage";
import { useNavigation, CommonActions } from "@react-navigation/native";
import * as NavigationService from "../../NavigationService";

const Drawer = (props: any) => {
  const navigation = useNavigation();

  const clickLogout = () => {
    Alert.alert("", "Thank you for Ordering with R&B Tea.See you soon!", [
      {
        text: "Cancel",
        onPress: () => props.navigation.closeDrawer(),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          // navigation.reset("Login");
          navigation.reset({
            index: 0,
            routes: [{ name: "BeforeLogin" }],
          });
          Storage.storeData("UserId", "");
        },
      },
    ]);
  };

  return (
    <View style={styles.main}>
      <Image style={styles.logo} source={whiteLogo} />
      <View style={styles.sub_Main}>
        <TouchableOpacity
          style={styles.first_Child}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image style={styles.image_Con} source={DrawerProfile} />
          <Label Title={"Profile"} Style={styles.title} />
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity
          style={styles.first_Child}
          onPress={() => navigation.navigate("Order")}
        >
          <Image style={styles.cart_Image} source={DrawerCart} />
          <Label Title={"Order"} Style={styles.title} />
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity
          style={styles.first_Child}
          onPress={() => navigation.navigate("Offer")}
        >
          <Image style={styles.promo_Image} source={DrawerPromo} />
          <Label Title={"Offer and Promo"} Style={styles.title} />
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity style={styles.first_Child}>
          <Image style={styles.policy_Image} source={privacyIcon} />
          <Label Title={"Privacy and Policy"} Style={styles.title} />
        </TouchableOpacity>
        <View style={styles.line} />
        <View style={styles.first_Child}>
          <Image style={styles.security_Image} source={securityIcon} />
          <Label Title={"Security"} Style={styles.title} />
        </View>
        <View style={styles.line} />
      </View>
      <TouchableOpacity
        style={styles.signOut_Con}
        onPress={() => clickLogout()}
      >
        <Label Style={styles.title} Title={"Sign-Out"} />
        <AntDesign
          name={"arrowright"}
          size={scale(15)}
          color={"#FFF"}
          style={{ marginLeft: scale(10) }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: { width: "100%", height: "100%", padding: scale(15) },
  logo: {
    width: scale(80),
    height: scale(25),
    resizeMode: "contain",
    marginTop: scale(10),
  },
  first_Child: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: scale(15),
  },
  sub_Main: {
    width: "90%",
    marginTop: scale(80),
    marginHorizontal: "5%",
  },

  image_Con: {
    width: scale(20),
    height: scale(20),
    resizeMode: "contain",
  },
  title: {
    color: "#FFF",
    fontSize: scale(12),
    marginLeft: scale(10),
    fontWeight: "bold",
  },
  line: {
    width: "50%",
    height: scale(0.5),
    backgroundColor: "#FFF",
    marginLeft: scale(30),
    marginTop: scale(20),
    opacity: 0.3,
  },
  cart_Image: {
    width: scale(15),
    height: scale(15),
    resizeMode: "contain",
  },
  promo_Image: {
    width: scale(15),
    height: scale(15),
    resizeMode: "contain",
  },
  policy_Image: {
    width: scale(11),
    height: scale(11),
    resizeMode: "contain",
  },
  security_Image: {
    width: scale(11),
    height: scale(11),
    resizeMode: "contain",
  },
  signOut_Con: {
    marginTop: scale(50),
    marginLeft: scale(20),
    flexDirection: "row",
  },
});

export default Drawer;
