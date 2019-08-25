import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
// TODO: Convert to json
import flatListData from '../data/flatListData';
import { TouchableOpacity } from 'react-native-gesture-handler';


class FlatListItem extends React.Component{
  render(){
    return(
      <View style={
        {
          flex:1, 
          backgroundColor: this.props.index%2==0?'#555555': 'black',
          width:390,
          justifyContent:"center",
          height:80,
        }
      }>
      <Text style={styles.flatListItem}>{this.props.item.name}</Text>
      
      </View>
      );
    }
  }
  
  export default class ProfilesListScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
        
        
        
        <FlatList data={flatListData} 
        renderItem={({item,index})=>{
          
          return(
          <TouchableOpacity>
            <FlatListItem item={item} index={index}>
            
            </FlatListItem>

            </TouchableOpacity>  
            );
            
            
          }}>
          
          
          </FlatList>
          
          
          <TouchableOpacity
          style={{
            alignItems: 'center',
            padding: 10,
            backgroundColor: '#555555',
            width:30,
            height:24,
            justifyContent: 'center',
            margin:30
          }}
          onPress={() => { this.props.navigation.navigate('Home') }}
          
          
          >
          
          
          </TouchableOpacity>
          
          
          </View>
          );
        }
      }
      
      ProfilesListScreen.navigationOptions = {
        header: null,
      };
      
      
      function handleLearnMorePress() {
        WebBrowser.openBrowserAsync(
          'https://docs.expo.io/versions/latest/workflow/development-mode/'
          );
        }
        
        function handleHelpPress() {
          WebBrowser.openBrowserAsync(
            'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
            );
          }
          
          const styles = StyleSheet.create({
            container:{
              backgroundColor: '#c9c9c9',
              flexGrow:1, 
              justifyContent: 'center', 
              alignItems: 'center', 
            },
            
            flatListItem:{
              color:'white', 
              padding: 10, 
              fontSize:16,
            }
          })