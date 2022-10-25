import { Text, VStack } from "native-base";
import React from "react";
import { Dimensions, ScrollView, View, SafeAreaView, StyleSheet } from "react-native";
import Back from './Back';
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    
    renderItem: {
        flexDirection: 'row',
        paddingVertical: 10,
        height: 50,
        alignItems: 'center',
        marginBottom: 10,
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: 20
    },
    text: {
        flex: 1,
        textAlign: 'center',
        fontSize: 13,
        fontWeight: 'bold'
    },
});

export default function Home({navigation}) {
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
        <SafeAreaView style={styles.container}>
            {/* back */}
            <ScrollView>
            <Back back={() => navigation.goBack()} />
            <View style = {{marginHorizontal: 20}}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ flex: 4, color: 'gray', fontSize: 8, fontWeight: 'bold', fontFamily: 'Time' }}>INDUSTRY</Text>
                <Text style={{ flex: 2, color: 'gray', fontSize: 8, fontWeight: 'bold', textAlign: 'right', marginRight: 10 }}>SEARCH NETWORK DISPLAY NETWORK</Text>
                <Text style={{ flex: 2, color: 'gray', fontSize: 8, fontWeight: 'bold', textAlign: 'center' }}>RATIO (%)</Text>
            </View>
            
                {
                    list.map((item, i) =>

                        <View style={styles.renderItem}>
                            <Text style={{ flex: 4, fontSize: 15, fontWeight: 'bold', color: '#1B1D21' }}>{item.industry}</Text>
                            <View style={{ flex: 2, height: 35 }}>
                                <Text style={[styles.text, {color: '#00CC88'}]}>{item.cpc1}</Text>
                                <Text style={styles.text}>{item.cpc2}</Text>
                            </View>
                            <View style={{ flex: 2, height: 35, justifyContent: 'center', alignContent: 'center', backgroundColor: '#00CC88' }}>
                                <Text style={{ textAlign: 'center', fontSize: 13, color: 'white', borderRadius: 5}}>{Math.round(item.cpc1 / item.cpc2 * 100) / 100}%</Text>
                            </View>
                        </View>

                    )
                }
            
            </View>
            </ScrollView>

        </SafeAreaView >
    );
}


