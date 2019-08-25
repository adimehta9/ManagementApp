import React from 'react';
import { 
  StyleSheet, 
  Text, 
  KeyboardAvoidingView, 
  Image, 
  TextInput,
  TouchableOpacity, 
  Alert, 
  Button,
  View 
} from 'react-native';
// TODO: Refactor name
import login from './login.json'

export default class LoginScreen extends React.Component {
  //static navigationOptions = {
  //  title: 'Please sign in',
  //};
  
  constructor(props){
    super(props);
    this.state= {
      username: '',
      password: '',
    };
  }
  
  // Login Function
  _login = async () => {
    if (login.user1.username === this.state.username && login.user1.password === this.state.password) {
      console.log("Login Success");
      this.props.navigation.navigate('App');
    } 
    
    else if(login.user2.username === this.state.username && login.user2.password=== this.state.password){
      this.props.navigation.navigate('HomePageAC');
    } 
    
    else {
      Alert.alert(
        'Failed to Log In',
        'Username or password incorrect',
        'Please try again',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
        );
      }
    }
    
    render() {
      return (
        // To show the text input when typing in the phone
        
         <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Image
        style = {{ height: 150, width: 150 }}
        
        source = {require('../assets/images/alphaacademylogo.png')}
        />
        
        <Text style={{ color: 'white', fontSize: 50, marginBottom: 20, fontFamily: 'TimesNewRomanPSMT' }}>
        A L P H A
        </Text>
        
        <TextInput style = {styles.inputBox}
        keyboardType = 'email-address'
        placeholder = "Enter Username"
        autoCapitalize = 'none'
        underlineColorAndroid = 'rgba(0,0,0,0)'
        autoCorrect = {false}
        onChangeText = {(username) => this.setState({ username })}
        value = {this.state.username}
        // Allows the next button to go to password field
        returnKeyType = "next"
        onSubmitEditing = {() => { this.secondTextInput.focus(); }}
        blurOnSubmit = {false}
        />
        
        <TextInput style={styles.inputBox}
        placeholder = 'Enter Your Password'
        secureTextEntry = {true}
        underlineColorAndroid = 'rgba(0,0,0,0)'
        // Set the reference so the username is able to reference it
        ref = {(input) => { this.secondTextInput = input; }}
        onChangeText = {(password) => this.setState({ password })}
        value = {this.state.password}
        // For people that want to login using the keyboard
        returnKeyType = "go"
        onSubmitEditing = {this._login}
        />
        
        <TouchableOpacity style={styles.button} onPress={this._login}>
        <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
         </KeyboardAvoidingView>
        
        );
      }
    }

    // Remove white bar header
  LoginScreen.navigationOptions = {
    header: null,
  };
    
    // TODO: Make prettier
    const styles = StyleSheet.create({
      container:{
        backgroundColor: '#555555',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        flexGrow:1
      },
      
      inputBox:{
        height: 50, 
        width: 300, 
        borderColor:'white', 
        borderWidth: 1, 
        borderRadius: 25,
        padding: 16,
        marginBottom: 20,
        backgroundColor: 'rgba(255,255,255,0.1)',
        color: 'white'
      },
      
      buttonText:{
        fontSize: 16, 
        fontWeight:'500', 
        color: 'white', 
        textAlign: 'center'
      },
      
      button:{
        width: 300, 
        backgroundColor: '#1a1a1a', 
        borderRadius: 25, 
        paddingVertical: 12
      },
    });