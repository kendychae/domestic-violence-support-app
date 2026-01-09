import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import EmergencyContactsScreen from './src/screens/EmergencyContactsScreen';
import SafetyPlanScreen from './src/screens/SafetyPlanScreen';
import ResourcesScreen from './src/screens/ResourcesScreen';
import HelplineScreen from './src/screens/HelplineScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6B46C1',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'DV Support App'}}
        />
        <Stack.Screen
          name="EmergencyContacts"
          component={EmergencyContactsScreen}
          options={{title: 'Emergency Contacts'}}
        />
        <Stack.Screen
          name="SafetyPlan"
          component={SafetyPlanScreen}
          options={{title: 'Safety Plan'}}
        />
        <Stack.Screen
          name="Resources"
          component={ResourcesScreen}
          options={{title: 'Resources'}}
        />
        <Stack.Screen
          name="Helpline"
          component={HelplineScreen}
          options={{title: '24/7 Helpline'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
