import React from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import IconI from 'react-native-vector-icons/Ionicons';
import Back from './Back'
const width = Dimensions.get("window").width
var height = Dimensions.get("window").height;
const logo = require('../src/images/2.png')
const Notifications = (props) => {

  return (
    <SafeAreaView style = {{flex: 1}}>
      {/* Back */}
      <Back back = {() => props.navigation.goBack()}/>

      {/* Notifications */}
      <View style={{ marginHorizontal: 20 }}>
        <Text style={{ fontWeight: 'bold', color: '#0B192D', fontSize: 25 }}>Notifications</Text>
        {/* <View style={{ backgroundColor: '#FFFFFF', marginTop: 20, flexDirection: 'row', borderRadius: 10, paddingVertical: 5}}>
          <View style= {{width: '15%', justifyContent: 'center', alignItems: 'center'}}>
            <IconI name="ios-notifications-sharp" size={25} />
          </View>
          <View style = {{width: '80%'}}>
            <Text style = {{fontWeight: 'bold'}}>WellCome</Text>
            <Text>Chào mừng bạn đến với Bình Nguyên Vô Tận</Text>
            <Text>Hãy bắt đầu và tận hưởng tính năng nào</Text>
          </View>
        </View> */}
        <View style = {{height: height/1.5, justifyContent: 'center', alignItems: 'center'}}>
          <Text style = {{color:'#767577', fontSize: 16}}> Notification is empty </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Notifications;