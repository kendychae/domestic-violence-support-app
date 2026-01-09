/**
 * Resources Screen Component
 * Author: Kendahl Bingham
 * 
 * Provides educational information about domestic violence and links to
 * support organizations. Helps users understand domestic violence and
 * learn about available support options.
 * 
 * Features:
 * - Information about types of domestic violence
 * - Warning signs
 * - Links to national organizations
 * - Safety planning guidance
 * - Legal options information
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';

/**
 * ResourcesScreen Component
 * 
 * @returns {JSX.Element} - Screen displaying educational resources
 */
const ResourcesScreen = () => {
  /**
   * Open External Website
   * 
   * Opens a URL in the device's default web browser.
   * Catches and logs any errors if the URL can't be opened.
   * 
   * @param {string} url - The website URL to open
   */
  const openWebsite = (url) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Support Resources</Text>
        <Text style={styles.headerSubtitle}>
          Information and organizations that can help
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Understanding Domestic Violence</Text>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>What is Domestic Violence?</Text>
          <Text style={styles.cardText}>
            Domestic violence is a pattern of behaviors used to gain or maintain power and control over an intimate partner. It can include:
          </Text>
          <Text style={styles.bulletPoint}>• Physical abuse</Text>
          <Text style={styles.bulletPoint}>• Emotional/psychological abuse</Text>
          <Text style={styles.bulletPoint}>• Sexual abuse</Text>
          <Text style={styles.bulletPoint}>• Financial abuse</Text>
          <Text style={styles.bulletPoint}>• Digital abuse</Text>
          <Text style={styles.bulletPoint}>• Stalking</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Warning Signs</Text>
          <Text style={styles.bulletPoint}>• Constant criticism or belittling</Text>
          <Text style={styles.bulletPoint}>• Controlling behavior</Text>
          <Text style={styles.bulletPoint}>• Isolation from friends/family</Text>
          <Text style={styles.bulletPoint}>• Extreme jealousy</Text>
          <Text style={styles.bulletPoint}>• Threats or intimidation</Text>
          <Text style={styles.bulletPoint}>• Unpredictable mood swings</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>National Organizations</Text>
        
        <TouchableOpacity
          style={styles.linkCard}
          onPress={() => openWebsite('https://www.thehotline.org')}>
          <Text style={styles.linkTitle}>National Domestic Violence Hotline</Text>
          <Text style={styles.linkUrl}>www.thehotline.org</Text>
          <Text style={styles.linkDescription}>
            24/7 support, resources, and information
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.linkCard}
          onPress={() => openWebsite('https://www.womenslaw.org')}>
          <Text style={styles.linkTitle}>WomensLaw.org</Text>
          <Text style={styles.linkUrl}>www.womenslaw.org</Text>
          <Text style={styles.linkDescription}>
            Legal information and resources
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.linkCard}
          onPress={() => openWebsite('https://www.loveisrespect.org')}>
          <Text style={styles.linkTitle}>Love Is Respect</Text>
          <Text style={styles.linkUrl}>www.loveisrespect.org</Text>
          <Text style={styles.linkDescription}>
            Support for teens and young adults
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Getting Help</Text>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Creating a Safety Plan</Text>
          <Text style={styles.cardText}>
            A safety plan is a personalized, practical plan to improve your safety. Use the Safety Plan section in this app to:
          </Text>
          <Text style={styles.bulletPoint}>• Identify safe places to go</Text>
          <Text style={styles.bulletPoint}>• List trusted contacts</Text>
          <Text style={styles.bulletPoint}>• Prepare an emergency bag</Text>
          <Text style={styles.bulletPoint}>• Document important information</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Legal Options</Text>
          <Text style={styles.bulletPoint}>• Restraining/Protection Orders</Text>
          <Text style={styles.bulletPoint}>• Emergency Protective Orders</Text>
          <Text style={styles.bulletPoint}>• Criminal Charges</Text>
          <Text style={styles.bulletPoint}>• Custody and Divorce Proceedings</Text>
          <Text style={styles.cardText}>
            {'\n'}Contact local legal aid organizations for free or low-cost legal assistance.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Shelters and Housing</Text>
          <Text style={styles.cardText}>
            Domestic violence shelters provide safe, temporary housing and support services. Contact the National Hotline for referrals to local shelters.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>For Friends & Family</Text>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>How to Help</Text>
          <Text style={styles.bulletPoint}>• Listen without judgment</Text>
          <Text style={styles.bulletPoint}>• Believe and validate their experience</Text>
          <Text style={styles.bulletPoint}>• Don't force them to leave</Text>
          <Text style={styles.bulletPoint}>• Help them safety plan</Text>
          <Text style={styles.bulletPoint}>• Connect them with resources</Text>
          <Text style={styles.bulletPoint}>• Be patient and supportive</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          💙 Remember: Abuse is never your fault. You deserve to be safe and respected.
        </Text>
      </View>

      <View style={styles.spacer} />
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
    paddingTop: 16,
    paddingBottom: 20,
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
  card: {
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
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
    marginBottom: 8,
  },
  bulletPoint: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 22,
    paddingLeft: 8,
  },
  linkCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#6B46C1',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  linkTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  linkUrl: {
    fontSize: 14,
    color: '#6B46C1',
    marginBottom: 6,
  },
  linkDescription: {
    fontSize: 14,
    color: '#6B7280',
  },
  footer: {
    backgroundColor: '#DBEAFE',
    padding: 16,
    margin: 16,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#3B82F6',
  },
  footerText: {
    fontSize: 15,
    color: '#1E40AF',
    lineHeight: 22,
    textAlign: 'center',
    fontWeight: '500',
  },
  spacer: {
    height: 30,
  },
});

export default ResourcesScreen;
