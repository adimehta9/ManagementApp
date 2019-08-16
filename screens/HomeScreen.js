import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  _logout = async() => {
    Alert.alert(
      'Are you sure you want to logout?',
      '',
      [
        {text: 'Yes', onPress: () => this.props.navigation.navigate('Login')},
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        
      ],
      {cancelable: false},
    );

  }
  
  
  render() {
    return (
      <View style={styles.container}>
      
      

      <TouchableOpacity
      style={{
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#555555',
        width:30,
        height:24,
        justifyContent: 'center'
      }}
      onPress={this._logout}
      > 
      
      
      
      </TouchableOpacity>
      
      
      
      <Text
      style={{
        fontSize:30,
        marginBottom:120,
        fontFamily: 'TimesNewRomanPSMT'
      }}
      >Home Page Ting</Text>
      
      <TouchableOpacity
      style={styles.button}
      onPress={() => { this.props.navigation.navigate('CreateSchedule') }}
      >
      <Text style={{
        
        color: '#c9c9c9',
        fontSize: 40,
        textAlign:'center',
        fontFamily: 'TimesNewRomanPSMT'
        
      }}>Create Schedule</Text>
      
      </TouchableOpacity>
      
      <View style={{flexDirection: 'row'}}>
      
      <TouchableOpacity
      style={styles.messageButton}
      onPress={() => { this.props.navigation.navigate('Settings') }}
      >
      <Text style={{
        color:'white',
        fontSize:20,
        fontFamily: 'TimesNewRomanPSMT'
      }}>Messages</Text>
      </TouchableOpacity>
      
      
      
      <TouchableOpacity
      style={styles.ProlfilesButton}
      onPress={() => { this.props.navigation.navigate('ProfilesList') }}
      >
      <Text style={{
        color:'white',
        fontSize:20,
        fontFamily: 'TimesNewRomanPSMT'
      }}>Profiles</Text>
      </TouchableOpacity>
      
      </View>
      
      
      
      </View>
      );
    }
  }
  
  // HomeScreen.navigationOptions = {
  //   header: null,
  // };
  
  // function DevelopmentModeNotice() {
  //   if (__DEV__) {
  //     const learnMoreButton = (
  //       <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
  //       Learn more
  //       </Text>
  //       );
  
  //       return (
  //         <Text style={styles.developmentModeText}>
  //         Development mode is enabled: your app will be slower but you can use
  //         useful development tools. {learnMoreButton}
  //         </Text>
  //         );
  //       } else {
  //         return (
  //           <Text style={styles.developmentModeText}>
  //           You are not in development mode: your app will run at full speed.
  //           </Text>
  //           );
  //         }
  //}
  
  // function handleLearnMorePress() {
  //   WebBrowser.openBrowserAsync(
  //     'https://docs.expo.io/versions/latest/workflow/development-mode/'
  //     );
  //   }
  
  //   function handleHelpPress() {
  //     WebBrowser.openBrowserAsync(
  //       'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  //       );
  //     }
  
  const styles = StyleSheet.create({
    container:{
      backgroundColor: '#c9c9c9',
      flexGrow:1, 
      justifyContent: 'center', 
      alignItems: 'center', 
    },
    developmentModeText: {
      marginBottom: 20,
      color: 'rgba(0,0,0,0.4)',
      fontSize: 14,
      lineHeight: 19,
      textAlign: 'center',
    },
    contentContainer: {
      paddingTop: 30,
    },
    welcomeContainer: {
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 20,
    },
    welcomeImage: {
      width: 100,
      height: 80,
      resizeMode: 'contain',
      marginTop: 3,
      marginLeft: -10,
    },
    getStartedContainer: {
      alignItems: 'center',
      marginHorizontal: 50,
    },
    homeScreenFilename: {
      marginVertical: 7,
    },
    codeHighlightText: {
      color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
      backgroundColor: 'rgba(0,0,0,0.05)',
      borderRadius: 3,
      paddingHorizontal: 4,
    },
    getStartedText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      lineHeight: 24,
      textAlign: 'center',
    },
    tabBarInfoContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        android: {
          elevation: 20,
        },
      }),
      alignItems: 'center',
      backgroundColor: '#fbfbfb',
      paddingVertical: 20,
    },
    tabBarInfoText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      textAlign: 'center',
    },
    navigationFilename: {
      marginTop: 5,
    },
    helpContainer: {
      marginTop: 15,
      alignItems: 'center',
    },
    helpLink: {
      paddingVertical: 15,
    },
    helpLinkText: {
      fontSize: 14,
      color: '#2e78b7',
    },
    button:{
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#555555',
      width:200,
      height:160,
      justifyContent: 'center'
      
    },
    
    messageButton:{
      alignItems: 'center',
      justifyContent:'center',
      width:150,
      height:64,
      marginTop:80,
      backgroundColor:'#555555',
      textAlign:'center',
      marginLeft:20,
    },
    
    ProlfilesButton:{
      width:150,
      height:64,
      backgroundColor:'#555555',
      textAlign:'center',
      justifyContent:'center',
      alignItems:'center',
      marginTop:80,
      marginLeft:20,
    }
    
    
  });
  