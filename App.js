import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/login';
import DashboardScreen from './src/screens/dashboard';
import CustomHeader from './src/components/header';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Login" component={LoginScreen} options={{ header: () => <CustomHeader /> }}/>
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ header: () => <CustomHeader /> }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}