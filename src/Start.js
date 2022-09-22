import CookieManager from '@react-native-community/cookies';
import React, { Component } from 'react';
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
const picture1 = require('./images/1.png');
const picture2 = require('./images/2.png');
const picture3 = require('./images/3.png');
const picture4 = require('./images/4.png');
const backColor = '#2c3e50';
var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;
export default class Start extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonShow: false,
            txtHash: '',
        };
        this.indexSwiper = 0;
    }
    onScroll(e) {
        var offSetX = e.nativeEvent.contentOffset.x;
        this.indexSwiper = Math.round(offSetX / deviceWidth);
        if (offSetX >= deviceWidth) {
            this.setState({ buttonShow: true });
        }
        else {
            this.setState({ buttonShow: false });
        }
    }



    async OnStarted() {
        await CookieManager.clearAll()
            .then((success) => {
            });
        this.props.navigation.navigate("HomeScreen", { text: this.state.txtHash });
    }

    OnNext() {

        this.ScrollView.scrollTo({ x: (this.indexSwiper + 1) * deviceWidth, y: 0, animated: true });
    }

    OnScrollContent(i) {
        this.indexSwiper = i;
    }

    render() {
        return (
            <View style={{ flex: 1,backgroundColor:'#fff' }}>
            <View style={{ width: deviceWidth, height: deviceHeight, alignContent: 'center', alignSelf: 'center', }}>

                {/* < TouchableOpacity style={{ backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', padding: 8, width: 80, height: 40, borderRadius: 20, position: 'absolute', top: 40, right: 10, zIndex: 1000 }}
                    onPress={() => this.OnStarted()}
                >
                    <Text style={{ color: backColor, fontSize: 18, fontWeight: 'bold', }}>Skip</Text>
                </TouchableOpacity> */}

                <View style={{ height: 480, alignSelf: 'center', marginTop: 40 }}>
                    <ScrollView
                        ref={ScrollView => this.ScrollView = ScrollView}
                        pagingEnabled={true}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        onScroll={(e) => this.onScroll(e)}
                        loop={false}
                    >
                        <View style={styles.centerView}>
                            <View style={{ height: 320, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                                <Image
                                    source={picture1}
                                    style={{ alignSelf: 'center', height: 260, width: deviceWidth * 1.1, }}
                                    resizeMode='contain'
                                />
                            </View>
                            <View style={{ marginTop: 40 }}>
                                <Text style={styles.topText}>Create your campaign in minutes</Text>
                            </View>
                        </View>
                        <View style={[styles.centerView, { height: deviceHeight, }]}>
                            <View style={{ height: 320, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                                <Image
                                    source={picture2}
                                    style={{ alignSelf: 'center', height: 260, width: deviceWidth * 1.1, }}
                                    resizeMode='contain'
                                />
                            </View>
                            <View style={{ marginTop: 40 }}>
                                <Text style={styles.topText}>Blend report data from different sources</Text>
                            </View>
                        </View>
                        <View style={styles.centerView}>
                            <View style={{ height: 320, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                                <Image
                                    source={picture3}
                                    style={{ alignSelf: 'center', height: 260, width: deviceWidth * 1.1, }}
                                    resizeMode='contain'
                                />
                            </View>
                            <View style={{ marginTop: 40 }}>
                            <Text style={styles.topText}>Measure and manage your ad.</Text>
                             
                            </View>
                        </View>
                        <View style={styles.centerView}>
                            <View style={{ height: 320, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                                <Image
                                    source={picture4}
                                    style={{ alignSelf: 'center', height: 260, width: deviceWidth * 1.1, }}
                                    resizeMode='contain'
                                />
                            </View>
                            <View style={{ marginTop: 40 }}>
                            <Text style={styles.topText}>What are you waiting for?</Text>
                            </View>
                        </View>
                     

                    </ScrollView>
                </View>
                {/* {this.state.buttonShow && */}
                    <TouchableOpacity style={{ elevation: 5, alignSelf: 'center', backgroundColor: backColor, width: 220, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 25, }}
                        onPress={() => this.OnStarted()}
                    >
                        <Text style={{ color: '#fff', fontSize: 20 }}>Start</Text>
                    </TouchableOpacity>
                {/* } */}
                <View style={{ flexDirection: 'row', position: 'absolute', bottom: 40, width: deviceWidth / 1.05, alignSelf: 'center', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', width: deviceWidth / 4, justifyContent: 'space-between', alignSelf: 'center' }}>
                        <View style={{ backgroundColor: this.indexSwiper == 0 ? backColor : '#bdc3c7', height: 6, width: 20, borderRadius: 6 }}></View>
                        <View style={{ backgroundColor: this.indexSwiper == 1 ? backColor : '#bdc3c7', height: 6, width: 20, borderRadius: 6 }}></View>
                        <View style={{ backgroundColor: this.indexSwiper == 2 ? backColor : '#bdc3c7', height: 6, width: 20, borderRadius: 6 }}></View>
                        <View style={{ backgroundColor: this.indexSwiper == 3 ? backColor : '#bdc3c7', height: 6, width: 20, borderRadius: 6 }}></View>
                    </View>

                </View>

            </View>
        </View >
        );
    }
}

const styles = StyleSheet.create({
    centerView: {
        width: deviceWidth,
        height: 500,
    },
    centerText: {
        color: '#222f3e',
        fontSize: 18,
        marginTop: 30,
        textAlign: 'center',
        fontWeight: '200',
        width: deviceWidth / 1.2,
        alignSelf: 'center',
    },
    topText: {
        color: '#222f3e',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        width: deviceWidth / 1.3,
        alignSelf: 'center',
    },
});
