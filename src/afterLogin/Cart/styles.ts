import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  main: {
      flex:1
  },
  sub_Main:{
    width: "96%",
    marginHorizontal: "2%",
    height: "80%",
  },
  listItem_Container: {
    width: "90%",
    marginHorizontal: "5%",
    height: scale(80),
    backgroundColor: "#FFF",
    borderRadius: scale(15),
    flexDirection: "row",
    padding: scale(4),
    marginTop: scale(10),
  },
  productImage_Container: {
    width: "25%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  product_Image: {
    width: scale(70),
    height: scale(70),
    resizeMode: "contain",
  },
  listSecond_Child: {
    width: "70%",
    height: "100%",
    justifyContent: "center",
    marginLeft: "5%",
  },
  item_Lable: {
    fontSize: scale(13),
    color: "#10A8B2",
  },
  price_Container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: scale(10),
  },
  price_Label:{
    fontSize: scale(10), color: "red"
  },
  plus_Minus_Container:{
    width: scale(50),
    height: scale(20),
    backgroundColor: "#10A8B2",
    borderRadius: scale(10),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  minus_Container:{
    width: scale(20),
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  quantity_Label:{
    color: "#FFF",
    fontSize: scale(10),
    alignSelf: "center",
  },
  plus_Container:{
    width: scale(20),
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  complete_Order_Container:{
    width: "100%",
    height: "12%",
    justifyContent: "center",
    alignItems: "center",
  },
  button_Con:{
    width: scale(200), borderRadius: scale(20)
  }
});

export default styles;
