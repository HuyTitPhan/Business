
import React from "react";
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, Button, View, TouchableOpacity, Dimensions } from "react-native";
import { isIphoneX } from "./utils";
const width = Dimensions.get("window").width

const Connect = ({ navigation }) => {
    const [Username, onChangeUsername] = React.useState("");
    const [Password, onChangePassword] = React.useState("");
    const [RePassword, onChangeRePassword] = React.useState("");

    const check = () => {

        // navigation.navigate("LoginFaceBook")
        navigation.navigate("Login")
        
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', }}>
            <SafeAreaView style={{ marginTop: isIphoneX() ? 100 : 80, alignItems: 'center' }}>

                {/* {isIphoneX() } */}

                <View style={{ alignItems: 'center', width: width * 0.8 }}>


                    <Text style={{ fontWeight: '700', fontSize: 30, marginBottom: 40 }}>CONTINUE</Text>
                    <View style={{}}>
                        <Text style={{ paddingLeft: 12, fontSize: 16 }}>Connect your Facebook <Text style={{ fontWeight: '700', fontSize: 17 }}>BUSSINESS SUITE ADVERTS</Text> </Text>
                        <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 20 }}>
                            <TouchableOpacity style={styles.btn} onPress={check}>
                                <Text style={{ color: '#fff', fontWeight: '700' }}>Continue </Text>
                            </TouchableOpacity>
                        </View>

                        {/* <Text style={{ paddingLeft: 12, fontSize: 15 }}>By clicking the button above, you agree to our <Text style={{ fontWeight: '700', fontSize: 16 }}>Terms and Conditions</Text> and confirm that you have read our <Text style={{ fontWeight: '700', fontSize: 16 }}>Privacy Policy</Text></Text> */}
                    </View>



                    <View style={{}}>

                        <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 20 }}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Text style={{ color: '#2c3e50', fontSize: 16, fontWeight: '600' }}>Back to Register</Text>
                            </TouchableOpacity>
                        </View>

                        {/* <Text style={{ paddingLeft: 12, fontSize: 15 }}>By clicking the button above, you agree to our <Text style={{ fontWeight: '700', fontSize: 16 }}>Terms and Conditions</Text> and confirm that you have read our <Text style={{ fontWeight: '700', fontSize: 16 }}>Privacy Policy</Text></Text> */}
                    </View>



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
        borderRadius: 10
    }
});

export default Connect;