/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Splash from './src/Splash';

const App = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 1000);
  }, []);

  return <SafeAreaView>{show ? <Splash /> : <Text>mith</Text>}</SafeAreaView>;
};

export default App;
