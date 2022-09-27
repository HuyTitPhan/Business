import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import IconF from 'react-native-vector-icons/Feather';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconA from 'react-native-vector-icons/Ionicons';
import IconO from 'react-native-vector-icons/FontAwesome';
import IconFO from 'react-native-vector-icons/Fontisto';
import { getBottomSpace, isIphoneX } from './utils';
function renderIcon(label) {
    console.log("dddfddf",label)

    return (
        <View style={{ marginTop: 5 }}>
            {label == 'Home' && <IconFO name='home' size={25} color='#2c3e50' />}
            {label == 'Settings' && <IconM name='scatter-plot' size={25} color="#2c3e50" />}
            {label == 'Change' && <IconA name='create-outline' size={25} color="#2c3e50" />}
            {label == 'Support' && <IconM name='support-agent' size={25} color="#2c3e50" />}
            {label == 'Tracking' && <IconO name='comments-o' size={25} color="#2c3e50" />}
            {label == 'Calendars' && <IconO name='sticky-note-o' size={25} color="#2c3e50" />}
            {label == 'Charts' && <IconO name='line-chart' size={25} color="#2c3e50" />}
            {label == 'Campaign' && <IconO name='wpforms' size={50} color="#2c3e50" />}
            {label == 'Price' && <IconFO name='money-symbol' size={25} color="#2c3e50" />}
        </View>

    )

}
export default function MyTabBar({ state, descriptors, navigation }) {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', paddingBottom: getBottomSpace() }}
                    >
                        {renderIcon(label)}
                        <Text style={{ color: isFocused ? '#34ace0' : '#222', fontWeight: isFocused ? '600' : '400' }}>
                            {label}
                        </Text>


                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
