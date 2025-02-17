/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import IMAGES from '../../Assets/images';
import { useNavigation } from '@react-navigation/native';

function Login(): React.JSX.Element {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const [phoneNumber, setPhoneNumber] = useState('');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={styles.containerStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.mainContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image source={IMAGES.LoginLogo} style={{ width: 150, height: 150,alignItems:'center',justifyContent:'center' }}/>
          </View>
          <View style={{paddingVertical:20,paddingHorizontal:10}}>
            <Input
              label=""
              placeholder="Enter Mobile Number"
              keyboardType="numeric"
              value={phoneNumber}
              editable={false}
            />
            <Input
              label=""
              placeholder="Enter 4 digit MPIN"
              keyboardType="numeric"
              isSecure
              forgotOption="Forgot MPIN?"
              onForgot={() => {
                console.log('Forgot MPIN clicked');
              }}
            />
            <Button
              title="Sign In"
              buttonStyle={styles.signinBtn}
              onPress={() => {navigation.navigate('AppNavigation')}}
            />
          </View>
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.signupContainer}>
            <Text style={styles.footerText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => {navigation.navigate('Registration')}}>
              <Text style={styles.createLink}>Create</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  contentContainer: {
    flex: 1,
    paddingTop: 20,
  },
  imageContainer: {
    paddingVertical:30,
    alignItems:'center'
  },
  signinBtn: {
    marginVertical: 20,
  },
  subText:{
    fontSize: 14,
    color:'#475467',
  },
  headerText:{
    fontSize:24,
    color:'#303030',
    paddingTop:15,
  },
  footerContainer: {
    paddingVertical: 20,
    justifyContent: 'flex-end',
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#475467',
  },
  createLink: {
    fontSize: 14,
    color: '#0086C9',
    fontWeight: '500',
  },
  termsText: {
    fontSize: 12,
    color: '#475467',
    paddingHorizontal: 20,
  },
  linkText: {
    color: '#2E90FA',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    maxHeight: '60%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  simCard: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  closeButton: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default Login;
