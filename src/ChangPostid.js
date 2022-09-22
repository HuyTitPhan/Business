import {
    NativeBaseProvider, Text, VStack, Heading
} from "native-base";
import React from "react";
import { View, Dimensions, ScrollView, TouchableHighlight } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Entypo';
import IconA from 'react-native-vector-icons/AntDesign';
import IconE from 'react-native-vector-icons/EvilIcons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
const width = Dimensions.get('window').width;
export const Example = () => {


    const list = [
        { title: 'Are you looking for Auto Battler', date: ' Jan 1, 2021 at 4:00 AM' },
        { title: ' Check out these projects', date: ' Jan 8, 2021 at 11:00 AM' },
        { title: 'These are what you are looking for.', date: ' Feb 2, 2021 at 8:00 PM' },
        { title: 'The total amount of all funding rounds', date: ' Feb 22, 2021 at 6:00 AM' },
        { title: 'gaming category on the blockchain ', date: ' April 25, 2021 at 1:00 PM' },
        { title: 'Youre welcome', date: ' May 8, 2021 at 8:00 AM' },

    ]
    return (
        <VStack space={16} style={{ marginTop: 10, marginLeft: 10 }}>
            <View style={{}}>


                {list.map((item, i) =>
                    <View style={{ borderBottomWidth: 1, borderBottomColor:'gray',marginBottom:15 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ textAlign: 'left', fontWeight: '700' }} >Post:</Text>
                            <Text > {item.title}</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ textAlign: 'left', fontWeight: '700' }} >Date:</Text>
                            <Text > {item.date}</Text>
                        </View>

                    
                    </View>


                )}


            </View>

        </VStack>
    )
}

export default ({ navigation }) => {


    return (
        <NativeBaseProvider  >

            <VStack space={4} alignItems="center">

                <View style={{ flexDirection: 'row', marginTop: 40, marginBottom: 10, alignSelf: 'flex-start' }}>
                    <TouchableOpacity style={{ width: 50, }} onPress={() => navigation.goBack()} >
                        <Icon name="chevron-left" size={30} color="#2c3e50" />
                    </TouchableOpacity>
                    <View style={{ width: width - 100, }}>
                        <Text style={{ textAlign: 'center', fontWeight: '700', fontSize: 20 }}> Tracking</Text>
                    </View>
                </View>

            </VStack>
            <ScrollView style={{ backgroundColor: '#fff' }}>
                <Example />
            </ScrollView>
        </NativeBaseProvider>
    )
}


