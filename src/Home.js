
import { Center } from "native-base";
import React from "react";
import { Alert, Dimensions, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
const width = Dimensions.get("window").width
var height = Dimensions.get("window").height;
const logo = require('../src/images/2.png')
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconI from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from "react-redux";
const Ilogin = ({ navigation }) => {
  const [Username, onChangeUsername] = React.useState("");
  const Campaigns = useSelector((state) => state.campaign);

  const goCampain = () => {
    console.log("go campaign ........")
    navigation.navigate("Campaign");
  }

  const goChart = () => {
    console.log("go chart ........")
    navigation.navigate("Charts");
  }

  const goNews = () => {
    console.log("go news ........")
    navigation.navigate("News");
  }

  const goListCampaign = () => {
    console.log("go list campaign ........")
    navigation.navigate("CampaignList");
  }

  const goSearch = () => {
    console.log("go search ........")
    navigation.navigate("Search");
  }

  const goNoti = () => {
    console.log("go Notifications ........")
    navigation.navigate("Notifications");
  }

  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 20 }}>

      {/* Logo */}
      <View style={styles.top}>
        <View style={{ width: '50%', flexDirection: 'row' }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#3383F9' }}>Business</Text>
          </View>
          <Text style={{ fontSize: 11, fontWeight: 'bold' }}> Suite </Text>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#3383F9' }}>Adverts</Text>
          </View>
        </View>
        <TouchableOpacity 
        style={{ width: '50%', alignItems: 'flex-end' }}
        onPress = {goNoti}>
        <IconM name='notifications-none' size={25}></IconM>
        </TouchableOpacity>
      </View>

      <View>
        <Text>Mày muốn gì?</Text>
        <View style={styles.headerTop}>
          <View style={{ width: '33.33%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity 
            style={{ justifyContent: 'center', alignItems: 'center' }}
            onPress = {goCampain}>
              <View style={[styles.round, { backgroundColor: '#9C92E1' }]}>
                <IconI name="ios-add-outline" size={15}></IconI>
              </View>
              <Text style={{ fontSize: 10, fontWeight: '600' }}>Create Campaign</Text>
            </TouchableOpacity>
          </View>

          <View style={{ width: '33.33%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity 
            onPress={goSearch}
            style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View style={[styles.round, { backgroundColor: '#11C969' }]}>
                <IconI name="ios-search-outline" size={15}></IconI>
              </View>
              <Text style={{ fontSize: 10, fontWeight: '600' }}>Search</Text>
            </TouchableOpacity>
          </View>

          <View style={{ width: '33.33%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity 
            style={{ justifyContent: 'center', alignItems: 'center' }}
            onPress = {goNews}>
              <View style={[styles.round, { backgroundColor: '#42E3DF' }]}>
                <IconI name="ios-newspaper" size={15}></IconI>
              </View>
              <Text style={{ fontSize: 10, fontWeight: '600' }}>News</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Text style={{ fontSize: 15, marginTop: 30, fontWeight: 'bold' }}>Campaigns management</Text>
      <View style={{ flexDirection: 'row', marginVertical: 20 }}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity 
          onPress={goListCampaign}
          style={[styles.square, { backgroundColor: '#D0ECF5' }]}>
            <View style={styles.roundHeader}>
              <IconI name="open-outline" size={20}></IconI>
            </View>
            <Text style={styles.textHeader}>List Campaign</Text>
            <Text>{Campaigns.length} profile</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <TouchableOpacity style={[styles.square, { backgroundColor: '#E9E7F7' }]}>
            <View style={styles.roundHeader}>
              <IconI name="md-close" size={20}></IconI>
            </View>
            <Text style={styles.textHeader}>Calendar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={[styles.square, { backgroundColor: '#FAEBE8' }]}>
            <View style={styles.roundHeader}>
              <IconI name="md-close" size={20}></IconI>
            </View>
            <Text style={styles.textHeader}>Campaigns</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <TouchableOpacity 
          onPress = {goChart}
          style={[styles.square, { backgroundColor: '#E2F6F5' }]}>
            <View style={styles.roundHeader}>
              <IconI name="ios-stats-chart-outline" size={20}></IconI>
            </View>
            <Text style={styles.textHeader}>Chart</Text>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  top: {
    height: 30,
    flexDirection: 'row',
    marginBottom: 30
  },
  headerTop: {
    height: 80,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flexDirection: 'row'
  },
  round: {
    height: 40,
    width: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    height: 200,
    width: '90%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  roundHeader: {
    height: 60,
    width: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  textHeader: {
    marginTop: 10,
    fontWeight: 'bold',
    color: '#0B192D'
  }
});

export default Ilogin;