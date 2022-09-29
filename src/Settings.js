import {
    HStack, Switch, Text, VStack
} from "native-base";
import React, { useState } from "react";
import { Alert, Dimensions, Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import IconI from 'react-native-vector-icons/Ionicons';
const usalogo = require('./images/usa.png')
const el = require('./images/el.png')

const width = Dimensions.get("window").width
var height = Dimensions.get("window").height;
export const Example = ({ name }) => {
    return (
        <VStack space={16} alignItems="center" style={{ margin: 10 }}>
            <HStack space={'40'}>
                <Text fontSize={20} >{name}</Text>
                <Switch defaultIsChecked={false} colorScheme="emerald" />
            </HStack>
        </VStack>
    )
}

export const Moreconfig = ({ name }) => {
    const [selectedValue, setSelectedValue] = useState(true);

    return (
        <VStack space={16} alignItems="center" style={{ margin: 10 }}>
            <HStack space={'40'}>
                <Text fontSize={20} >{name}</Text>
                <TouchableOpacity onPress={() => setSelectedValue(!selectedValue)} style={{ flexDirection: 'row', alignItems: 'center', }}>

                    {selectedValue ?
                        <Image style={{ width: 25, height: 25 }} source={usalogo}></Image>
                        : <Image style={{ width: 25, height: 25 }} source={el}></Image>
                    }
                    <IconI name="chevron-forward" size={25} color="#2c3e50" />
                </TouchableOpacity>

            </HStack>
        </VStack>
    )
}

function logout(navigation) {
    setTimeout(() => {
        navigation.navigate("Ilogin")
    }, 2000);

}

export default ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ height: height * 0.7 }}>
                <View style={{ marginTop: 30 }}>
                    <Example name='Notification' />
                    {/* <Example name='Dark theme' /> */}
                    <Moreconfig name='Currency     ' />
                </View>
            </View>

            

        </View>
    )
}
