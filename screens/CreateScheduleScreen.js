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

import firebase from 'firebase';

import DateTimePicker from 'react-native-modal-datetime-picker';
//import LocationView from "react-native-location-view";
import moment from 'moment';
import ApiKeys from '../constants/ApiKeys';

// TODO: Pick 5 locations and get their coordinates. Then create a picker for these 5 locations.
export default class CreateScheduleScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CoachText: "",
      startTime: new Date(),
      startTimeText: "Starting Time",
      endTime: new Date(),
      endTimeText: "Ending Time",
      location: new firebase.firestore.GeoPoint(1.303305,103.777646),
      placeText: "Location",
      pickerDisplayed: false,
      isStartPickerVisible: false,
      isEndPickerVisible: false,
    };
  }
  
  //Update selected startTime in state and update startTimeText
  setStartTime = startTimePicked => {
    
    // Hide picker
    this.hidePickers();
    
    this.setState({
      startTime: startTimePicked,
      startTimeText: startTimePicked.toString()
    });
  }
  
  //Update selected endTime in state and update endTimeText
  setEndTime = endTimePicked => {
    
    // Hide picker
    this.hidePickers();
    
    this.setState({
      endTime: endTimePicked,
      endTimeText: endTimePicked.toString()
    });
    
  }
  
  // TODO: make it work
  chooseLocation() {
    
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
  
  
  handlePicker = (datetime) => {
    this.setState({
      isVisible: false, 
      chosenDate: moment (datetime). format('MMM, Do YYYY HH:mm')
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
  
  // Adds coach, startTime, endTime, location to firebase with unique document id
  _submit = async() => {

    firebase.firestore().collection("schedules").add({
      coach: this.state.CoachText,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      location: this.state.location,
    }).then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
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
      
      
      
      {/* Back button */}
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
      
      
      
      
      {/* Coach Button */}
      <TouchableOpacity style={styles.coach} onPress={() => this.togglePicker()}>
      <Text style={{color:'white', marginLeft: 16}}>Coach</Text>
      </TouchableOpacity>
      
      
      
      
      {/* Showing the Coach Menu */}
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
        
        
        
        <TouchableOpacity style={styles.inputBox} onPress = {this.chooseLocation}>
        <Text style={{ color: 'white'}}> {this.state.placeText} </Text>
        {/* <TextInput
          style={styles.inputBox}
          placeholder="Place"
          placeholderTextColor="white"
          color="white"
          autoCapitalize="none"
          //onChangeText={placeText => this.setState({ placeText })}
          value={this.state.placeText}
        /> */}
        </TouchableOpacity>
        
        {/* TODO: Nice to have  */}
        {/* <View style={styles.googleMapsPickerView}>
        <LocationView style={styles.googleMapsPicker}
        apiKey={ ApiKeys.GoogleMaps.apiKey }
        initialLocation={{
          latitude: 1.303305, 
          longitude: 103.777646,
        }}
        />
      </View> */}
      
      
      
      {/* TODO: Set info in firebase */}
      <TouchableOpacity style={styles.button} onPress={this._submit}>
      <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      
      </View>
      
      
      
      
      );
    }
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
    
    googleMapsPickerView: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      display: 'none',
    },
    
    
    
    
  });