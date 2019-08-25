import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as firebase from 'firebase';
import 'firebase/firestore';

import AppNavigator from './navigation/AppNavigator';
import FirebaseConfig from './constants/ApiKeys.js';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Initialise firebase if not already done
  if (!firebase.apps.length) {
   firebase.initializeApp(FirebaseConfig);
  }

  // TODO:
  // FirebaseError: "projectId" not provided in firebase.initializeApp.
  //console.log(firebase.firestore());

  // TODO:
  // console.error: "[2019-08-25T06:05:07.299Z]  @firebase/database:", "FIREBASE FATAL ERROR: Can't determine Firebase Database URL.  Be sure to include databaseURL option when calling firebase.initializeApp(). "
  //console.log(firebase.database());

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }

}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

