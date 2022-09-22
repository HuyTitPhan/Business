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

    return (
        <VStack space={16} style={{ marginTop: 10, marginLeft: 10 }}>
            <View style={{}}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ textAlign: 'left', fontWeight: '700' }} >Post:</Text>
                    <Text > You're welcome.</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ textAlign: 'left', fontWeight: '700' }} >Date:</Text>
                    <Text > March 8, 2020 at 6:00 AM</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ textAlign: 'left', fontWeight: '700' }} >Id:</Text>
                    <Text > 318398</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                    <View style={{ borderWidth: 1, borderRadius: 5, backgroundColor: '#dedee0', }}>
                        <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }}>
                            <IconA name="like2" size={25} color="#2c3e50" />
                            <Text style={{}}> 23 reaction</Text>
                        </View>

                    </View>

                    <View style={{ borderWidth: 1, borderRadius: 5, backgroundColor: '#dedee0', }}>
                        <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }}>
                            <IconE name="comment" size={25} color="#2c3e50" />
                            <Text style={{}}> 7 comments</Text>
                        </View>

                    </View>

                    <View style={{ borderWidth: 1, borderRadius: 5, backgroundColor: '#dedee0', flexDirection: 'row', alignItems: 'center' }}>
                        <IconM name="share-outline" size={25} color="#2c3e50" />
                        <Text style={{}}> 2 share</Text>
                    </View>

                </View>
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


