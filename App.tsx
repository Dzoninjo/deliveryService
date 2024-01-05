import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './android/app/src/screens/Splash';
import Home from './android/app/src/screens/Home';
import Login from './android/app/src/screens/Login';
import {
  StyleSheet
} from 'react-native';


function App() {
  
  const RootStack = createStackNavigator();

  return (
    <NavigationContainer>
    <RootStack.Navigator
    initialRouteName='Splash'
    screenOptions={{
      headerTitleAlign:"center",
      headerStyle:{
        backgroundColor:"#0080ff"
      },
      headerTintColor:"#ffffff",
      headerTitleStyle:{
        fontSize:25,
        fontWeight:"bold",
      },
  
    }}
  >
      <RootStack.Screen name="Home"
       component={Home}
       options={{
   //     headerShown:false,
       }}
      />
      <RootStack.Screen name="Splash"
       component={Splash}
       options={{
        headerShown:false,
       }} />
       <RootStack.Screen name="Login"
       component={Login}
       options={{
       headerShown:false,
       }}
      />
    </RootStack.Navigator>
  </NavigationContainer>
);
}

const styles = StyleSheet.create({
 
});

export default App;
