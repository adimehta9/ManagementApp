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


// TODO: Rewrite for json - Make sure auto indent indents properly
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
            
            <FlatListItem item={item} index={index}>
            
            </FlatListItem>
            );
            
            
          }}>
          
          
          </FlatList>
          
          
          
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
          }
        )