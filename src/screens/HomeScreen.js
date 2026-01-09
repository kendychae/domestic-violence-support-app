/**
 * Home Screen Component
 * Author: Kendahl Bingham
 * 
 * This is the main landing screen of the app. It displays a menu of options
 * for users to access different features like helplines, emergency contacts,
 * safety planning, and resources.
 * 
 * Features:
 * - Quick exit button for immediate app closure (safety feature)
 * - Navigation to all other screens
 * - Disguised app name ("Weather App") for user privacy
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  BackHandler,
} from 'react-native';

/**
 * HomeScreen Component
 * 
 * @param {Object} navigation - Navigation object from React Navigation for screen transitions
 * @returns {JSX.Element} - The home screen UI with menu options
 */
const HomeScreen = ({navigation}) => {
  /**
   * Quick Exit Function
   * 
   * Provides a quick way to close the app immediately for user safety.
   * Shows a confirmation alert before exiting to prevent accidental closure.
   */
  const quickExit = () => {
    Alert.alert(
      'Quick Exit',
      'This will close the app immediately.',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Exit',
          onPress: () => BackHandler.exitApp(),
          style: 'destructive',
        },
      ],
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Support & Safety Resources</Text>
        <Text style={styles.subtitle}>You are not alone. Help is available.</Text>
      </View>

      {/* Quick Exit Button */}
      <TouchableOpacity style={styles.emergencyButton} onPress={quickExit}>
        <Text style={styles.emergencyButtonText}>⚠️ Quick Exit</Text>
      </TouchableOpacity>

      {/* Main Menu Options */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={[styles.menuButton, styles.helplineButton]}
          onPress={() => navigation.navigate('Helpline')}>
          <Text style={styles.menuIcon}>📞</Text>
          <Text style={styles.menuButtonText}>24/7 Helpline</Text>
          <Text style={styles.menuSubtext}>Talk to someone now</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('EmergencyContacts')}>
          <Text style={styles.menuIcon}>👥</Text>
          <Text style={styles.menuButtonText}>Emergency Contacts</Text>
          <Text style={styles.menuSubtext}>Manage your trusted contacts</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('SafetyPlan')}>
          <Text style={styles.menuIcon}>🛡️</Text>
          <Text style={styles.menuButtonText}>Safety Plan</Text>
          <Text style={styles.menuSubtext}>Create your personalized plan</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('Resources')}>
          <Text style={styles.menuIcon}>📚</Text>
          <Text style={styles.menuButtonText}>Resources & Info</Text>
          <Text style={styles.menuSubtext}>Learn about support options</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          🔒 Your privacy matters. All data is stored securely on your device.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#6B46C1',
    padding: 20,
    paddingTop: 30,
    paddingBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#E0E0E0',
  },
  emergencyButton: {
    backgroundColor: '#DC2626',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  emergencyButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuContainer: {
    padding: 16,
  },
  menuButton: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  helplineButton: {
    backgroundColor: '#10B981',
  },
  menuIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  menuButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  menuSubtext: {
    fontSize: 14,
    color: '#6B7280',
  },
  footer: {
    padding: 20,
    marginTop: 20,
    marginBottom: 30,
  },
  footerText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default HomeScreen;
