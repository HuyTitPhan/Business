import React from 'react';
import Back from './Back';

import {

 Alert,

 SafeAreaView, StyleSheet, Switch, Text,

 TouchableOpacity,

 View

} from 'react-native';

import IconF from 'react-native-vector-icons/Fontisto';



const Warppers = () => {



 const [isNoti, setIsNoti] = React.useState(false);

 const [isNoti2, setIsNoti2] = React.useState(false);

 const toggleSwitch = () => setIsNoti(previousState => !previousState);

 const click = () => setIsNoti2(previousState => !previousState);



 const checkVersion = () => {
  setTimeout(() => Alert.alert("Notification","version is the latest"), 1000);
 }
 
 return (

  <SafeAreaView style={{ marginHorizontal: 20, marginTop: 40 }}>
   {/* setting Notifications */}

   <View style = {{marginBottom: 20}}>
   <Text style = {{fontSize: 18, fontWeight: 'bold', color: '#0B192D'}}>Notification</Text>
   <Text>Receive notifications and new information</Text>
   </View>

   <View style={{ flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: 1, marginBottom: 15}}>
    <View style={styles.viewText}>
     <Text style = {styles.text}>Notification</Text>
    </View>

    <View style={styles.switch}>
     <Switch
      trackColor={{ false: "#767577", true: "#81b0ff" }}
      thumbColor={isNoti ? "#3383F9" : "#f4f3f4"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isNoti}
     />
    </View>
   </View>

   <View style={{ flexDirection: 'row', borderBottomColor: 'gray', borderBottomWidth: 1, marginBottom: 15}}>
    <View style={styles.viewText}>
     <Text style = {styles.text}>Vibrate on notification</Text>
    </View>

    <View style={styles.switch}>
     <Switch
      trackColor={{ false: "#767577", true: "#81b0ff" }}
      thumbColor={isNoti2 ? "#3383F9" : "#f4f3f4"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={click}
      value={isNoti2}
     />
    </View>
   </View>

   {/* setting other */}

   <View style = {{marginBottom: 20}}>

   <Text style = {{fontSize: 18, fontWeight: 'bold', color: '#0B192D'}}>Other</Text>

   </View>



   <View>

    <View style={{ flexDirection: 'row' }}>
     <View style={styles.viewText}>
      <Text style = {styles.text}>Version</Text>
     </View>
     <View style = {styles.switch}>
      <Text style = {styles.text}>1.1.263</Text>
     </View>
    </View>

    <TouchableOpacity
    onPress={checkVersion}>
    <View style={{ flexDirection: 'row' }}>
     <View style={styles.viewText}>
      <Text style = {styles.text}>Check version</Text>
     </View>
     <View style = {styles.switch}>
      <IconF name='spinner' size={15}/>
     </View>
    </View>
    </TouchableOpacity>
   </View>
  </SafeAreaView>
 );

}



const styles = StyleSheet.create({

 container: {

 flex: 1,

  alignItems: "center",

  justifyContent: "center"

 },

 viewText: {

  justifyContent: 'center',

  flex: 4,

  marginBottom: 20

 },

 switch: {

  justifyContent: 'center',

  alignItems: 'flex-end',

  flex: 1

 }, 

 text: {

  color: '#485261'

 }



});



export default Warppers;