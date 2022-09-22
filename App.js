import React, { useEffect } from 'react';
import Root from './src/Root';
import SplashScreen from 'react-native-splash-screen'
import codePush from "react-native-code-push";

let codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };

function App() {
  useEffect(() => {
     SplashScreen.hide();
  //    codePush.sync({
  //     updateDialog: false,
  //     installMode: codePush.InstallMode.IMMEDIATE
  // });
},[]);
  return (
    <Root />
  );
}

MyApp = codePush(codePushOptions)(App);
export default App;
