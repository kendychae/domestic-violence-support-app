/**
 * Storage Utility Module
 * Author: Kendahl Bingham
 * 
 * This module provides functions for storing and retrieving data locally on the device.
 * Uses AsyncStorage to persist emergency contacts and safety plans even when the app
 * is closed or the phone is restarted.
 * 
 * Key Features:
 * - Save/load emergency contacts
 * - Save/load personalized safety plans
 * - All data stored locally (no cloud/internet required)
 * - Data persists across app restarts
 */

import AsyncStorage from '@react-native-async-storage/async-storage';

// Storage keys used to identify different types of data
const CONTACTS_KEY = '@emergency_contacts'; // Key for storing contacts array
const SAFETY_PLAN_KEY = '@safety_plan'; // Key for storing safety plan object

/**
 * Save Emergency Contacts to Local Storage
 * 
 * Takes an array of contact objects and saves them to the device's local storage.
 * Converts the array to JSON format for storage.
 * 
 * @param {Array} contacts - Array of contact objects with name, phone, relationship
 * @returns {Promise<boolean>} - Returns true if save successful, false otherwise
 */
export const saveContacts = async (contacts) => {
  try {
    const jsonValue = JSON.stringify(contacts);
    await AsyncStorage.setItem(CONTACTS_KEY, jsonValue);
    return true;
  } catch (e) {
    console.error('Error saving contacts:', e);
    return false;
  }
};

/**
 * Load Emergency Contacts from Local Storage
 * 
 * Retrieves the saved contacts from device storage and converts them back
 * from JSON to a JavaScript array.
 * 
 * @returns {Promise<Array>} - Returns array of contact objects, or empty array if none saved
 */
export const getContacts = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(CONTACTS_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Error loading contacts:', e);
    return [];
  }
};

/**
 * Save Safety Plan to Local Storage
 * 
 * Takes a safety plan object with user's personal safety information and
 * saves it to device storage. The plan includes safe places, trusted contacts,
 * important documents, emergency bag items, and a code word.
 * 
 * @param {Object} plan - Safety plan object with user's safety planning information
 * @returns {Promise<boolean>} - Returns true if save successful, false otherwise
 */
export const saveSafetyPlan = async (plan) => {
  try {
    const jsonValue = JSON.stringify(plan);
    await AsyncStorage.setItem(SAFETY_PLAN_KEY, jsonValue);
    return true;
  } catch (e) {
    console.error('Error saving safety plan:', e);
    return false;
  }
};

/**
 * Load Safety Plan from Local Storage
 * 
 * Retrieves the saved safety plan from device storage. If no plan exists,
 * returns a default empty plan object with all fields initialized to empty strings.
 * 
 * @returns {Promise<Object>} - Returns safety plan object with all fields
 */
export const getSafetyPlan = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(SAFETY_PLAN_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : {
      safePlaces: '',
      trustedContacts: '',
      importantDocuments: '',
      emergencyBag: '',
      codeWord: '',
    };
  } catch (e) {
    console.error('Error loading safety plan:', e);
    return {
      safePlaces: '',
      trustedContacts: '',
      importantDocuments: '',
      emergencyBag: '',
      codeWord: '',
    };
  }
};
