import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import {
  Alert, Dimensions, StyleSheet, View, Text
} from 'react-native';
import {
  LineChart
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

  let days = Array(31).fill().map((_, i) => i + 1);


  let moneys = days.map(m => {
    let moneyToDay = campaign.filter(c => Number(c.date.split('-')[2]) == Number(m))
    console.log("moneyToDay", moneyToDay);
    console.log("MonthItem", Number(m));
    return moneyToDay.reduce((c, v) => parseInt(v.budget) + c, 0)
  });
  console.log("moneys", moneys);

  return (
    <View style={{ backgroundColor: '#fff9eb', height: '100%' }}>
      <LineChart
        data={{
          labels: ["1", "3", "6", "9", "12", "15", "18", "21", "24", "27", "31"],
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
        <Text>Day</Text>
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