import React from 'react';
import { WebView } from 'react-native-webview';
import { SafeAreaView } from "react-native";
export const Home = () => {
    return (
        <SafeAreaView style = {{flex: 1}}>
            <WebView source={{ uri: 'https://www.hubspot.com/facebook-marketing' }} />
        </SafeAreaView>
    );
};

export default Home;
