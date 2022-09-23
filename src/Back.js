import React from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";
import IconI from 'react-native-vector-icons/Ionicons';
const width = Dimensions.get("window").width
var height = Dimensions.get("window").height;
const logo = require('../src/images/2.png')
const Back = (props) => {

  return (
      <View style={{ height: 20, marginTop: 5, marginLeft: 20, marginBottom: 30 }}>
        <TouchableOpacity
          onPress={props.back}>
          <IconI name="ios-return-down-back" size={25} />
        </TouchableOpacity>
      </View>
  );
};

export default Back;