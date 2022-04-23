import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./beforeLogin/Login";
import Signup from "./beforeLogin/Signup";
import Forgot from "./beforeLogin/ForgotPass";
import Home from "./afterLogin/Home";
import * as Storage from "./utily/Storage";
import Drawer from "./afterLogin/Drawer";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ForgotPassword from "./beforeLogin/ForgotPass";

const BeforeLoginStack = createNativeStackNavigator();
const AfterLoginStack = createNativeStackNavigator();
const DrawerStack = createDrawerNavigator();

const AfterLogin = () => {
  return (
    // <NavigationContainer>
    <DrawerStack.Navigator
      drawerContent={(props) => <Drawer />}
      screenOptions={{ headerShown: false, drawerType: "front" }}
    >
      <DrawerStack.Screen name={"Home"} component={Home} />
    </DrawerStack.Navigator>

    // </NavigationContainer>
  );
};

{
  /* <AfterLoginStack.Navigator screenOptions={{ headerShown: false }}>
        <AfterLoginStack.Screen name={"Home"} component={Home} />
      </AfterLoginStack.Navigator> */
}

const BeforeLogin = () => {
  return (
    <BeforeLoginStack.Navigator
      initialRouteName={"Login"}
      screenOptions={{ headerShown: false }}
    >
      <BeforeLoginStack.Screen name="Login" component={Login} />
      <BeforeLoginStack.Screen name="Signup" component={Signup} />
      <BeforeLoginStack.Screen name="Forgot" component={Forgot} />
      <BeforeLoginStack.Screen name="HomePage" component={AfterLogin} />
    </BeforeLoginStack.Navigator>
  );
};

const AuthStack = () => {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    Storage.getData("UserId").then((value) => {
      if (value != null && value != undefined && value != "") {
        setUserId(value);
      }
    });
  }, []);

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <NavigationContainer>
        {userId ? <AfterLogin /> : <BeforeLogin />}
      </NavigationContainer>
    </View>
  );
};

export default AuthStack;
