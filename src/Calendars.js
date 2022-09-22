import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import React, { useEffect } from "react";
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from "react-redux";

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
        <View style={{ backgroundColor: 'white', paddingTop: 60, paddingBottom: 100 }}>
            <View style={{ marginBottom: 20 }}>
                <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '800', color: '#2c3e50' }}>Remind</Text>
            </View>
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
        </View>
    );
}

export default Calendars;