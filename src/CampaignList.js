import { Text } from "native-base";
import React, { useEffect } from "react";
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import IconA from 'react-native-vector-icons/AntDesign';
import IconE from 'react-native-vector-icons/MaterialIcons';
import Back from './Back';
import { actRemoveCampaign } from "./redux/actCampaign";
const picture4 = require('./images/4.png');

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const Example = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {

    }, [])

    const campaigns = useSelector((state) => state.campaign);
    const result = campaigns.filter(c => c.status == props.route.params.status)

    console.log("------------------------------------")
    console.log("------------------------------------", result)
    console.log("=====> conten:", props.route.params.content)
    console.log("=====> status:", props.route.params.status)

    const removeList = (content, i) => {
        console.log("-----hello word----");
        dispatch(actRemoveCampaign(content));
        // const result = listCa.filter(item => item.content != content);
        console.log("buttt", result);
    }

    const goDetail = (code, status) => {
        props.navigation.navigate("DetailCampaign", { code: code });
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* Back */}
            <Back back={() => props.navigation.goBack()} />
            <View>
                <View style={{ marginBottom: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: '800', color: '#2c3e50' }}> {props.route.params.content} </Text>
                </View>
                {
                    result.length == 0
                        ?
                        <View style={{ paddingHorizontal: 20 }}>
                            <Text>There are no campaigns</Text>
                            <View style={{ height: 320, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                                <Image
                                    source={picture4}
                                    style={{ alignSelf: 'center', height: 260, width: width * 1.1, }}
                                    resizeMode='contain'
                                />
                            </View>
                        </View>
                        :
                        <ScrollView>
                            {
                                result.map((item, i) =>
                                    <View style={{ backgroundColor: '#ffffff', borderRadius: 20, paddingLeft: 20, marginBottom: 15 }}>
                                        <View style={{ marginTop: 20, flexDirection: 'row' }}>
                                            <View style={{ flex: 4 }}>
                                                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{item.content}</Text>
                                                <View style={{ flexDirection: 'row' }}>

                                                </View>
                                            </View>

                                            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                                                <TouchableOpacity onPress={() => goDetail(item.code)}>
                                                    <View style={[styles.round, { backgroundColor: '#3383F9' }]}>
                                                        <IconA name="arrowright" size={20} color='#FFFFFF' />
                                                    </View>
                                                </TouchableOpacity>
                                            </View>

                                        </View>

                                        <View style={styles.border}></View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={{ flex: 4 }}>
                                                <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
                                                    <View style={{ flexDirection: 'row', width: '50%' }}>
                                                        <IconE name="folder" size={20} color='#FFC20A' />
                                                        <Text style={{ fontWeight: '700' }}> {item.code}</Text>
                                                    </View>
                                                    <View style={{ flexDirection: 'row', width: '50%' }}>
                                                        <IconE name="date-range" size={20} color='black' />
                                                        <Text style={{ fontWeight: '700' }}> {item.dateStart}</Text>
                                                    </View>
                                                </View>

                                                <View style={[{ flexDirection: 'row', paddingVertical: 5 }]}>
                                                    <View style={{ flexDirection: 'column', width: '50%' }}>
                                                        <Text style={{ color: '#6b6e87' }}>Budget</Text>
                                                        <Text style={{ fontWeight: '700' }}>{item.budget}</Text>
                                                    </View>
                                                    <View style={{ flexDirection: 'column', width: '50%' }}>
                                                        <Text style={{ color: '#6b6e87' }}>Marketing</Text>
                                                        <Text style={{ fontWeight: '700' }}>{item.marketing}</Text>
                                                    </View>
                                                </View>
                                                <Text>{item.dis}</Text>
                                            </View>
                                            {
                                                item.status &&
                                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                    <TouchableOpacity onPress={() => removeList(item.content, i)}>
                                                        <IconA name="delete" size={25} />
                                                    </TouchableOpacity>
                                                </View>
                                            }
                                        </View>
                                    </View>
                                )
                            }

                        </ScrollView>
                }
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    icon: {
        paddingVertical: 30,
        paddingHorizontal: 10,
    },
    border: {
        borderBottomWidth: 2,
        borderColor: '#f3f4f8',
        marginBottom: 10,
        marginTop: 10
    },
    round: {
        height: 40,
        width: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Example;

