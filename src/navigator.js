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
import { scale } from "react-native-size-matters";
import ProgressBar from "./utily/ProgressBar";
import Profile from "./afterLogin/Profile";
import Offer from "./afterLogin/Offer";
import Order from "./afterLogin/Order";
import Faq from "./afterLogin/Faq";
import EditProfile from "./afterLogin/Profile/EditProfile";
import { navigationRef } from "./NavigationService";
import { useSelector, useDispatch } from "react-redux";
import { setUserId } from "./redux/reducer/loginSlice";
import ProductDetails from "../src/afterLogin/OurCategory/ProductDetails";

const BeforeLoginStack = createNativeStackNavigator();
const WithoutDrawerStack = createNativeStackNavigator();
const DrawerStack = createDrawerNavigator();

const AfterLogin = () => {
  return (
    <DrawerStack.Navigator
      drawerContent={(props) => <Drawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: "front",
        drawerStyle: {
          backgroundColor: "#10A8B2",
          width: scale(220),
        },
      }}
    >
      <DrawerStack.Screen name={"Home"} component={Home} />
      <DrawerStack.Screen
        name={"Profile"}
        component={Profile}
        options={{
          swipeEnabled: false,
          drawerStyle: { height: 0 },
        }}
      />
       <DrawerStack.Screen
        name={"EditProfile"}
        component={EditProfile}
        options={{
          swipeEnabled: false,
          drawerStyle: { height: 0 },
        }}
      />
       <DrawerStack.Screen
        name={"ProductDetails"}
        component={ProductDetails}
        options={{
          swipeEnabled: false,
          drawerStyle: { height: 0 },
        }}
      />
      <DrawerStack.Screen name={"Offer"} component={Offer} />
      <DrawerStack.Screen name={"Order"} component={Order} />
      <DrawerStack.Screen name={"Faq"} component={Faq} />
      
      <DrawerStack.Screen name={"WithoutDrawer"} component={WithoutDrawer} />
    </DrawerStack.Navigator>
  );
};

const WithoutDrawer = () => {
  return (
    <WithoutDrawerStack.Navigator screenOptions={{ headerShown: false }}>
      <WithoutDrawerStack.Screen name={"Profile"} component={Profile} />
    </WithoutDrawerStack.Navigator>
  );
};

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
  const [showLoader, setShowLoader] = useState(true);
  var userId = useSelector((state) => state.login.userId);
  const dispatch = useDispatch();

  useEffect(() => {
    Storage.getData("UserId").then((value) => {
      if (value != null && value != undefined && value != "") {
        dispatch(setUserId(1));
        setShowLoader(false);
      } else {
        setShowLoader(false);
      }
    });
  }, []);

  return (
    <View style={{ width: "100%", height: "100%" }}>
      {showLoader ? (
        <ProgressBar loader={showLoader} />
      ) : (
        <NavigationContainer ref={navigationRef}>
          {userId ? <AfterLogin /> : <BeforeLogin />}
        </NavigationContainer>
      )}
    </View>
  );
};

export default AuthStack;
