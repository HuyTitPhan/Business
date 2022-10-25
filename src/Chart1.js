import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import {
  Alert, Dimensions, StyleSheet, View, Text
} from 'react-native';
import {
  LineChart, ProgressChart, ContributionGraph
} from "react-native-chart-kit";
import { useSelector } from "react-redux";
import IconF from 'react-native-vector-icons/FontAwesome';

const Warppers = () => {
  const campaign = useSelector((state) => state.campaign);

  // useFocusEffect(() => {
  //   console.log(campaign);
  //   if (campaign.length == 0) {
  //     Alert.alert("please create a campaign to use the function")
  //   }

  // })

  let days = Array(31).fill().map((_, i) => i + 1);


  // let moneys = days.map(m => {
  //   let moneyToDay = campaign.filter(c => Number(c.date.split('-')[2]) == Number(m))
  //   console.log("moneyToDay", moneyToDay);
  //   console.log("MonthItem", Number(m));
  //   return moneyToDay.reduce((c, v) => parseInt(v.budget) + c, 0)
  // });
  // console.log("moneys", moneys);
  const data = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.2, 0.3, 0.3, 0.7]
  }

  const commitsData = [
    { date: "2017-01-02", count: 1 },
    { date: "2017-01-03", count: 2 },
    { date: "2017-01-04", count: 3 },
    { date: "2017-01-05", count: 4 },
    { date: "2017-01-06", count: 5 },
    { date: "2017-01-30", count: 2 },
    { date: "2017-01-31", count: 3 },
    { date: "2017-03-01", count: 2 },
    { date: "2017-04-02", count: 4 },
    { date: "2017-03-05", count: 2 },
    { date: "2017-02-30", count: 4 }
  ];

  return (
    <View style={{ backgroundColor: '#fff9eb', height: '100%' }}>
      <ProgressChart
        data={data}
        width={Dimensions.get('window').width - 16}
        height={300}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />

<ContributionGraph
        values={commitsData}
        endDate={new Date("2017-04-01")}
        width={Dimensions.get('window').width - 16}
        height={300}
        numDays={105}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      
      
      
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