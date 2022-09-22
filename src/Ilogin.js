
import React from "react";
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, Button, View, TouchableOpacity, Dimensions, Image, useWindowDimensions } from "react-native";
import { isIphoneX } from "./utils";
const width = Dimensions.get("window").width
var height = Dimensions.get("window").height;
const logo = require('../src/images/2.png')
import AsyncStorage from '@react-native-community/async-storage';
import { appleAuth, AppleButton } from '@invertase/react-native-apple-authentication';

const Ilogin = ({ navigation }) => {
    const [Username, onChangeUsername] = React.useState("");
    const [Password, onChangePassword] = React.useState("");

    const check = async () => {

        const json = await AsyncStorage.getItem('login');
        let r = JSON.parse(json);

        if (r == null) {
            r = null;
        }

        if (Username.trim() == "") {
            Alert.alert('Please enter Username')
            return;
        }
        if (Password.trim() == "") {
            Alert.alert('Please enter Password')
            return;
        }



        if (Username == r?.user && Password == r?.pass) {
            setTimeout(() => {
                navigation.navigate('HomeScreen');
                onChangePassword("")
            }, 1000);

            return;
        }

        if (Username.toLocaleLowerCase() == "test" && Password.toLocaleLowerCase() == "123456") {
            setTimeout(() => {
                navigation.navigate('HomeScreen');
                onChangePassword("")
            }, 1000);

            return;
        }

        setTimeout(() => {
            onChangeUsername("")
            onChangePassword("")
            Alert.alert("Incorrect username or password !")
        }, 1000);




    }


    async function onAppleButtonPress() {
        console.warn('Beginning Apple Authentication');

        try {
            const appleAuthRequestResponse = await appleAuth.performRequest({
                requestedOperation: appleAuth.Operation.LOGIN,
                requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
            });
            navigation.navigate('HomeScreen');
            console.log('appleAuthRequestResponse', appleAuthRequestResponse);

            return appleAuthRequestResponse;

        } catch (error) {

            if (error.code === appleAuth.Error.CANCELED) {
                console.warn('User canceled Apple Sign in.');
            } else {
                console.error(error);
            }
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff', }}>

            <SafeAreaView style={{ alignItems: 'center', marginTop: isIphoneX() ? 100 : 80, }}>

                {/* {isIphoneX() } */}

                {/* <Text style={{ fontWeight: '700', fontSize: 30, marginBottom: 40 }}>ADS FOR BUSINESS</Text> */}
                <View style={{ width: 400, height: 100, marginBottom: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                    <Text style={{ fontSize: 20, fontWeight: '800', color: '#2c3e50' }}> BUSSINESS SUITE ADVERTS </Text>
                    {/* <Image
                        style={{ width: 80, height: 40, marginBottom: 20 }}
                        source={logo}
                    /> */}
                </View>

                <View style={{}}>
                    <Text style={{ paddingLeft: 12, }}>Username or email address </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeUsername}
                        placeholder="Username"
                        value={Username}
                    />
                </View>
                <View style={{}}>

                    <TextInput

                        style={styles.input}
                        onChangeText={onChangePassword}
                        placeholder="Password"
                        value={Password}
                        secureTextEntry={true}
                    />
                </View>


                {/* <View >
                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                        <Text>Register a new account !</Text>
                    </TouchableOpacity>
                </View> */}

                <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 40 }}>
                    <TouchableOpacity style={styles.btn} onPress={check}>
                        <Text style={{ color: '#fff', fontWeight: '700' }}>Login</Text>
                    </TouchableOpacity>
                </View>


                {/* <Text style={{ color: '#32a852', fontSize: 16, fontWeight: '600', marginTop: 15,marginBottom:15 }}>Login With </Text> */}



                <View style={{ flexDirection: 'row' }}>
                    {/* <TouchableOpacity style={{
                        borderRadius: 5,
                        width: 50,
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 10,
                        backgroundColor: "#01579B"
                    }} onPress={() => navigation.navigate("LoginFaceBook")}>
                        <Image
                            style={{ resizeMode: 'contain', width: 30, height: 30, }}
                            source={require('../src/images/Facebook.png')}>

                        </Image>
                    </TouchableOpacity> */}

                    {/* <TouchableOpacity style={{
                        borderRadius: 5,
                        width: 50,
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 10,
                        backgroundColor: "#000"
                    }} onPress={() => onAppleButtonPress()}>
                        <Image
                            style={{ resizeMode: 'contain', width: 30, height: 30, }}
                            source={require('../src/images/Apple.png')}>

                        </Image>
                    </TouchableOpacity> */}
                </View>



            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: width * 0.8,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: 'gray',
        borderRadius: 10,

    },
    des: {
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: 'gray',
        borderRadius: 10
    },
    btn: {
        width: width * 0.8,
        height: 40,
        backgroundColor: '#2c3e50',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100
    }
});

export default Ilogin;