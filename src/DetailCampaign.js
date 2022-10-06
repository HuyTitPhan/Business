
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
import IconF from 'react-native-vector-icons/Foundation';

const width = Dimensions.get("window").width
var height = Dimensions.get("window").height;
const logo = require('../src/images/2.png')

export const Example = ({ content, value }) => {
    return (
        <View style= {{flexDirection: 'row', marginHorizontal: 20}}>
            <Text style = {styles.title}>{content}</Text>
            <Text style = {styles.content}>{value}</Text>
        </View>
    )
}

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
    const status = props.route.params.status;
    console.log("detailCampaign", campaign);
    console.log("status", status);

    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1, }}>
            <Back back={() => props.navigation.goBack()} />
            {
                campaign.map((item, i) => 
                    <View>
                        <View style = {{height: 30, backgroundColor: status ? '#E7FAF0' : '#F5E4E8', justifyContent: 'center', marginBottom: 20}}>
                            <View style = {{flexDirection: 'row', marginLeft: 15}}>
                                <IconF name='flag' size={20} color = {status ?'#11C969' : '#F7484A'}/>
                                <Text style = {{marginLeft: 10, color: status ?'#11C969' : '#F7484A'}}>{status ? 'Campaign' : 'Campaign canceled'}</Text>
                            </View>
                        </View>
                        <Example content = 'Content' value = {item.content}/>
                        <Example content = 'Describe' value = {item.describe}/>
                        <Example content = 'Marketing' value = {item.marketing}/>
                        <Example content = 'Code' value = {item.code}/>
                        <Example content = 'Start Date' value = {item.dateStart}/>
                        <Example content = 'End Date' value = {item.dateEnd}/>
                    </View>
                   
                )
            }
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        flex: 1,
        color: 'gray',
        fontSize: 10,
    }, 
    content: {
        flex: 1,
        color: '#0B192D',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'right'
    }
});

export default Detail;