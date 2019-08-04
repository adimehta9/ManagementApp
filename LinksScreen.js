import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function LinksScreen() {
  return (
    constructor(props){
      super(props);
      this.state= {
          username: '',
          password: '',
      }
  }


  render(){
      return(
          
          <View style={styles.container}>
              


              
              <Image 
                  style= {{height:150, width: 150, marginTop:150}}
                  source= {require('/Users/Adi/restart/img/alphaacademylogo.png')}
              />
          
              <Text
                  style={{
                      color: 'white', 
                      fontSize:50, 
                      marginTop:30, 
                      fontFamily: 'TimesNewRomanPSMT'
                  }}>A L P H A
              </Text>
              
              <TextInput style = {styles.inputBox}
                  keyboardType = 'email-address' 
                  placeholder = "Enter Username" 
                  placeholderTextColor = 'white' 
                  color= 'white' 
                  autoCapitalize = 'none' 
                  underlineColorAndroid = 'rgba(0,0,0,0)' 
                  autoCorrect={false} 
                  returnKeyType = "next"
                  onChangeText={(username)=>this.setState({username})}
                  value={this.state.username}

              />    

              <TextInput style = {styles.inputBox2}
                  placeholder = 'Enter Your Password' 
                  color = 'white' 
                  placeholderTextColor='white' 
                  secureTextEntry 
                  underlineColorAndroid = 'rgba(0,0,0,0)' 
                  returnKeyType = "go"
                  onChangeText={(password)=>this.setState({password})}
                  value={this.state.password}
              />

              <TouchableOpacity style={styles.button}
                  onPress={this._login}
              > 

                  <Text style = {styles.buttonText}>Login</Text> 
              
              </TouchableOpacity>



          
          </View>

      );
  }

  _login= async()=>{
      if (login.user1.username === this.state.username && login.user1.password === this.state.password){
          console.log("Logged in")
      }
      else{
          console.log("Fail")
      }
  }
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container:{
    flexGrow:1, 
    justifyContent: 'flex-start', 
    alignItems: 'center',
    backgroundColor: '#555555'
},

inputBox:{
    height: 50, 
    width: 300, 
    borderColor:'white', 
    borderWidth:1, 
    margin:20, 
    padding: 16, 
    backgroundColor: 'rgba(255,255,255,0.1)', 
    borderRadius:25, 
    marginTop:80
    },


    buttonText:{
        fontSize:16, 
        fontWeight:'500', 
        color: 'white', 
        textAlign: 'center'
    },

    button:{
        width:300, 
        backgroundColor: '#1a1a1a', 
        borderRadius:25, 
        paddingVertical: 12,
    },
    inputBox2: {
        height:50, 
        width:300, 
        borderColor:'white', 
        borderWidth:1, 
        margin:20, 
        padding: 16, 
        backgroundColor: 'rgba(255,255,255,0.1)', 
        borderRadius:25,
    },
});
