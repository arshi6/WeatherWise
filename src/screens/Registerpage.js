import React,{useState} from 'react'
import {Text, View,StyleSheet, SafeAreaView,Image, TextInput, Alert, TouchableOpacity,ImageBackground,StatusBar} from 'react-native'
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'; 
//import { auth } from '../utils/firebaseConfig';
import { Ionicons } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import CustomButton from '../screens/CustomButton';

const Registerpage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  // const registerUser = async () => {
  //   try {
  //     if (password !== confirmPassword) {
  //       Alert.alert('Error', 'Passwords do not match.');
  //       return;
  //     }

  //     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  //     const user = userCredential.user;

  //     await sendEmailVerification(user);

  //     console.log('User account created:', user);
  //     Alert.alert('Success', 'User account created successfully. Please check your email for verification.');
  //     //navigation.navigate('Login');
  //   } catch(error)
  //   {
  //     console.error('Error creating user : ', error);
  //     Alert.alert('Error' ,'failed to create user');
  //   }
  // };
    return (
        <SafeAreaView style = {styles.container}>
          <ImageBackground 
            source = {require('../../assets/registerbackground.png')}
            style = {styles.imagelayout}>
        <View style = {styles.textContainer}>
        <Text style = {styles.register}>Register</Text>
        <View style = {styles.inputContainer}>
        <Ionicons name="person" size={20} color="white" style = {styles.icon}/>
        <TextInput 
        style = {styles.input}
        value = {fullName}
        placeholder="Full Name"
        placeholderTextColor="white"
        onChangeText={setFullName}
        autoCapitalize="words"
        />
        </View>
        <View style={styles.inputContainer}>
        <Zocial name="email" size={20} color="white" style={styles.icon}/>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="white"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        </View>
        <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={20} color="white" style={styles.icon}/>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry
        />
        </View>
        <View style={styles.inputContainer}>
        <FontAwesome name="unlock-alt" size={20} color="white" style={styles.icon}/>
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirm Password"
          placeholderTextColor="white"
          secureTextEntry
        />
        </View>
        <CustomButton label={"Register"}  />
        <View style={styles.loginContainer}>
          <Text style={styles.loText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}> Login</Text>
          </TouchableOpacity>
        </View>
        </View>
        </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create(
    {
      container : {
        flex: 1,
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight || 0,
      },
      textContainer : {
        paddingHorizontal: 20
      },
      register : {
        color : 'white',
        fontSize : 35,
        fontWeight : '800',
        marginLeft : 20,
        marginBottom : 30,
        marginTop : 200,
        textAlign : 'center'
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 20,
        marginLeft : 20,
        marginRight : 20,
      },
      icon: {
        marginRight: 10,
        textAlign: 'center',
      },
      input: {
        flexDirection: 'row',
        borderBottomColor: '#181816',
        alignItems:'center',
        color : 'white'
      },
      loginText: {
        color: 'skyblue',
        fontWeight: '700',
        marginLeft: 3,
      },
      loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom : 25,
        color : 'white'
      },
      imagelayout: {
        flex:1
    },
    loText: {
      color: 'white',
      fontWeight: '700',
      marginLeft: 3,
    },
    });

export default Registerpage