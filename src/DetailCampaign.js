
import React from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome';
import IconF from 'react-native-vector-icons/Foundation';
import { useDispatch, useSelector } from 'react-redux';
import Back from './Back';

const width = Dimensions.get("window").width
var height = Dimensions.get("window").height;
const logo = require('../src/images/2.png')

export const Example = ({ content, value }) => {
    return (
        <View style = {{marginHorizontal: 20}}>
        <View style= {{flexDirection: 'row'}}>
            
            <Text style = {styles.title}>{content}</Text>
            
            
            <Text style = {styles.content}>{value}</Text>
            
        </View>
        <View style={styles.border}></View>
        
        </View>
    )
}

const Detail = (props) => {
    const campaigns = useSelector((state) => state.campaign);
    console.log("campaigns", campaigns);
    const campaign = campaigns.find(c => c.code == props.route.params.code);
    console.log("detailCampaign", campaign);

    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1, }}>
            <Back back={() => props.navigation.goBack()} />
                    <View>
                        <View style = {{height: 30, backgroundColor: campaign.status ? '#E7FAF0' : '#F5E4E8', justifyContent: 'center', marginBottom: 20}}>
                            <View style = {{flexDirection: 'row', marginLeft: 15}}>
                                <IconF name='flag' size={20} color = {campaign.status ?'#11C969' : '#F7484A'}/>
                                <Text style = {{marginLeft: 10, color: campaign.status ?'#11C969' : '#F7484A'}}>{campaign.status ? 'Campaign' : 'Campaign canceled'}</Text>
                            </View>
                        </View>
                        <Example content = 'Content' value = {campaign.content}/>
                        <Example content = 'Describe' value = {campaign.describe}/>
                        <Example content = 'Marketing' value = {campaign.marketing}/>
                        <Example content = 'Code' value = {campaign.code}/>
                        <Example content = 'status' value = {campaign.level}/>
                        <Example content = 'Start Date' value = {campaign.dateStart}/>
                        <Example content = 'End Date' value = {campaign.dateEnd}/>
                        
                    </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        flex: 1,
        color: 'gray',
        fontSize: 13,
    }, 
    content: {
        flex: 1,
        color: '#0B192D',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'right'
    },
    border: {
        borderBottomWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
    }
});

export default Detail;