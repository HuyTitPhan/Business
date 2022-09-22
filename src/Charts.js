import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
  TouchableOpacity,
  SafeAreaView 
} from 'react-native';
import MonthChart from './Chart1'
import YearChart from './Chart2'
const width = Dimensions.get('window').width;

const Warppers = () => {


  const [screen1, onScreen1] = React.useState(0);
  const [screen2, onScreen2] = React.useState(1);
  const [button, onButton] = React.useState([{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFBD59', width: width * 0.2, borderRadius: 5 },
  { justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray', width: width * 0.2, borderRadius: 5 }]);

  const clickMonth = () => {
    onScreen1(0);
    onScreen2(1);
  }
  const clickYear = () => {
    onScreen1(1);
    onScreen2(0);
  }


  return (

    <SafeAreaView  style={{justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
      <View style={{ height: 30, flexDirection: 'row', backgroundColor: 'gray', width: width * 0.4, borderRadius: 5,  marginTop: 50, marginBottom: 30}}>
        <TouchableOpacity
          style={button[screen1]}
          onPress={clickMonth}>
          <Text style={{ color: 'white' }}>Month</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={button[screen2]}
          onPress={clickYear}>
          <Text style={{ color: 'white' }}>Year</Text>
        </TouchableOpacity>
      </View>
      <View>
        {
          screen1 == 0 ? <MonthChart /> : <YearChart />
        }
      </View>
    </SafeAreaView >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  chart: {
    flex: 1
  }
});

export default Warppers;