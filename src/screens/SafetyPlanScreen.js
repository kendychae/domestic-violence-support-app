/**
 * Safety Plan Screen Component
 * Author: Kendahl Bingham
 * 
 * Allows users to create and save a personalized safety plan.
 * The plan includes safe places to go, trusted contacts, important documents,
 * emergency bag contents, and a secret code word.
 * 
 * Features:
 * - Text input fields for all safety plan components
 * - Auto-save functionality with change detection
 * - Data persists using AsyncStorage
 * - Safety tips and guidance
 */

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {saveSafetyPlan, getSafetyPlan} from '../utils/storage';

/**
 * SafetyPlanScreen Component
 * 
 * @returns {JSX.Element} - Screen for creating/editing safety plan
 */
const SafetyPlanScreen = () => {
  // State for storing the safety plan data
  const [plan, setPlan] = useState({
    safePlaces: '',
    trustedContacts: '',
    importantDocuments: '',
    emergencyBag: '',
    codeWord: '',
  });

  // Track if user has made changes to show save button
  const [hasChanges, setHasChanges] = useState(false);

  // Load saved safety plan when component mounts
  useEffect(() => {
    loadSafetyPlan();
  }, []);

  /**
   * Load Safety Plan from Storage
   * 
   * Retrieves the previously saved safety plan from local storage
   * and updates the component state.
   */
  const loadSafetyPlan = async () => {
    const savedPlan = await getSafetyPlan();
    setPlan(savedPlan);
  };

  /**
   * Handle Save Button Press
   * 
   * Saves the current safety plan to local storage and shows
   * a success or error message to the user.
   */
  const handleSave = async () => {
    const success = await saveSafetyPlan(plan);
    if (success) {
      setHasChanges(false);
      Alert.alert('Success', 'Your safety plan has been saved securely.');
    } else {
      Alert.alert('Error', 'Failed to save safety plan. Please try again.');
    }
  };

  /**
   * Update a Single Field in the Safety Plan
   * 
   * Updates one field of the safety plan and marks that changes have been made.
   * 
   * @param {string} field - The field name to update
   * @param {string} value - The new value for the field
   */
  const updateField = (field, value) => {
    setPlan({...plan, [field]: value});
    setHasChanges(true);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Personal Safety Plan</Text>
        <Text style={styles.headerSubtitle}>
          Planning ahead can help you stay safe
        </Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          ℹ️ This information is stored privately on your device. Fill out what feels comfortable for you.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>🏠 Safe Places to Go</Text>
        <Text style={styles.hint}>
          List places you could go in an emergency (friend's house, library, 24-hour store, etc.)
        </Text>
        <TextInput
          style={styles.textArea}
          multiline
          numberOfLines={4}
          placeholder="Enter safe locations..."
          value={plan.safePlaces}
          onChangeText={(text) => updateField('safePlaces', text)}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>👥 Trusted Contacts</Text>
        <Text style={styles.hint}>
          People you can reach out to for support
        </Text>
        <TextInput
          style={styles.textArea}
          multiline
          numberOfLines={4}
          placeholder="Enter trusted contacts..."
          value={plan.trustedContacts}
          onChangeText={(text) => updateField('trustedContacts', text)}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>📄 Important Documents</Text>
        <Text style={styles.hint}>
          ID, birth certificates, financial documents, medical records, etc.
        </Text>
        <TextInput
          style={styles.textArea}
          multiline
          numberOfLines={4}
          placeholder="List important documents and where they're stored..."
          value={plan.importantDocuments}
          onChangeText={(text) => updateField('importantDocuments', text)}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>🎒 Emergency Bag Items</Text>
        <Text style={styles.hint}>
          Essentials to keep ready: clothes, medications, money, phone charger, etc.
        </Text>
        <TextInput
          style={styles.textArea}
          multiline
          numberOfLines={4}
          placeholder="List items for your emergency bag..."
          value={plan.emergencyBag}
          onChangeText={(text) => updateField('emergencyBag', text)}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>🔑 Code Word</Text>
        <Text style={styles.hint}>
          A secret word or phrase to signal trusted people that you need help
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your code word..."
          value={plan.codeWord}
          onChangeText={(text) => updateField('codeWord', text)}
        />
      </View>

      {hasChanges && (
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>💾 Save Safety Plan</Text>
        </TouchableOpacity>
      )}

      <View style={styles.tipsSection}>
        <Text style={styles.tipsTitle}>Safety Tips:</Text>
        <Text style={styles.tipItem}>
          • Keep important phone numbers memorized
        </Text>
        <Text style={styles.tipItem}>
          • Practice your safety plan when it's safe to do so
        </Text>
        <Text style={styles.tipItem}>
          • Tell trusted people about your code word
        </Text>
        <Text style={styles.tipItem}>
          • Keep your emergency bag in an accessible place
        </Text>
        <Text style={styles.tipItem}>
          • Update your plan as your situation changes
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
  infoBox: {
    backgroundColor: '#DBEAFE',
    padding: 16,
    margin: 16,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#3B82F6',
  },
  infoText: {
    fontSize: 14,
    color: '#1E40AF',
    lineHeight: 20,
  },
  section: {
    padding: 16,
    paddingTop: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 6,
  },
  hint: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
  },
  textArea: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  saveButton: {
    backgroundColor: '#10B981',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  tipsSection: {
    backgroundColor: '#FEF3C7',
    padding: 16,
    margin: 16,
    borderRadius: 8,
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#92400E',
    marginBottom: 10,
  },
  tipItem: {
    fontSize: 14,
    color: '#92400E',
    marginBottom: 6,
    lineHeight: 20,
  },
  spacer: {
    height: 30,
  },
});

export default SafetyPlanScreen;
