import React from 'react';
import {
  Dimensions, SafeAreaView, StyleSheet, Text, View
} from 'react-native';
import { ContributionGraph, ProgressChart } from "react-native-chart-kit";
import Back from './Back';

const width = Dimensions.get('window').width;

const Warppers = (props) => {


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

  const data = {
    labels: ["1-3", "4-6", "7-9", "10-12"], // optional
    data: [0.5, 0.3, 0.3, 0.7]
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

    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      {/* Back */}
      <Back back={() => props.navigation.goBack()} />
      <View>
      <Text style = {styles.text}>Quarter chart</Text>
      <ProgressChart
        data={data}
        width={Dimensions.get('window').width - 16}
        height={300}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#FFFFFF',
          backgroundGradientTo: '#FFFFFF',
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

      <View style = {{marginTop: 30}}>
      <Text style = {styles.text}>Daily chart</Text>
      <ContributionGraph
        values={commitsData}
        endDate={new Date("2017-04-01")}
        width={Dimensions.get('window').width - 16}
        height={300}
        numDays={105}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '##FFFFFF',
          backgroundGradientTo: '#FFFFFF',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          borderRadius: 16,
        }}
      />
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
  },
  text: {
    textAlign: 'center',
    color: '#0B192D',
    fontWeight: 'bold',
    fontSize: 18
  }
});

export default Warppers;