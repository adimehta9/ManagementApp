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

import DateTimePicker from 'react-native-modal-datetime-picker';
//import moment from 'moment';

// TODO: 
// 2) Google how to restrict the pickers for these fields (e.g. Date Picker and Location picker with lat and lon)
// 3) Implement it
// 4) Do firebase.firestore() and set the data (if you need a dummy value, just go Geopoint(0.0, 0.0) first)
export default class CreateScheduleScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CoachText: "",
      startTime: new Date(),
      startTimeText: "Starting Time",
      endTime: new Date(),
      endTimeText: "Ending Time",
      placeText: "",
      pickerDisplayed: false,
      isStartPickerVisible: false,
      isEndPickerVisible: false
    };
  }
  
  //Update selected startTime in state and update startTimeText
  setStartTime = startTimePicked => {
    
    // Hide picker
    this.hidePickers();
    
    this.setState({
      startTime: startTimePicked,
    });
    
    // TODO: async issue
    this.setState({startTimeText: this.state.startTime.toString()})
    //console.log("start time = " + this.state.startTime.toString());
    
  }

  //Update selected endTime in state and update endTimeText
  setEndTime = endTimePicked => {
    
    // Hide picker
    this.hidePickers();
    
    this.setState({
      endTime: endTimePicked,
    });
    
    // TODO: async issue
    this.setState({endTimeText: this.state.endTime.toString()})
    //console.log("end time = " + this.state.endTime.toString());
    
  }
  
// ==============================
// |   Picker state functions   |
// ==============================

  // For coach
  setPickerValue(newValue) {
    this.setState({
      pickerSelection: newValue
    });
    
    this.togglePicker();
  }
  
  // For coach
  togglePicker() {
    this.setState({
      pickerDisplayed: !this.state.pickerDisplayed
    });
  }

  hidePickers = () => {
    this.setState({
      isStartPickerVisible:false,
      isEndPickerVisible:false,
    })
  }
 
  hideStartPicker = ()=> {
    this.setState({
      isStartPickerVisible:false,
    })
  }

  hideEndPicker = ()=> {
    this.setState({
      isEndPickerVisible:false,
    })
  }
  
  showStartPicker = () => {
    this.setState({
      isStartPickerVisible:true
    })
  }
  
  showEndPicker = () => {
    this.setState({
      isEndPickerVisible:true
    })
  }
  
// =================================
// |  END Picker state functions   |
// =================================
  
  
  
  
  
  
  
  
  
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
        
        {/* <TextInput
          style={styles.inputBox}
          placeholder="Day"
          placeholderTextColor="white"
          color="white"
          autoCapitalize="none"
          onChangeText={dayText => this.setState({ dayText })}
          value={this.state.dayText}
        /> */}
        
        {/* Displays Date and time selected :) */}
        <TouchableOpacity style={styles.inputBox} onPress={this.showStartPicker}>
          <Text style={{ color: 'white'}}> {this.state.startTimeText} </Text>
        </TouchableOpacity>
        
        {/* Picker for start time */}
        <DateTimePicker
        isVisible = {this.state.isStartPickerVisible} 
        onCancel={this.hideStartPicker}
        onConfirm={this.setStartTime}
        mode='datetime'
        />
        
        
        <TouchableOpacity style={styles.inputBox} onPress = {this.showEndPicker}>
        {/* <Text style={{ color: 'white'}}>Ending</Text> */}
        <Text style={{ color: 'white'}}> {this.state.endTimeText} </Text>
      </TouchableOpacity>
      
       {/* Picker for end time */}
       <DateTimePicker
        isVisible = {this.state.isEndPickerVisible} 
        onCancel={this.hideEndPicker}
        onConfirm={this.setEndTime}
        mode='datetime'
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