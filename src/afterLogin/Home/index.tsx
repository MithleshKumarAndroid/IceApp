import React, { useEffect } from "react";
import { Image } from "react-native";
import { scale } from "react-native-size-matters";
import MenuHeader from "../../Component/MenuHeader";
import {
  homeTabIcon,
  homeTabBlue,
  cateGrey,
  cateBlue,
  cartGrey,
  cartBlue,
  searchGrey,
  searchBlue,
} from "../../image";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
const Tab = createMaterialBottomTabNavigator();
import HomePage from "./HomePage";
import OurCategory from "../OurCategory";
import Cart from "../Cart";
import Profile from "../Profile";
import Search from "../Search";

const Home = () => {

  return (
    <>
      {/* <MenuHeader /> */}
      <Tab.Navigator
        sceneAnimationEnabled={false}
        barStyle={{ backgroundColor: "#FFF" }}
      >
        <Tab.Screen
          name="HomePage"
          component={HomePage}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, focused }) => (
              <Image
                style={{
                  width: focused ? scale(30) : scale(25),
                  height: focused ? scale(30) : scale(25),
                  resizeMode: "contain",
                }}
                source={focused ? homeTabBlue : homeTabIcon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="OurCategory"
          component={OurCategory}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, focused }) => (
              <Image
                style={{
                  width: focused ? scale(30) : scale(25),
                  height: focused ? scale(30) : scale(25),
                  resizeMode: "contain",
                }}
                source={focused ? cateBlue : cateGrey}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, focused }) => (
              <Image
                style={{
                  width: focused ? scale(30) : scale(25),
                  height: focused ? scale(30) : scale(25),
                  resizeMode: "contain",
                }}
                source={focused ? cartBlue : cartGrey}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, focused }) => (
              <Image
                style={{
                  width: focused ? scale(30) : scale(25),
                  height: focused ? scale(30) : scale(25),
                  resizeMode: "contain",
                }}
                source={focused ? searchBlue : searchGrey}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Home;
