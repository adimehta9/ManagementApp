import React, {Component} from 'react';



import {
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Image,
  TouchableOpacity,
} from 'react-native';



type Props = {};
export default class App extends Component<{}> {
  


  render() {
     return (

      <View style={styles.container}>

          
        <Image
          style={{height:150, width:150, marginTop:150}}
          source={require('./app/img/alphaacademylogo.png')}
        />
        <Text style={
          {color: 'white', fontSize:50, marginTop: 30, fontFamily: 'TimesNewRomanPSMT'}}> {"A L P H A"} 
          </Text>
        <TextInput style={styles.inputBox1} 
          keyboardType = 'email-address'
          placeholder = 'Enter Your Email'
          placeholderTextColor = 'white'
          color = 'white'
          autoCapitalize = 'none'
          underlineColorAndroid ='rgba(0,0,0,0)'
        />

          
        <TextInput style={styles.inputBox2} 
          placeholder= 'Enter Your Password'
          placeholderTextColor='white'
          color = 'white'
          secureTextEntry = {true}
          underlineColorAndroid ='rgba(0,0,0,0)'
        />




        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>


        


        <View style = {styles.signupTextCont}>
          <Text style = {styles.signupText}>Don't have an account yet?</Text>
          <Text style = {styles.signupButton}> Signup</Text>
        </View>



      </View>

    );
  }
}










const styles = StyleSheet.create({
  container: {
    flexGrow:1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#555555',
  },

  inputBox1: {
    height:50, 
    width: 300,
    borderColor:'white', 
    borderWidth:1, 
    margin:20,
    padding: 16,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius:25,
    marginTop:80
},

  buttonText: {
  fontSize:16, 
  fontWeight:'500', 
  color:'white',
  textAlign: 'center'
  },
  
  button: {
    width:300,
    backgroundColor: '#1a1a1a',
    borderRadius:25,
    paddingVertical: 12,

  },

inputBox2: {
    height:50, 
    width: 300,
    borderColor:'white', 
    borderWidth:1, 
    margin:20,
    padding: 16,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius:25,
},

signupTextCont: {
  flexGrow:1,
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  paddingVertical: 16,
},

signupText: {
  color:'rgba(255,255,255,0.7)', 
  fontSize:16

},

signupButton: {
  color:'#ffffff', 
  fontSize:16, 
  fontWeight: '500',
},

});





