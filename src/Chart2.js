
import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
  TouchableOpacity
} from 'react-native';
import {
  BarChart
} from "react-native-chart-kit";
import { useSelector } from "react-redux";
import IconF from 'react-native-vector-icons/FontAwesome';

const Warppers = () => {
  const campaign = useSelector((state) => state.campaign);
  useFocusEffect(() => {
    console.log(campaign);
    if (campaign.length == 0) {
      Alert.alert("please create a campaign to use the function")
    }
  })

  let months = Array(12).fill().map((_, i) => i + 1);


  let moneys = months.map(m => {
    let moneyToMonth = campaign.filter(c => Number(c.date.split('-')[1]) == Number(m))
    console.log("moneyToDay", moneyToMonth);
    return moneyToMonth.reduce((c, v) => parseInt(v.budget) + c, 0)
  });
  console.log("moneys", moneys);

  return (

    <View style={{ backgroundColor: '#fff9eb', height: '100%' }}>
      <BarChart
        data={{
          labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
          datasets: [
            {
              data: moneys
            }
          ]
        }}
        width={Dimensions.get("window").width} // from react-native
        height={500}


        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#ffa726",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
      
      <View style= {{paddingLeft: 10}}>
        <View style = {{flexDirection: 'row', marginVertical: 15}}>
        <IconF name='caret-up' size={20} style= {{width: 20}}></IconF>
        <Text>Budget</Text>
        </View>
        <View style = {{flexDirection: 'row', marginBottom: 60}}>
        <IconF name='caret-right' size={20} style= {{width: 20}}></IconF>
        <Text>Month</Text>
        </View>
      </View>
    </View>

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