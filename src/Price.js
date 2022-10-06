import { Text, VStack } from "native-base";
import React from "react";
import { Dimensions, ScrollView, View, SafeAreaView } from "react-native";
import Back from './Back';
const width = Dimensions.get('window').width;
export const Example = (props) => {
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
        <SafeAreaView style={{ marginTop: 20, paddingHorizontal: 10 }}>
            <Back back={() => props.navigation.goBack()} />
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ flex: 3, color: 'gray', fontSize: 8, fontWeight: 'bold', fontFamily: 'Time' }}>INDUSTRY</Text>
                <Text style={{ flex: 1, color: 'gray', fontSize: 8, fontWeight: 'bold', textAlign: 'right', marginRight: 10 }}>SEARCH NETWORK</Text>
                <Text style={{ flex: 1, color: 'gray', fontSize: 8, fontWeight: 'bold', textAlign: 'right' }}>DISPLAY NETWORK</Text>
            </View>
            <ScrollView>
            {
                list.map((item, i) =>
                   
                        <View style={{ flexDirection: 'row', paddingVertical: 10, height: 50, alignItems: 'center' }}>
                            <Text style={{ flex: 3, fontSize: 15, fontWeight: 'bold' }}>{item.industry}</Text>
                            <Text style={{ flex: 1, textAlign: 'right', fontSize: 15, fontWeight: 'bold', color: '#f96332', marginRight: 10 }}>{item.cpc1}</Text>
                            <Text style={{ flex: 1, textAlign: 'center', fontWeight: 'bold', fontSize: 15, backgroundColor: '#f96332', color: 'white', borderRadius: 5, }}>{item.cpc2}</Text>
                        </View>
                    
                )
            }
            </ScrollView>

        </SafeAreaView >
    )
}

export default Example;

// export default ({ navigation }) => {


//     return (
//         <NativeBaseProvider  >

//             <VStack space={4} alignItems="center">

//                 <View style={{ flexDirection: 'row', marginTop: 0, marginBottom: 10, alignSelf: 'flex-start' }}>
//                 </View>

//             </VStack>
//             <ScrollView style={{ backgroundColor: '#fff' }}>
//                 <Example />
//             </ScrollView>
//         </NativeBaseProvider>
//     )
// }


