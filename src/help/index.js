
import React from "react";
import { Dimensions, View, ScrollView, Text, SafeAreaView } from "react-native";
const height = Dimensions.get("window").height
const width = Dimensions.get("window").width
import WebView from 'react-native-webview';
import Icon from 'react-native-vector-icons/Entypo';
import { isIphoneX } from "../utils";
import { TouchableOpacity } from "react-native-gesture-handler";
const HelpScreen = ({ navigation, route }) => {

  console.log('huydev', route)

  return (
    <View style={{ flex: 1 }}>

      <View style={{ flexDirection: 'row', marginTop: 40, marginBottom: 10, alignSelf: 'flex-start' }}>
        <TouchableOpacity style={{ width: 50, }} onPress={() => navigation.goBack()} >
          <Icon name="chevron-left" size={30} color="#2c3e50" />
        </TouchableOpacity>
        <View style={{ width: width - 100, }}>
          <Text style={{ textAlign: 'center', fontWeight: '700', fontSize: 20 }}>{route.params.text}</Text>
        </View>
      </View>

      <ScrollView>
        <WebView
          ref={(input) => this.input = input}
          style={{ height: height - 50 }}
          source={{ uri: route.params.link }}
          onNavigationStateChange={this.handleURL}
          onMessage={(event) => this.onMessage(event)}
          startInLoadingState={true}
        >
        </WebView>
      </ScrollView>
    </View>
  );
};


export default HelpScreen;