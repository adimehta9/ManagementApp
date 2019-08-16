import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class CreateScheduleScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CoachText: "",
      dayText: "",
      startTimeText: "",
      endTimeText: "",
      placeText: "",
      PickerSelection: "Default Value",
      pickerDisplayed: false
    };
  }
  
  setPickerValue(newValue) {
    this.setState({
      pickerSelection: newValue
    });
    
    this.togglePicker();
  }
  
  togglePicker() {
    this.setState({
      pickerDisplayed: !this.state.pickerDisplayed
    });
  }
  
  
  render() {
    const pickerValues = [
      {
        title: "Elvin",
        value: "Elvin",
        key: 'aaaaaa'
      },
      {
        title: "Destyan",
        value: "Destyan",
        key: 'aaaaab'
        
      },
      {
        title: "Adi",
        value: "Adi",
        key: 'aaaaac'
        
      }
    ];
    
    
    
    return (
      <View style={styles.container}>
      
      <TouchableOpacity 
      style={{
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#c9c9c9',
        width:30,
        height:24,
        justifyContent: 'center'
      }}
      onPress={() => { this.props.navigation.navigate('Home') }}
      >
      </TouchableOpacity>


      <TouchableOpacity style={styles.coach} onPress={() => this.togglePicker()}>
      <Text style={{color:'white', marginLeft: 16}}>Coach</Text>
      </TouchableOpacity>
      
      
      <Modal
      visible={this.state.pickerDisplayed}
      animationType={"slide"}
      transparent={true}
      >
      <View
      style={{
        margin:10,
        padding: 20,
        backgroundColor: "#efefef",
        bottom: 20,
        left: 20,
        right: 20,
        alignItems: "center",
        position: "absolute"
      }}
      >
      <Text>Please pick a value</Text>
      {pickerValues.map((value, index)=>{
        return(
          <TouchableHighlight
          key={index}
          onPress={() => this.setPickerValue(value.value)}
          style={{ paddingTop: 4, paddingBottom: 4 }}
          >
          <Text>{value.title}</Text>
          </TouchableHighlight>
          );
          
        })}
        
        
        <TouchableHighlight
        onPress={() => this.togglePicker()}
        style={{ paddingTop: 4, paddingBottom: 4 }}
        >
        <Text style={{ color: "#999" }}>Cancel</Text>
        </TouchableHighlight>
        
        </View>
        </Modal>



      {/* <TextInput
        style={styles.inputBox}
        placeholder="Coach"
        placeholderTextColor="white"
        color="white"
        autoCapitalize="none"
        onChangeText={CoachText => this.setState({ CoachText })}
        value={this.state.CoachText}
      /> */}
      
      <TextInput
      style={styles.inputBox}
      placeholder="Day"
      placeholderTextColor="white"
      color="white"
      autoCapitalize="none"
      onChangeText={dayText => this.setState({ dayText })}
      value={this.state.dayText}
      />
      
      <TextInput
      style={styles.inputBox}
      placeholder="Start Time"
      placeholderTextColor="white"
      color="white"
      autoCapitalize="none"
      onChangeText={startTimeText => this.setState({ startTimeText })}
      value={this.state.startTimeText}
      />
      
      <TextInput
      style={styles.inputBox}
      placeholder="End Time"
      placeholderTextColor="white"
      color="white"
      autoCapitalize="none"
      onChangeText={endTimeText => this.setState({ endTimeText })}
      value={this.state.endTimeText}
      />
      
      <TextInput
      style={styles.inputBox}
      placeholder="Place"
      placeholderTextColor="white"
      color="white"
      autoCapitalize="none"
      onChangeText={placeText => this.setState({ placeText })}
      value={this.state.placeText}
      />
      
      
      
        

      <TouchableOpacity style={styles.button} onPress={this._submit}>
      <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      </View>
        
        
        
        
    );
  }
  _submit = async () => {
    console.log(this.state);
  };
      
}
    
CreateScheduleScreen.navigationOptions = {
  header: null,
};
    
    
    
const styles = StyleSheet.create({
  container: {
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#555555"
},
      
  inputBox: {
    height: 50,
    width: 300,
    borderWidth: 1,
    margin: 10,
    borderColor: "white",
    padding: 16,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 25,
    marginTop: 40
  },
      
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
    textAlign: "center"
  },
      
  button: {
    width: 300,
    backgroundColor: "#1a1a1a",
    borderRadius: 25,
    paddingVertical: 12,
    marginBottom:20,
    marginTop: 40
  },
  inputBox2: {
    height: 50,
    width: 300,
    borderColor: "white",
    borderWidth: 1,
    margin: 10,
    padding: 16,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 25
  },
      
  coach: {
    height: 50,
    width: 300,
    borderColor: "white",
    borderWidth: 1,
    justifyContent: 'center',
    marginTop: 50,
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,0.1)",

  },
  

      
  
      
      
});