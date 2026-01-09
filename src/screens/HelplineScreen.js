/**
 * Helpline Screen Component
 * Author: Kendahl Bingham
 * 
 * Displays 24/7 support hotlines and crisis resources.
 * Provides direct calling functionality for emergency hotlines
 * including the National Domestic Violence Hotline.
 * 
 * Features:
 * - National DV Hotline with tap-to-call
 * - TTY line for Deaf/Hard of Hearing
 * - Crisis lifeline numbers
 * - Text and online chat information
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';

/**
 * HelplineScreen Component
 * 
 * @returns {JSX.Element} - Screen displaying emergency hotlines
 */
const HelplineScreen = () => {
  /**
   * Call Helpline Function
   * 
   * Shows a confirmation dialog and then initiates a phone call to the
   * selected helpline using the device's phone dialer.
   * 
   * @param {string} number - The phone number to dial
   * @param {string} name - The name of the helpline (for display)
   */
  const callHelpline = (number, name) => {
    Alert.alert(
      `Call ${name}?`,
      `This will dial ${number}`,
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Call',
          onPress: () => Linking.openURL(`tel:${number}`),
        },
      ],
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>24/7 Support Available</Text>
        <Text style={styles.headerSubtitle}>
          You can call these numbers anytime, day or night
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>National Hotlines</Text>

        <TouchableOpacity
          style={[styles.hotlineCard, styles.primaryCard]}
          onPress={() => callHelpline('1-800-799-7233', 'National DV Hotline')}>
          <Text style={styles.hotlineName}>National Domestic Violence Hotline</Text>
          <Text style={styles.hotlineNumber}>1-800-799-7233</Text>
          <Text style={styles.hotlineInfo}>
            24/7 confidential support • Available in 200+ languages
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.hotlineCard}
          onPress={() => callHelpline('1-800-787-3224', 'National DV TTY')}>
          <Text style={styles.hotlineName}>National DV Hotline (TTY)</Text>
          <Text style={styles.hotlineNumber}>1-800-787-3224</Text>
          <Text style={styles.hotlineInfo}>For Deaf/Hard of Hearing</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.hotlineCard}
          onPress={() => callHelpline('988', 'Crisis Lifeline')}>
          <Text style={styles.hotlineName}>988 Suicide & Crisis Lifeline</Text>
          <Text style={styles.hotlineNumber}>988</Text>
          <Text style={styles.hotlineInfo}>Mental health crisis support</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Text & Chat Support</Text>
        
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Text "START" to 88788</Text>
          <Text style={styles.infoText}>
            Text support from the National Domestic Violence Hotline
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Online Chat</Text>
          <Text style={styles.infoText}>
            Visit thehotline.org for live chat support
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Emergency Services</Text>
        
        <TouchableOpacity
          style={[styles.hotlineCard, styles.emergencyCard]}
          onPress={() => callHelpline('911', 'Emergency Services')}>
          <Text style={styles.hotlineName}>Call 911</Text>
          <Text style={styles.hotlineInfo}>
            For immediate danger or life-threatening situations
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          💡 Tip: Save these numbers in your phone contacts with discreet names for quick access.
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
    backgroundColor: '#10B981',
    padding: 20,
    paddingTop: 16,
    paddingBottom: 24,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 15,
    color: '#E0E0E0',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 12,
  },
  hotlineCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  primaryCard: {
    borderLeftWidth: 4,
    borderLeftColor: '#10B981',
  },
  emergencyCard: {
    borderLeftWidth: 4,
    borderLeftColor: '#DC2626',
  },
  hotlineName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 6,
  },
  hotlineNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6B46C1',
    marginBottom: 6,
  },
  hotlineInfo: {
    fontSize: 14,
    color: '#6B7280',
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#F59E0B',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 6,
  },
  infoText: {
    fontSize: 14,
    color: '#6B7280',
  },
  footer: {
    backgroundColor: '#FEF3C7',
    padding: 16,
    margin: 16,
    borderRadius: 8,
    marginBottom: 30,
  },
  footerText: {
    fontSize: 14,
    color: '#92400E',
    lineHeight: 20,
  },
});

export default HelplineScreen;
