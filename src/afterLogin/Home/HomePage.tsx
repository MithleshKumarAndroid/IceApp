import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { scale } from "react-native-size-matters";
import MenuHeader from "../../Component/MenuHeader";
import BannerLayout from "./BannerLayout";
import TopPickLayout from "./TopPickLayout";
import BrowserMenuLayout from "./BrowserMenu";
import * as Storage from "../../utily/Storage";

const HomePage = () => {
  useEffect(() => {
    Storage.storeData("MI", "05M56WAC9C491");
    Storage.storeData("Token","8b78a63f-b7db-51aa-6351-a2f6bc1ebe60");
  }, []);

  return (
    <View style={styles.main}>
      <BannerLayout />
      <View style={styles.header_Con}>
        <MenuHeader />
      </View>
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={{ paddingBottom: scale(100) }}
      >
        <View style={styles.sub_Main}>
          <Text style={styles.top_Pick_Label}>Top picks</Text>
          <TopPickLayout />
          <BrowserMenuLayout />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFF",
  },
  sub_Main: {
    width: "96%",
    marginHorizontal: "2%",
    marginTop: scale(10),
  },
  header_Con: {
    width: "100%",
    position: "absolute",
    top: 0,
    zIndex: 9999,
  },
  top_Pick_Label: {
    color: "#000",
    fontSize: scale(12),
  },
});
export default HomePage;
