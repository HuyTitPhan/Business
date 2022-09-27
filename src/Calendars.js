import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import React, { useEffect } from "react";
import { View, Text, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import Back from './Back';

const Calendars = ({ navigation }) => {
    const [data, setData] = React.useState()

    const campaign = useSelector((state) => state.campaign);
    useEffect(() => {
        let obj = {...data}
        campaign.forEach(e => {
            obj[e.date] = { selected: true, selectedColor: 'red' }
        });
        setData( obj);
    console.log(campaign, 'campaign');

    }, [campaign])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Back back={() => navigation.goBack()} />
            <View>
                {/* <Calendar></Calendar> */}
                <CalendarList
                    // Callback which gets executed when visible months change in scroll view. Default = undefined
                    onVisibleMonthsChange={(months) => { console.log('now these months are visible', months); }}
                    // Max amount of months allowed to scroll to the past. Default = 50
                    pastScrollRange={50}
                    // Max amount of months allowed to scroll to the future. Default = 50
                    futureScrollRange={50}
                    // Enable or disable scrolling of calendar list
                    scrollEnabled={true}
                    // Enable or disable vertical scroll indicator. Default = false
                    showScrollIndicator={true}
                    markedDates={data}
                />
            </View>
        </SafeAreaView>
    );
}

export default Calendars;