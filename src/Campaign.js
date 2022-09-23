
import React from "react";
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, Button, View, TouchableOpacity, Dimensions, Image, useWindowDimensions } from "react-native";
import { isIphoneX } from "./utils";
import DatePicker from 'react-native-date-picker'
import { ScrollView } from "native-base";
// import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from 'react-redux'
import { actAddCampaign } from "./redux/actCampaign";
import moment from 'moment';
import Back from './Back';

const width = Dimensions.get("window").width
var height = Dimensions.get("window").height;
const logo = require('../src/images/2.png')

const Campaign = ({ props, navigation }) => {
    const [Username, onChangeUsername] = React.useState("");
    const [content, onContent] = React.useState("");
    const [describe, onDescribe] = React.useState("");
    const [marketing, onMarketing] = React.useState("");
    const [budget, onBudget] = React.useState("");
    const [date, setDate] = React.useState(new Date())
    const [open, setOpen] = React.useState(false)
    const [listCampaign, setListCampaign] = React.useState([])
    const dispatch = useDispatch();

    const saveList = () => {
        if (content === undefined || content == null || content.length <= 0 ||
            budget === undefined || budget == null || budget.length <= 0) {
            Alert.alert("Please check the information again");
        } else {
            const obj = {
                content: content,
                describe: describe,
                marketing: marketing,
                budget: budget,
                date: moment(date).format('YYYY-MM-DD')
            }
            listCampaign.push(obj)
            setListCampaign(listCampaign)
            console.log(obj);
            console.log(listCampaign);
            dispatch(actAddCampaign(obj));
        }
    }

    const showList = () => {
        navigation.navigate("CampaignList", { list: listCampaign });
    }

    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            {/* Back */}
            <Back back={() => navigation.goBack()} />
            <View style={{ marginBottom: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: '800', color: '#2c3e50' }}> Campaign </Text>
            </View>
            <ScrollView style={{ backgroundColor: '#fff', flex: 1 }}>
                <View style={{flex: 1}}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.text}>Content  </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onContent}
                            value={content}
                        />
                    </View>

                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.text}>Describe :  </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onDescribe}
                            value={describe}
                        />
                    </View>

                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.text}>Marketing :  </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onMarketing}
                            value={marketing}
                        />
                    </View>

                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.text}>Budget :  </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onBudget}
                            value={budget}
                            keyboardType='numeric'
                        />
                    </View>

                    <View>
                        <Text style={[styles.text,]}>Time :  </Text>
                        {/* <Text style={{ width: width * 0.3, margin: 12, }}>{date.toDateString()}</Text>
                            <TouchableOpacity style={{ width: width * 0.3 }} onPress={() => setOpen(true)}>
                            <Icon name='calendar' size={25} color="#2c3e50" />
                            </TouchableOpacity> */}
                        <View style={{ marginHorizontal: 15, marginBottom: 10 }}>
                            <TouchableOpacity
                                style={{ paddingTop: 10 }}
                                onPress={() => setOpen(true)}>
                                <Text style={{
                                    fontSize: 18,
                                    color: '#1b283b'
                                }}>{date.toLocaleDateString()}</Text>
                                <View style={styles.border}></View>

                            </TouchableOpacity>
                        </View>
                        <DatePicker
                            modal
                            mode='date'
                            open={open}
                            date={date}
                            onConfirm={(date) => {
                                setOpen(false)
                                setDate(date)
                            }}
                            onCancel={() => {
                                setOpen(false)
                            }}
                        />

                    </View>


                </View>
            </ScrollView>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 40, width: width * 0.5 }}>
                    <TouchableOpacity style={styles.btnShow} onPress={showList}>
                        <Text style={{ color: '#0b192d', fontWeight: '700', fontSize: 15 }}>Show List</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 20, marginBottom: 40, width: width * 0.5 }}>
                    <TouchableOpacity style={styles.btn} onPress={saveList}>
                        <Text style={{ color: '#fff', fontWeight: '700', fontSize: 15 }}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        // height: height / 5,
        marginLeft: 15,
        marginBottom: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginRight: 15,
        fontSize: 18
    },
    input2: {
        height: height / 6,
        width: width * 0.6,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: 'gray',
        borderRadius: 10,
    },
    des: {
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: 'gray',
        borderRadius: 10
    },
    btn: {
        width: width * 0.25,
        height: 40,
        backgroundColor: '#0b192d',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: width * 0.2,
    },
    btnShow: {
        height: 40,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        marginRight: width * 0.2,
    }, text: {
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    border: {
        borderBottomWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
        marginTop: 12
    }
});

export default Campaign;