
import React from "react";
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, Button, View, TouchableOpacity, Dimensions, Image, useWindowDimensions } from "react-native";
import { isIphoneX } from "./utils";
const width = Dimensions.get("window").width
var height = Dimensions.get("window").height;
const logo = require('../src/images/2.png')
const Ilogin = ({ navigation }) => {
  const [Username, onChangeUsername] = React.useState("");

  const check = () => {
    if (Username.trim() == "") {
      Alert.alert('Please enter Post ID')
      return;
    }

    if (Username.toLocaleLowerCase() == "318398") {
      setTimeout(() => {
        navigation.navigate('Post1');
      }, 1000);

      return;
    }

    setTimeout(() => {
      Alert.alert("Post ID not found!")
    }, 1000);

  }
  return (
    <View style={{ backgroundColor: '#fff', }}>
      <View style={{ backgroundColor: '#fff', height: height * 0.7 }}>
        <SafeAreaView style={{ alignItems: 'center', marginTop: isIphoneX() ? 100 : 80, }}>

          {/* {isIphoneX() } */}

          {/* <Text style={{ fontWeight: '700', fontSize: 30, marginBottom: 40 }}>ADS FOR BUSINESS</Text> */}
          <View style={{ width: 200, height: 100, marginBottom: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

            <Text style={{ fontSize: 20, fontWeight: '800', color: '#2c3e50' }}>Tracking </Text>
            {/* <Image
              style={{ width: 80, height: 40, marginBottom: 20 }}
              source={logo}
            /> */}
          </View>

          <View style={{}}>

            <TextInput
              style={styles.input}
              onChangeText={onChangeUsername}
              placeholder="318398"
              value={Username}
            />
          </View>
        </SafeAreaView>
      </View>
      <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 40 }}>
        <TouchableOpacity style={styles.btn} onPress={check}>
          <Text style={{ color: '#fff', fontWeight: '700' }}>Search</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: height / 8,
    width: width * 0.9,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'gray',
    borderRadius: 10,
  },
  des: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'gray',
    borderRadius: 10
  },
  btn: {
    width: width * 0.8,
    height: 40,
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  }
});

export default Ilogin;