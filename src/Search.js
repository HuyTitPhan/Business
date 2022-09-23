import React from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import IconI from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from "react-redux";
const width = Dimensions.get("window").width
var height = Dimensions.get("window").height;
const logo = require('../src/images/2.png')
const Search = (props) => {
  const [code, setCode] = React.useState("");
  const campaigns = useSelector((state) => state.campaign);
  const back = () => {
    props.navigation.goBack();
  }

  const searchCode = () => {
    var campaign = campaigns.filter(c => c.code == code);
    console.log("=====> searchCode campaign: ", campaign);
    // if(campaign.length == 0) {

    // }
    return campaign;
  }

  return (
    <SafeAreaView style = {{backgroundColor: '#FFFFFF', flex: 1}}>
      <View style = {{flex: 8}}>
      {/* Back */}
      <View style={{ height: 20, marginTop: 5, marginLeft: 20, marginBottom: 30 }}>
        <TouchableOpacity
          onPress={back}>
          <IconI name="ios-return-down-back" size={25} />
        </TouchableOpacity>
      </View>

      {/* Top Search */}
      <View style={{ marginHorizontal: 20 }}>
        <Text style={{ fontWeight: 'bold', color: '#0B192D', fontSize: 25 }}>Search Campaign</Text>
        <View style={{ backgroundColor: '#EEEEEE', height: 50, marginTop: 20, flexDirection: 'row' }}>
          <View style= {{width: '15%', justifyContent: 'center', alignItems: 'center',}}>
            <IconI name="ios-search-sharp" size={25} />
          </View>
          <TextInput 
          style = {{width: '80%'}}
          onChangeText = {setCode} />
        </View>
      </View>
      </View>

      <View style = {{flex: 1, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 20}}>
        <TouchableOpacity 
        onPress={searchCode}
        style = {{height: 40, width: 90, backgroundColor: '#3383F9', borderRadius: 8, justifyContent: 'center'}}>
          <Text style = {{textAlign: 'center', color: '#FFFFFF'}}>Search</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    // height: height / 5,
    width: width * 0.6,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'gray',
    borderRadius: 10,
  },
  input2: {
    height: height / 6,
    width: width * 0.6,
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

export default Search;