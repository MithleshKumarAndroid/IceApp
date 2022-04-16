import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  StyleSheet,
  Alert,
} from 'react-native';
import {loginBack} from '../../image';
import FastImage from 'react-native-fast-image';
import {scale} from 'react-native-size-matters';
import EditText from '../../Component/EditText';
import Button from '../../Component/Button';
import {validateEmail} from '../utily/validation';

const Login = () => {
  const [email, setEmail] = useState<string | undefined>('');
  const [password, setPassword] = useState<string | undefined>('');

  const emailRef = useRef();
  const passwordRef = useRef();

  const submit = () => {
    if (!email && !password) {
      Alert.alert('Warning', 'Both fileds are required');
    } else if (!email) {
      Alert.alert('Warning', 'Please enter Email');
    } else if (!password) {
      Alert.alert('Warning', 'Please enter Password');
    } else if (!validateEmail(email)) {
      Alert.alert('Warning', 'Please enter valid email');
    } else {
      console.log('----submith----->');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <ScrollView contentContainerStyle={{paddingBottom: scale(80)}}>
        <FastImage
          style={{width: '100%', height: scale(250)}}
          source={loginBack}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View
          style={{width: '80%', marginTop: scale(20), marginHorizontal: '10%'}}>
          <EditText
            Placeholder={'Please enter email id'}
            ChangeText={txt => setEmail(txt.trim())}
            ReturnKeyType={'next'}
            Ref={emailRef}
            SubmitEditing={() => passwordRef.current?.focus()}
          />
          <EditText
            Ref={passwordRef}
            Style={{marginTop: scale(20)}}
            Placeholder={'Please enter password'}
            ChangeText={txt => setPassword(txt.trim())}
            ReturnKeyType={'done'}
            SubmitEditing={() => Keyboard.dismiss()}
          />
          <TouchableOpacity style={styles.forgot_Con}>
            <Text style={styles.forgot_Label}>Forgot Password?</Text>
          </TouchableOpacity>
          <Button
            PressOn={() => submit()}
            Style={{marginVertical: scale(20)}}
            Label={'Login'}
          />

          <TouchableOpacity style={styles.signup_Con}>
            <View style={styles.signup_F} />
            <Text style={styles.signup_Label}>Or Sign up with</Text>
            <View style={styles.signup_F} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  signup_Con: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signup_F: {
    width: '33%',
    height: scale(1),
    backgroundColor: 'grey',
    marginTop: scale(1),
  },
  signup_Label: {
    fontSize: scale(10),
    color: 'grey',
    marginHorizontal: scale(2),
  },
  forgot_Con: {
    alignSelf: 'flex-end',
    marginTop: scale(10),
  },
  forgot_Label: {
    fontSize: scale(12),
    padding: scale(1),
  },
});

export default Login;
