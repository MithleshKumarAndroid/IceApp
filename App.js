/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import AuthStack from "./src/navigator";
import SplashScreen from "react-native-splash-screen";
import { Provider } from "react-redux";
import Store from "./src/redux/Store";

const App = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 100);
  }, []);




  return (
    <SafeAreaView>
        <Provider store={Store}>
          <AuthStack />
        </Provider>
    </SafeAreaView>
  );
};
export default App;
