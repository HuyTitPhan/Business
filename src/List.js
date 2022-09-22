import {
    NativeBaseProvider, Text, VStack, Heading
} from "native-base";
import React from "react";
import { View, Dimensions, ScrollView, TouchableHighlight } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Entypo';
const width = Dimensions.get('window').width;
export const Example = () => {
    const list = [
        { industry: 'Advocacy', cpc1: 1.43, cpc2: 0.62 },
        { industry: 'Auto', cpc1: 2.46, cpc2: 0.58 },
        { industry: 'B2B', cpc1: 3.33, cpc2: 0.79 },
        { industry: 'Consumer Services', cpc1: 6.40, cpc2: 0.81 },
        { industry: 'Dating and Personals', cpc1: 2.78, cpc2: 1.49 },
        { industry: 'Ecommerce', cpc1: 1.16, cpc2: 0.45 },
        { industry: 'Education', cpc1: 2.40, cpc2: 0.47 },
        { industry: 'Employment Services', cpc1: 2.04, cpc2: 0.78 },
        { industry: 'Finance and Insurance', cpc1: 3.44, cpc2: 0.86 },
        { industry: 'Health and Medical', cpc1: 2.62, cpc2: 0.63 },
        { industry: 'Home Goods', cpc1: 2.94, cpc2: 0.60 },
        { industry: 'Industrial Services', cpc1: 2.56, cpc2: 0.54 },
        { industry: 'Legal', cpc1: 6.75, cpc2: 0.72 },
        { industry: 'Real Estate', cpc1: 2.37, cpc2: 0.75 },
        { industry: 'Technology', cpc1: 3.80, cpc2: 0.51 },
        { industry: 'Travel and Hospitality', cpc1: 1.53, cpc2: 0.44 },
    ]
    return (
        <VStack space={16} alignItems="center" style={{ marginTop: 50 }}>
            <View style={{ flexDirection: 'row', }}>
                <Text style={{ width: width / 3, textAlign: 'center', fontWeight: '700' }}>INDUSTRY</Text>
                <Text style={{ width: width / 3, textAlign: 'center', fontWeight: '700' }}>AVERAGE CPC (SEARCH NETWORK)</Text>
                <Text style={{ width: width / 3, textAlign: 'center', fontWeight: '700' }}>AVERAGE CPC (DISPLAY NETWORK)</Text>
            </View>
            {
                list.map((item, i) =>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ width: width / 3, textAlign: 'center' }}>{item.industry}</Text>
                        <Text style={{ width: width / 3, textAlign: 'center' }}>{item.cpc1}</Text>
                        <Text style={{ width: width / 3, textAlign: 'center' }}>{item.cpc2}</Text>
                    </View>
                )
            }
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
                        <Text style={{ textAlign: 'center', fontWeight: '700', fontSize: 20 }}>List Pricing</Text>
                    </View>
                </View>

            </VStack>
            <ScrollView style={{ backgroundColor: '#fff' }}>
                <Example />
            </ScrollView>
        </NativeBaseProvider>
    )
}


