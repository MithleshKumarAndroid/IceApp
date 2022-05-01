/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import Splash from "./src/Splash";
import AuthStack from "./src/navigator";
import Login from "./src/beforeLogin/Login/index";
import SplashScreen from "react-native-splash-screen";
import Navig from "./src/NavigationService";

const App = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 100);
  }, []);

  return (
    <SafeAreaView>
      <AuthStack />
    </SafeAreaView>
  );
};
export default App;
