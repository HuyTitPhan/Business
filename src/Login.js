
import React from "react";
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, Button, View, TouchableOpacity, Dimensions, Image, useWindowDimensions } from "react-native";
import { isIphoneX } from "./utils";
const width = Dimensions.get("window").width
var height = Dimensions.get("window").height;
const logo = require('../src/images/2.png')
const Login = ({ navigation }) => {
    const [Username, onChangeUsername] = React.useState("");
    const [Password, onChangePassword] = React.useState("");

    const check = () => {

        if (Username.trim() == "") {
            Alert.alert('Please enter Username')
            return;
        }
        if (Password.trim() == "") {
            Alert.alert('Please enter Password')
            return;
        }

        if (Username.toLocaleLowerCase() == "test" && Password.toLocaleLowerCase() == "123456") {
            setTimeout(() => {
                navigation.navigate('HomeScreen');
            }, 1000);

            return;
        }

        setTimeout(() => {
            onChangeUsername("")
            onChangePassword("")
            Alert.alert("Incorrect username or password !")
        }, 1000);

    }
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', }}>

            <SafeAreaView style={{ alignItems: 'center', marginTop: isIphoneX() ? 100 : 80, }}>

                {/* {isIphoneX() } */}

                {/* <Text style={{ fontWeight: '700', fontSize: 30, marginBottom: 40 }}>ADS FOR BUSINESS</Text> */}
                <View style={{ width: 400, height: 350, marginBottom: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                    <Text style={{ fontSize: 20, fontWeight: '800', color: '#2c3e50' }}> BUSSINESS SUITE ADVERTS </Text>
                    {/* <Image
                        style={{ width: 80, height: 40, marginBottom: 20 }}
                        source={logo}
                    /> */}
                </View>

             
                <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 40 }}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Ilogin")}>
                        <Text style={{ color: '#fff', fontWeight: '700' }}>Login</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                        <Text style={{ color: '#2c3e50', fontSize: 16, fontWeight: '600' }}>Create Account</Text>
                    </TouchableOpacity>
                </View>


            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: width * 0.6,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: 'gray',
        borderRadius: 100,

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
        width: width * 0.7,
        height: 40,
        backgroundColor: '#2c3e50',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100
    }
});

export default Login;