import { Text } from "native-base";
import React, { useEffect } from "react";
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import IconA from 'react-native-vector-icons/AntDesign';
import IconE from 'react-native-vector-icons/MaterialIcons';
import Back from './Back';
import { actRemoveCampaign } from "./redux/actCampaign";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const Example = (props) => {
    const dispatch = useDispatch();
    const campaign = useSelector((state) => state.campaign);
    useEffect(() => {

    }, [])

    console.log("------------------------------------")
    console.log("------------------------------------", campaign)
    console.log("=====> conten:", props.route.params.conten)

    const removeList = (content, i) => {
        console.log("-----hello word----");
        dispatch(actRemoveCampaign(content));
        // const result = listCa.filter(item => item.content != content);
        console.log("buttt", campaign);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* Back */}
            <Back back={() => props.navigation.goBack()} />

            <View>
                <View style={{marginBottom: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: '800', color: '#2c3e50' }}> List Campaign </Text>
                </View>
                <ScrollView>
                    {
                        campaign.map((item, i) =>
                            <View style={{ backgroundColor: '#ffffff', borderRadius: 10, paddingLeft: 20, marginBottom: 15 }}>
                                <View style={{ marginTop: 20, flexDirection: 'row' }}>
                                    <View style={{ flex: 3 }}>
                                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{item.content}</Text>
                                    </View>

                                    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                                        <TouchableOpacity onPress={() => removeList(item.content, i)}>
                                            <IconA name="delete" size={25} />
                                        </TouchableOpacity>

                                    </View>
                                </View>

                                <View style={styles.border}></View>
                                <TouchableOpacity>
                                    <View style={{  flexDirection: 'row', paddingVertical: 5 }}>
                                        <View style={{ flexDirection: 'row', flex: 1 }}>
                                            <IconA name="save" size={20} />
                                            <Text style={{ color: '#6b6e87' }}> {item.code}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', flex: 1 }}>
                                            <IconE name="date-range" size={20} />
                                            <Text style={{ color: '#6b6e87' }}> {item.date}</Text>
                                        </View>
                                    </View>

                                    <View style={[{ flexDirection: 'row', paddingVertical: 5 }]}>
                                        <View style={{ flexDirection: 'column', flex: 1 }}>
                                            <Text style={{ color: '#6b6e87' }}>Budget</Text>
                                            <Text style={{ fontWeight: '700' }}>{item.budget}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'column', flex: 1 }}>
                                            <Text style={{ color: '#6b6e87' }}>Marketing</Text>
                                            <Text style={{ fontWeight: '700' }}>{item.marketing}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>


                            </View>
                        )
                    }

                </ScrollView>
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
    }
});

export default Example;

