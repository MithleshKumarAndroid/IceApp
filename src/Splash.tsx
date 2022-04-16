import React from 'react';
import {View, Text, Image} from 'react-native';
import {splash} from './image';

const Splash = () => {
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'blue'}}>
      <Image
        style={{width: '100%', height: '100%'}}
        source={splash}
        resizeMode={'cover'}
      />
    </View>
  );
};

export default Splash;
