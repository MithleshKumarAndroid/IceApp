import React, { Component } from "react";
// import { StyleSheet, Text, View } from "react-native";
import MenuHeader from "../../Component/MenuHeader";
import Label from "../../Component/Label";
import { scale } from "react-native-size-matters";

import Category from "./Category";

// const Page = ({ label }) => (
//   <View style={styles.container}>
//     <Text style={styles.welcome}>{label}</Text>
//     <Text style={styles.instructions}>To get started, edit index.ios.js</Text>
//     <Text style={styles.instructions}>
//       Press Cmd+R to reload,{"\n"}
//       Cmd+D or shake for dev menu
//     </Text>
//   </View>
//   // <Category />
// );

// class Main extends Component {
//   render() {
//     return (
//       <View style={[styles.container, { paddingTop: 20 }]}>
//         <MenuHeader />
//         <Label
//           Style={{
//             fontSize: scale(20),
//             fontWeight: "bold",
//             color: "#10A8B2",
//             margin: scale(15),
//           }}
//           Title={"Our Category"}
//         />
//         {/* <Category /> */}
//         <ScrollableTabView
//           tabBarActiveTextColor="red"
//           renderTabBar={() => <TabBar underlineColor="red" />}
//         >
//           <Page tabLabel={{ label: "Pure Milk" }} label="Page #1" />
//           <Page tabLabel={{ label: "Milk Tea" }} label="Page #2 aka Long!" />
//           <Page tabLabel={{ label: "Cream" }} label="Page #3" />
//           <Page tabLabel={{ label: "Fresh Fruit" }} label="Page #4 aka Page" />
//           <Page tabLabel={{ label: "Pure Milk" }} label="Page #5" /> */}
//         </ScrollableTabView>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // justifyContent: "center",
//     // alignItems: "center",
//     backgroundColor: "#F5FCFF",
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: "center",
//     margin: 10,
//   },
//   instructions: {
//     textAlign: "center",
//     color: "#333333",
//     marginBottom: 5,
//     fontSize: 28,
//   },
// });

// export default Main;

import { AppRegistry, StyleSheet, Text, View } from "react-native";

import Swiper from "react-native-swiper";

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default class SwiperComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Swiper style={styles.wrapper} showsButtons={true}>
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
      </View>
    );
  }
}
