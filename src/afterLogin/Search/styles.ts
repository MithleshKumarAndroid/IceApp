import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFF",
  },
  headerLabel: {
    alignSelf: "center",
    color: "#10A8B2",
    fontSize: scale(14),
    fontWeight: "bold",
    marginVertical: scale(10),
  },
  searchContainer: {
    width: "90%",
    marginHorizontal: "5%",
    height: scale(40),
    borderRadius: scale(10),
    borderColor: "grey",
    borderWidth: scale(0.5),
    flexDirection: "row",
  },
  searchIcon_Container: {
    width: "15%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  edit_Container: {
    width: "85%",
    height: "100%",
  },
  list_ItemContainer: {
    width: "100%",
    height: scale(50),
    borderColor: "grey",
    borderWidth: scale(0.5),
    marginTop: scale(10),
    borderRadius: scale(5),
    justifyContent: "center",
  },
  list_ChildContainer: {
    flexDirection: "row",
    marginHorizontal: "5%",
  },
});

export default styles;
