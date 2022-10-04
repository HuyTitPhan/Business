
import React from "react";
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, Button, View, TouchableOpacity, Dimensions, Image, useWindowDimensions } from "react-native";
import { isIphoneX } from "./utils";
import DatePicker from 'react-native-date-picker'
import { ScrollView } from "native-base";
// import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from 'react-redux'
import { actAddCampaign } from "./redux/actCampaign";
import { RadioButton } from 'react-native-paper';
import Back from './Back';
import moment from 'moment';
import { Item } from "react-native-paper/lib/typescript/components/List/List";

const width = Dimensions.get("window").width
var height = Dimensions.get("window").height;
const logo = require('../src/images/2.png')

const Detail = (props) => {
    const [level, setLevel] = React.useState('once');
    const [content, onContent] = React.useState("");
    const [describe, onDescribe] = React.useState("");
    const [marketing, onMarketing] = React.useState("");
    const [budget, onBudget] = React.useState("");
    const [dateStart, setDateStart] = React.useState(new Date())
    const [dateEnd, setDateEnd] = React.useState(new Date())
    const [open, setOpen] = React.useState(false)
    const [listCampaign, setListCampaign] = React.useState([])
    const dispatch = useDispatch();

    const campaigns = useSelector((state) => state.campaign);
    const campaign = campaigns.filter(c => c.code = props.route.params.code);
    console.log("detailCampaign", campaign);

    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1, }}>
            <Back back={() => props.navigation.goBack()} />
            {
                campaign.map((item, i) => 
                    <View style={{ marginHorizontal: 20 }}>
                        <Text style={styles.title}>Content</Text>
                        <Text style={styles.content}>{item.content}</Text>

                        <Text style={styles.title}>Describe</Text>
                        <Text style={styles.content}>{item.describe}</Text>

                        <Text style={styles.title}>Marketing</Text>
                        <Text style={styles.content}>{item.marketing}</Text>

                        <Text style={styles.title}>Code</Text>
                        <Text style={styles.content}>{item.code}</Text>

                        <Text style={styles.title}>Start Date</Text>
                        <Text style={styles.content}>{item.dateStart}</Text>

                        <Text style={styles.title}>End Date</Text>
                        <Text style={styles.content}>{item.dateEnd}</Text>
                    </View>
                )
            }
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        color: 'gray',
        fontSize: 10,
        fontWeight: 'bold',
    }, 
    content: {
        color: '#0B192D',
        fontSize: 15
    }
});

export default Detail;