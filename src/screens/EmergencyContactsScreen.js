/**
 * Emergency Contacts Screen Component
 * Author: Kendahl Bingham
 * 
 * Manages a list of emergency contacts that the user can call or text quickly.
 * Contacts are stored locally and persist across app sessions.
 * 
 * Features:
 * - Add/edit/delete contacts
 * - Quick call or text functionality
 * - Local storage with AsyncStorage
 * - Quick dial to national hotlines
 * - Integration with phone dialer and SMS
 */

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  Linking,
} from 'react-native';
import {saveContacts, getContacts} from '../utils/storage';

/**
 * EmergencyContactsScreen Component
 * 
 * @returns {JSX.Element} - Screen for managing emergency contacts
 */
const EmergencyContactsScreen = () => {
  // State for storing the list of contacts
  const [contacts, setContacts] = useState([]);
  // State to control whether the add contact form is showing
  const [isAdding, setIsAdding] = useState(false);
  // State for the new contact being added
  const [newContact, setNewContact] = useState({name: '', phone: '', relationship: ''});

  // Load saved contacts when component mounts
  useEffect(() => {
    loadContacts();
  }, []);

  /**
   * Load Contacts from Storage
   * 
   * Retrieves all saved emergency contacts from local storage
   * and updates the component state.
   */
  const loadContacts = async () => {
    const savedContacts = await getContacts();
    setContacts(savedContacts);
  };

  /**
   * Handle Adding a New Contact
   * 
   * Validates the input, creates a new contact object with a unique ID,
   * adds it to the list, and saves to local storage.
   */
  const handleAddContact = async () => {
    if (!newContact.name.trim() || !newContact.phone.trim()) {
      Alert.alert('Error', 'Please enter both name and phone number.');
      return;
    }

    const updatedContacts = [
      ...contacts,
      {
        id: Date.now().toString(),
        name: newContact.name.trim(),
        phone: newContact.phone.trim(),
        relationship: newContact.relationship.trim(),
      },
    ];

    const success = await saveContacts(updatedContacts);
    if (success) {
      setContacts(updatedContacts);
      setNewContact({name: '', phone: '', relationship: ''});
      setIsAdding(false);
      Alert.alert('Success', 'Contact added successfully.');
    } else {
      Alert.alert('Error', 'Failed to save contact. Please try again.');
    }
  };

  /**
   * Handle Deleting a Contact
   * 
   * Shows a confirmation dialog and then removes the contact from the list
   * and updates local storage.
   * 
   * @param {string} id - The unique ID of the contact to delete
   */
  const handleDeleteContact = (id) => {
    Alert.alert(
      'Delete Contact',
      'Are you sure you want to delete this contact?',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            const updatedContacts = contacts.filter(c => c.id !== id);
            const success = await saveContacts(updatedContacts);
            if (success) {
              setContacts(updatedContacts);
            }
          },
        },
      ],
    );
  };

  /**
   * Handle Calling or Texting a Contact
   * 
   * Shows a dialog with options to call or text the selected contact.
   * Uses the device's phone dialer or SMS app.
   * 
   * @param {Object} contact - The contact object with name and phone
   */
  const handleCallContact = (contact) => {
    Alert.alert(
      `Call ${contact.name}?`,
      contact.phone,
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Call',
          onPress: () => Linking.openURL(`tel:${contact.phone}`),
        },
        {
          text: 'Text',
          onPress: () => Linking.openURL(`sms:${contact.phone}`),
        },
      ],
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Trusted Contacts</Text>
        <Text style={styles.headerSubtitle}>
          Quick access to people who can help
        </Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          💡 Tip: Consider saving these with discreet contact names in your phone for privacy.
        </Text>
      </View>

      {contacts.length === 0 && !isAdding ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyIcon}>👥</Text>
          <Text style={styles.emptyTitle}>No Contacts Yet</Text>
          <Text style={styles.emptyText}>
            Add trusted friends, family, or support organizations you can reach out to.
          </Text>
        </View>
      ) : (
        <View style={styles.contactsList}>
          {contacts.map((contact) => (
            <View key={contact.id} style={styles.contactCard}>
              <View style={styles.contactInfo}>
                <Text style={styles.contactName}>{contact.name}</Text>
                {contact.relationship ? (
                  <Text style={styles.contactRelationship}>{contact.relationship}</Text>
                ) : null}
                <Text style={styles.contactPhone}>{contact.phone}</Text>
              </View>
              <View style={styles.contactActions}>
                <TouchableOpacity
                  style={styles.callButton}
                  onPress={() => handleCallContact(contact)}>
                  <Text style={styles.callButtonText}>📞 Contact</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleDeleteContact(contact.id)}>
                  <Text style={styles.deleteButtonText}>🗑️</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      )}

      {isAdding ? (
        <View style={styles.addForm}>
          <Text style={styles.formTitle}>Add New Contact</Text>
          
          <Text style={styles.label}>Name *</Text>
          <TextInput
            style={styles.input}
            placeholder="Contact name"
            value={newContact.name}
            onChangeText={(text) => setNewContact({...newContact, name: text})}
          />

          <Text style={styles.label}>Phone Number *</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone number"
            keyboardType="phone-pad"
            value={newContact.phone}
            onChangeText={(text) => setNewContact({...newContact, phone: text})}
          />

          <Text style={styles.label}>Relationship (Optional)</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., Friend, Sister, Counselor"
            value={newContact.relationship}
            onChangeText={(text) => setNewContact({...newContact, relationship: text})}
          />

          <View style={styles.formButtons}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => {
                setIsAdding(false);
                setNewContact({name: '', phone: '', relationship: ''});
              }}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={handleAddContact}>
              <Text style={styles.saveButtonText}>Save Contact</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setIsAdding(true)}>
          <Text style={styles.addButtonText}>➕ Add Contact</Text>
        </TouchableOpacity>
      )}

      <View style={styles.quickDialSection}>
        <Text style={styles.sectionTitle}>Quick Dial Numbers</Text>
        
        <TouchableOpacity
          style={[styles.quickDialCard, styles.emergencyCard]}
          onPress={() => Linking.openURL('tel:911')}>
          <Text style={styles.quickDialName}>Emergency Services</Text>
          <Text style={styles.quickDialNumber}>911</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.quickDialCard}
          onPress={() => Linking.openURL('tel:1-800-799-7233')}>
          <Text style={styles.quickDialName}>National DV Hotline</Text>
          <Text style={styles.quickDialNumber}>1-800-799-7233</Text>
        </TouchableOpacity>
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
    backgroundColor: '#FEF3C7',
    padding: 16,
    margin: 16,
    borderRadius: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#92400E',
    lineHeight: 20,
  },
  emptyState: {
    alignItems: 'center',
    padding: 40,
    marginTop: 20,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 15,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 22,
  },
  contactsList: {
    padding: 16,
  },
  contactCard: {
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
  contactInfo: {
    marginBottom: 12,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  contactRelationship: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  contactPhone: {
    fontSize: 16,
    color: '#6B46C1',
    fontWeight: '500',
  },
  contactActions: {
    flexDirection: 'row',
    gap: 8,
  },
  callButton: {
    flex: 1,
    backgroundColor: '#10B981',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  callButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#EF4444',
    padding: 12,
    borderRadius: 8,
    width: 50,
    alignItems: 'center',
  },
  deleteButtonText: {
    fontSize: 20,
  },
  addForm: {
    backgroundColor: '#FFFFFF',
    margin: 16,
    padding: 20,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 6,
    marginTop: 8,
  },
  input: {
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    marginBottom: 8,
  },
  formButtons: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 16,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#E5E7EB',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#374151',
    fontSize: 16,
    fontWeight: '600',
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#10B981',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#6B46C1',
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
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  quickDialSection: {
    padding: 16,
    paddingTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 12,
  },
  quickDialCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#10B981',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  emergencyCard: {
    borderLeftColor: '#DC2626',
  },
  quickDialName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  quickDialNumber: {
    fontSize: 18,
    color: '#6B46C1',
    fontWeight: '600',
  },
  spacer: {
    height: 30,
  },
});

export default EmergencyContactsScreen;
