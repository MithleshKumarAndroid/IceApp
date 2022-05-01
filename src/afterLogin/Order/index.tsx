import React from "react";
import { View, StyleSheet, Image, FlatList } from "react-native";
import { scale } from "react-native-size-matters";
import Header from "../../Component/Header";
import Label from "../../Component/Label";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import { workPlaceIcon, avatarIcon } from "../../image";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native-gesture-handler";
import EditText from "../../Component/EditText";
import PaymentLayout from "./PaymentLayout";

const array = [1, 2, 3];
const Order = () => {
  return (
    <View style={styles.main}>
      <Header Label={"MyOrder"} />
      <View style={styles.sub_main}>
        <View style={styles.address_Con}>
          <Label Style={styles.deliver_Label} Title={"Deliver to"} />
          <View style={styles.change_Con}>
            <Label Style={styles.change_Label} Title={"Change"} />
            <FontAwesome5 name={"edit"} color={"#1ABC9C"} size={scale(9)} />
          </View>
        </View>
        <Label
          Style={styles.address_Label}
          Title={"45 Noname Str, District 7"}
        />

        <View style={styles.second_Child}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.home_Icon_Con}>
              <Entypo name={"home"} color={"#FFF"} size={scale(11)} />
              <Label Style={styles.home_Label} Title={"Home"} />
            </View>
            <View style={styles.workPlace_Con}>
              <Image style={styles.workPlace_Icn} source={workPlaceIcon} />
              <Label Style={styles.workPlace_Label} Title={"Work Place"} />
            </View>
          </View>
          <AntDesign name={"plus"} size={scale(20)} color={"#000"} />
        </View>

        <View style={styles.third_Child}>
          <View style={styles.avtar_Con}>
            <Image style={styles.avtar_Icn} source={avatarIcon} />
            <View style={styles.name_Phone}>
              <Label Style={styles.user_Name_Label} Title={"Lowe Nguyen"} />
              <Label Style={styles.user_Phone_Label} Title={"+1234567890"} />
            </View>
          </View>
          <TouchableOpacity style={styles.right_Arrow_Con}>
            <Entypo
              name={"chevron-thin-right"}
              color={"#000"}
              size={scale(15)}
            />
          </TouchableOpacity>
        </View>

        <EditText
          Placeholder={"Note to driver or address details"}
          Style={{ height: scale(35) }}
        />
        <View style={styles.yourOrder_Con}>
          <Label Style={styles.yourOrder_Label} Title={"Your order"} />
          <View style={styles.edit_Con}>
            <Label Style={styles.change_Label} Title={"Edit"} />
          </View>
        </View>

        <FlatList
          nestedScrollEnabled={true}
          data={array}
          renderItem={({ item }) => (
            <View style={styles.list_Main}>
              <View style={{ flexDirection: "row" }}>
                <Label Style={styles.list_Qty} Title={"1x"} />
                <Label
                  Style={styles.list_Product}
                  Title={"Oreo Chocolate Stormy"}
                />
              </View>
              <Label Style={styles.list_Price} Title={"$10"} />
            </View>
          )}
        />
        <PaymentLayout />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFF",
  },
  sub_main: {
    width: "90%",
    marginTop: scale(20),
    marginHorizontal: "5%",
  },
  address_Con: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  deliver_Label: {
    fontSize: scale(12),
    color: "grey",
  },
  change_Con: {
    width: scale(62),
    backgroundColor: "#F2FDFB",
    paddingVertical: scale(5),
    paddingHorizontal: scale(5),
    borderRadius: scale(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  change_Label: {
    fontSize: scale(10),
    color: "#1ABC9C",
  },
  address_Label: {
    fontSize: scale(12),
    color: "#000",
  },
  second_Child: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: scale(10),
  },
  home_Icon_Con: {
    width: scale(65),
    height: scale(20),
    borderRadius: scale(15),
    backgroundColor: "#02A4AE",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: scale(5),
  },
  home_Label: {
    fontSize: scale(9),
    color: "#FFF",
    marginLeft: scale(5),
    marginTop: scale(1),
  },
  workPlace_Con: {
    width: scale(90),
    height: scale(20),
    borderRadius: scale(15),
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: scale(5),
    borderColor: "#02A4AE",
    borderWidth: scale(0.6),
    marginLeft: scale(10),
  },
  workPlace_Icn: {
    width: scale(10),
    height: scale(10),
    resizeMode: "contain",
  },
  workPlace_Label: {
    fontSize: scale(10),
    color: "#02A4AE",
    marginLeft: scale(5),
    marginTop: scale(1),
  },
  third_Child: {
    width: "100%",
    height: scale(40),
    flexDirection: "row",
    marginVertical: scale(20),
    justifyContent: "space-between",
    alignItems: "center",
  },
  avtar_Con: {
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  avtar_Icn: {
    width: scale(60),
    height: scale(60),
    resizeMode: "contain",
  },
  name_Phone: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: "80%",
  },
  right_Arrow_Con: {
    width: scale(50),
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  user_Name_Label: {
    fontSize: scale(14),
    color: "#000",
  },
  user_Phone_Label: {
    fontSize: scale(12),
    color: "grey",
  },
  yourOrder_Con: {
    width: "100%",
    flexDirection: "row",
    marginTop: scale(20),
    justifyContent: "space-between",
  },
  yourOrder_Label: {
    fontSize: scale(12),
    color: "#000",
  },
  edit_Con: {
    backgroundColor: "#F2FDFB",
    borderRadius: scale(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: scale(5),
  },
  payment_Label: {
    fontSize: scale(12),
    color: "#000",
    marginTop: scale(15),
    opacity: 0.7,
  },
  list_Main: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: scale(10),
  },
  list_Qty: {
    fontSize: scale(12),
    color: "#02A4AE",
  },
  list_Product: {
    fontSize: scale(10),
    color: "grey",
    marginLeft: scale(7),
  },
  list_Price: {
    fontSize: scale(10),
    color: "grey",
  },
  card_Con: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card_First_Child: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  card_Name_Con: {
    backgroundColor: "#0E4595",
    padding: scale(3),
    marginVertical: scale(10),
  },
  card_Name_Label: {
    fontSize: scale(8),
    color: "#FFF",
    fontWeight: "bold",
  },
  card_Number: {
    fontSize: scale(10),
    color: "#000",
    marginLeft: scale(5),
  },
  card_Right_Arrow: {
    width: scale(50),
    height: scale(40),
    justifyContent: "center",
    alignItems: "flex-end",
  },
});

export default Order;
