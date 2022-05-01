import React from "react";
import { View, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import Label from "../../Component/Label";
import Entypo from "react-native-vector-icons/Entypo";
import { TouchableOpacity } from "react-native-gesture-handler";
import Button from "../../Component/Button";

const PaymentLayout = () => {
  return (
    <>
      <Label Style={styles.payment_Label} Title={"Payment"} />
      <View style={styles.card_Con}>
        <View style={styles.card_First_Child}>
          <View style={styles.card_Name_Con}>
            <Label Style={styles.card_Name_Label} Title={"VISA"} />
          </View>
          <Label Style={styles.card_Number} Title={"**** **** **** 1234"} />
        </View>

        <TouchableOpacity style={styles.card_Right_Arrow}>
          <Entypo name={"chevron-thin-right"} color={"#000"} size={scale(14)} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Label
          Style={{ fontSize: scale(12), color: "#000", opacity: 0.7 }}
          Title={"Sub Total"}
        />
        <Label Style={{ fontSize: scale(12), color: "grey" }} Title={"$100"} />
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: scale(3),
        }}
      >
        <Label
          Style={{ fontSize: scale(12), color: "#000", opacity: 0.7 }}
          Title={"Tax"}
        />
        <Label Style={{ fontSize: scale(12), color: "grey" }} Title={"$10"} />
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: scale(3),
        }}
      >
        <Label
          Style={{ fontSize: scale(12), color: "#000", opacity: 0.7 }}
          Title={"Deliver Fee"}
        />
        <Label Style={{ fontSize: scale(12), color: "grey" }} Title={"$10"} />
      </View>

      <Button
        Style={{
          width: scale(200),
          height: scale(45),
          borderRadius: scale(20),
          marginVertical: scale(20),
          alignSelf: "center",
        }}
        Label={"Complete order"}
      />
    </>
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
    height: scale(25),
    borderRadius: scale(15),
    backgroundColor: "#02A4AE",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: scale(5),
  },
  home_Label: {
    fontSize: scale(10),
    color: "#FFF",
    marginLeft: scale(5),
    marginTop: scale(1),
  },
  workPlace_Con: {
    width: scale(90),
    height: scale(25),
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
    width: scale(13),
    height: scale(13),
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

export default PaymentLayout;
