import React from 'react';
import { WebView } from 'react-native-webview';
import { SafeAreaView, ScrollView } from "react-native";
import Back from './Back';
export const Home = (props) => {
    return (
            <SafeAreaView style={{ flex: 1 }}>
                {/* <ScrollView> */}
                <Back back={() => props.navigation.goBack()} />
                <WebView source={{ uri: 'https://www.hubspot.com/facebook-marketing' }} />
                {/* </ScrollView> */}
            </SafeAreaView>
        
    );
};

export default Home;
