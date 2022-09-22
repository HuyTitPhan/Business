import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from "native-base";
import React from 'react';
import { createStore } from 'redux';
import MainStack from './Stack';
import reducers from './redux/reducers'
import { Provider } from 'react-redux';

const store = createStore(reducers)

function RootStack() {
    return (
        <Provider store={store}>
            <NativeBaseProvider>
                <NavigationContainer >
                    <MainStack />
                </NavigationContainer>
            </NativeBaseProvider>
        </Provider>
    );
}

export default RootStack;