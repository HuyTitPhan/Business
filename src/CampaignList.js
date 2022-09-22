import {
    NativeBaseProvider, Text, VStack, Heading
} from "native-base";
import React, { useEffect } from "react";
import { View, Dimensions, ScrollView, TouchableHighlight, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
// import { TouchableOpacity } from "react-native-gesture-handler";
import IconA from 'react-native-vector-icons/AntDesign';
import IconE from 'react-native-vector-icons/MaterialIcons';
import { actRemoveCampaign } from "./redux/actCampaign";
import IconI from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const Example = (props) => {
    const dispatch = useDispatch();
    const [listCa, setList] = React.useState([])
    const campaign = useSelector((state) => state.campaign);
    useEffect(() => {
        setList(campaign);
    }, [])

    // if(listCa.size == 0) {
    //     console.log("dfdfdff");
    // } else {
    //     console.log("werewrer");
    // }

    console.log("------------------------------------")
    console.log("=====>ll", listCa)
    const removeList = (content, i) => {
        console.log("-----hello word----");
        dispatch(actRemoveCampaign(content));
        // const result = listCa.filter(item => item.content != content);
        console.log("buttt", campaign);
    }

    const back = () => {
        props.navigation.navigate("Campaign");
    }
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: 50, justifyContent: 'center', marginLeft: 10 }}>
                <TouchableOpacity onPress={back}>
                    <View style={{ flexDirection: 'row' }}>
                        <IconI name="arrow-undo" size={15} />
                        <Text> Back</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <View style={{ height: 70, marginBottom: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: '800', color: '#2c3e50' }}> List Campaign </Text>
                </View>
                <ScrollView>
                    {
                        campaign.map((item, i) =>
                            <View style={{ backgroundColor: '#ffffff', borderRadius: 10, paddingLeft: 20, marginBottom: 15 }}>
                                <View style={{ marginTop: 20, flexDirection: 'row' }}>
                                    <View style={{ flex: 3 }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Information</Text>
                                    </View>

                                    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                                        <TouchableOpacity onPress={() => removeList(item.content, i)}>
                                            <IconA name="delete" size={25} />
                                        </TouchableOpacity>

                                    </View>
                                </View>

                                <View style={styles.border}></View>

                                <View style={{ paddingVertical: 5 }}>
                                    <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                                        <IconA name="save" size={20} />
                                        <Text style={{ fontWeight: '600', fontSize: 20 }}> {item.content}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <IconE name="date-range" size={20} />
                                        <Text style={{ color: '#6b6e87' }}> {item.date}</Text>
                                    </View>
                                </View>

                                <View style={[{ flexDirection: 'row', paddingVertical: 10 }]}>
                                    <View style={{ flexDirection: 'column', flex: 1 }}>
                                        <Text style={{ color: '#6b6e87' }}>Budget</Text>
                                        <Text style={{ fontWeight: '700' }}>{item.budget}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'column', flex: 1 }}>
                                        <Text style={{ color: '#6b6e87' }}>Marketing</Text>
                                        <Text style={{ fontWeight: '700' }}>{item.marketing}</Text>
                                    </View>
                                </View>

                            </View>
                        )
                    }

                </ScrollView>
            </View>
        </SafeAreaView >
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