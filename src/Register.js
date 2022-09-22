
import React from "react";
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, Button, View, TouchableOpacity, Dimensions } from "react-native";
import { isIphoneX } from "./utils";
const width = Dimensions.get("window").width
import AsyncStorage from '@react-native-community/async-storage';
const Register = ({ navigation }) => {
    const [Username, onChangeUsername] = React.useState("");
    const [Email, onChangeEmail] = React.useState("");
    const [Password, onChangePassword] = React.useState("");
    const [RePassword, onChangeRePassword] = React.useState("");

    const check = () => {
        if (Username.trim() == "") {
            Alert.alert('Please enter Username')
            return;
        }
        if (Email.trim() == "") {
            Alert.alert('Please enter Email')
            return;
        }
        if (Password.trim() == "") {
            Alert.alert('Please enter Password')
            return;
        }
        if (RePassword.trim() == "") {
            Alert.alert('Please enter Password')
            return;
        }

        if (Password != RePassword) {
            Alert.alert("Password does not match");
            return
            // password does not match
        }


        let obj = {
            user: Username,
            pass: Password
        }

        saveAccount('login', obj)
        
        setTimeout(() => {
            navigation.navigate('Connect');
        }, 1000);

    }

    async function saveAccount(key, data) {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(data));
        } catch (error) {
            console.log('Cannot save data to local storage: ' + error);
        }
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <SafeAreaView style={{ alignItems: 'center', marginTop: isIphoneX() ? 100 : 80, }}>

                {/* {isIphoneX() } */}

                <Text style={{ fontWeight: '700', fontSize: 30, marginBottom: 40 }}>Create Account</Text>
                <View style={{}}>
                    <Text style={{ paddingLeft: 12, }}>Username</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeUsername}
                        placeholder="Username"
                        value={Username}
                    />
                </View>

                <View style={{}}>
                    <Text style={{ paddingLeft: 12, }}>Email</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeEmail}
                        placeholder="Email"
                        value={Email}
                    />
                </View>
                <View>
                    <Text style={{ paddingLeft: 12, }}>Password</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        onChangeText={onChangeRePassword}
                        placeholder="Password"
                        value={RePassword}
                    />
                </View>

                <View>
                    <Text style={{ paddingLeft: 12, }}>Repassword</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        onChangeText={onChangePassword}
                        placeholder="RePassword"
                        value={Password}
                    />
                </View>

                <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 20 }}>
                    <TouchableOpacity style={styles.btn} onPress={check}>
                        <Text style={{ color: '#fff', fontWeight: '700' }}>Sign up</Text>
                    </TouchableOpacity>
                </View>

                <View >
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={{ color: '#2c3e50', fontWeight: '700' }}>Back To Login Home !</Text>
                    </TouchableOpacity>
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
        borderRadius: 10
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
        borderRadius: 20
    }
});

export default Register;