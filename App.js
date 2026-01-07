/**
 * Domestic Violence Support App - Main Application Component
 * Author: Kendahl Bingham
 * 
 * This is the root component that sets up navigation for the entire app.
 * It uses React Navigation's Stack Navigator to allow users to move between
 * different screens (Home, Emergency Contacts, Safety Plan, Resources, Helpline).
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import EmergencyContactsScreen from './src/screens/EmergencyContactsScreen';
import SafetyPlanScreen from './src/screens/SafetyPlanScreen';
import ResourcesScreen from './src/screens/ResourcesScreen';
import HelplineScreen from './src/screens/HelplineScreen';

// Create the stack navigator instance for managing screen transitions
const Stack = createStackNavigator();

/**
 * Main App Component
 * 
 * Sets up the navigation container and configures all app screens.
 * Uses stack navigation to allow users to navigate between screens
 * with a back button and header.
 * 
 * @returns {JSX.Element} The complete app with navigation
 */
function App() {
  return (
    // NavigationContainer wraps the entire navigation structure
    <NavigationContainer>
      {/* Stack Navigator manages the screen stack and navigation history */}
      <Stack.Navigator
        initialRouteName="Home" // App starts at the Home screen
        screenOptions={{
          // Global styling for all screen headers
          headerStyle: {
            backgroundColor: '#6B46C1', // Purple header background
          },
          headerTintColor: '#fff', // White text and icons in header
          headerTitleStyle: {
            fontWeight: 'bold', // Bold header titles
          },
        }}>
        {/* Define each screen in the navigation stack */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Weather App'}}
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

export default App;
