import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextField,
  Image
} from "react-native";

import { MonoText } from "../components/StyledText";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,

          fontFamily: "TimesNewRomanPSMT"
        }}
      >
        Home Page Coach Ting
      </Text>

      <Image
        style={{ height: 200, width: 273, marginTop: 150 }}
        //source= {require('/Users/Adi/restart/img/August-2019-calendar.png')}
      />

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.messageButton}>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontFamily: "TimesNewRomanPSMT"
            }}
          >
            Messages
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.ProlfilesButton}>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontFamily: "TimesNewRomanPSMT"
            }}
          >
            Check In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/development-mode/"
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes"
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c9c9c9",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  button: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#555555",
    width: 200,
    height: 160,
    justifyContent: "center"
  },

  messageButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 64,
    marginTop: 80,
    backgroundColor: "#555555",
    textAlign: "center",
    marginLeft: 20
  },

  ProlfilesButton: {
    width: 150,
    height: 64,
    backgroundColor: "#555555",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
    marginLeft: 20
  }
});
