# 🎥 Video Demo Script Guide

**Target Length: 6-8 minutes**  
**Required Tools: Screen recording software + webcam**

---

## 📋 Setup Checklist (Before Recording)

- [ ] Have the app running on your emulator/device
- [ ] Open VS Code with your project
- [ ] Turn on webcam (position your face in corner of screen)
- [ ] Start screen recording software
- [ ] Close unnecessary tabs/windows

---

## 🎬 Video Structure (Follow This Exactly!)

### **PART 1: Introduction (30 seconds)**

**What to Show:** Your face clearly visible

**What to Say:**

> "Hi, I'm Kendahl Bingham. This is my Domestic Violence Support App built with React Native. This app helps people experiencing domestic violence by providing emergency contacts, safety planning tools, and quick access to helplines. Let me show you how it works."

---

### **PART 2: Live Demo (3-4 minutes)**

**What to Show:** Your phone screen with the app running

**💡 Recording Options:**

- **Easy:** Point your camera at your phone while using the app
- **Better:** Use your phone's screen recording feature (iPhone: Control Center > Screen Recording; Android: Quick Settings > Screen Recorder)

#### Screen 1: Home Screen (30 seconds)

**Show:** Your phone with the app open, showing the home screen

**Say:**

> "When you open the app, you see the home screen with five main options. Let me walk through each feature."

**Action:** Point to each button as you mention it

---

#### Screen 2: Helpline (30 seconds)

**Show:** Tap "24/7 Helpline" button

**Say:**

> "The helpline screen provides the National Domestic Violence Hotline number. Users can call by tapping the green button, or text by tapping the blue button."

**Action:** Tap the call button (it will open your phone dialer - that's good!)

**Say:**

> "As you can see, it opens the phone dialer ready to call."

**Action:** Go back to home

---

#### Screen 3: Emergency Contacts (1 minute)

**Show:** Tap "Emergency Contacts" button

**Say:**

> "Users can save their own emergency contacts. Let me add one now."

**Action:** Tap "Add New Contact" button

**Say:**

> "I'll add a contact - let's say my friend Sarah."

**Action:**

- Type "Sarah" in name field
- Type "555-1234" in phone field
- Tap "Save Contact"

**Say:**

> "Now Sarah appears in my list. I can call her directly by tapping the phone icon, or delete her if needed. The contacts are saved locally on the device, so they stay even if the app closes."

**Action:** Tap the phone icon to show it works, then go back to home

---

#### Screen 4: Safety Plan (45 seconds)

**Show:** Tap "Safety Plan" button

**Say:**

> "The safety plan screen lets users create a personalized safety plan. They can add safe places to go, important items to pack, and people who can help."

**Action:**

- Type something in "Safe Place" field (e.g., "Friend's house")
- Type something in "Items to Pack" (e.g., "ID, keys, phone")
- Tap "Save Safety Plan"

**Say:**

> "Once saved, this information is stored securely on the device and will be here whenever they need it."

**Action:** Go back to home

---

#### Screen 5: Resources (30 seconds)

**Show:** Tap "Resources" button

**Say:**

> "Finally, the resources screen provides educational information about domestic violence and links to support organizations. Users can tap these links to learn more."

**Action:** Scroll through the resources page

**Say:**

> "That covers all the main features. Now let me show you how the code works."

---

### **PART 3: Code Walkthrough (3-4 minutes)**

**What to Show:** VS Code with your code open

#### File 1: App.js (1 minute)

**Show:** Open [App.js](App.js)

**Say:**

> "Let me start with App.js, the main entry point. This file sets up the navigation for the entire app using React Navigation."

**Action:** Scroll to show the Stack.Navigator section

**Say:**

> "I'm using a Stack Navigator which creates a navigation stack. I've defined all five screens here - Home, Emergency Contacts, Safety Plan, Resources, and Helpline. Each screen is added to the stack with a name and component."

**Action:** Point to the header styling

**Say:**

> "I also configured global header styling with a purple background and white text."

---

#### File 2: storage.js (1 minute)

**Show:** Open [src/utils/storage.js](src/utils/storage.js)

**Say:**

> "This is my storage utility file. It handles all the data persistence using AsyncStorage, which is React Native's local storage solution."

**Action:** Scroll to show the functions

**Say:**

> "I created four main functions: saveContacts saves the contact list to local storage, loadContacts retrieves it, and then the same pattern for the safety plan with saveSafetyPlan and loadSafetyPlan. All data is stored as JSON strings and persists even when the app closes."

---

#### File 3: EmergencyContactsScreen.js (1.5 minutes)

**Show:** Open [src/screens/EmergencyContactsScreen.js](src/screens/EmergencyContactsScreen.js)

**Say:**

> "Now let's look at the Emergency Contacts screen, which is the most complex screen in the app."

**Action:** Scroll to the top to show the state

**Say:**

> "I'm using React hooks to manage state. I have state for the contacts array, the input fields for name and phone, and whether the form is visible."

**Action:** Scroll to useEffect

**Say:**

> "This useEffect hook runs when the component loads. It calls loadContacts from my storage utility to retrieve saved contacts from local storage."

**Action:** Scroll to addContact function

**Say:**

> "The addContact function validates the inputs, creates a new contact object with a unique ID, adds it to the array, and saves it to storage. It also clears the form."

**Action:** Scroll to deleteContact function

**Say:**

> "The deleteContact function shows an alert to confirm, then removes the contact from the array and updates storage."

**Action:** Scroll to show the JSX/return statement

**Say:**

> "The UI uses ScrollView for scrolling, TextInput components for the form, TouchableOpacity for buttons, and FlatList to render the contacts list."

---

#### File 4: Quick mention of other screens (30 seconds)

**Show:** Briefly open [src/screens/SafetyPlanScreen.js](src/screens/SafetyPlanScreen.js)

**Say:**

> "The Safety Plan screen uses a similar pattern - it has state for each form field, loads saved data on mount, and saves to storage when the user submits."

**Show:** Briefly open [src/screens/HelplineScreen.js](src/screens/HelplineScreen.js)

**Say:**

> "The Helpline screen uses React Native's Linking API to open the phone dialer or SMS app with pre-filled numbers."

---

### **PART 4: Conclusion (30 seconds)**

**What to Show:** Your face (you can show home screen or code in background)

**What to Say:**

> "To summarize, this app uses React Native with five interactive screens, implements local data persistence with AsyncStorage, and integrates with the phone's calling and texting features. All the code is documented with comments and published on GitHub. Thanks for watching!"

---

## 🎯 Quick Tips for Recording

1. **Speak clearly and at a moderate pace** - Don't rush!
2. **If you mess up, just pause and restart that section** - You can edit videos
3. **Keep your face visible** - Picture-in-picture in corner is fine
4. **Test your screen recording first** - Make sure audio and video work
5. **Show = Don't just tell** - Actually click buttons and show features working
6. **Stay calm** - You know this material!

---

## ✅ Final Checklist Before Submitting

- [ ] Video shows your face clearly
- [ ] You demoed all 5 screens working
- [ ] You added a contact and saved a safety plan (showed persistence)
- [ ] You explained App.js, storage.js, and EmergencyContactsScreen.js code
- [ ] Video is 6-10 minutes long
- [ ] Audio is clear
- [ ] Uploaded to YouTube/OneDrive/etc.
- [ ] Posted link in MS Teams

---

## 🛠️ Recording Setup (Since You're Using Your Phone)

**Option 1: Record Phone Screen Directly** ⭐ BEST QUALITY

- **iPhone:** Swipe down from top right > Tap Screen Recording button > Tap to start
- **Android:** Swipe down > Tap "Screen recorder" > Tap to start
- Then separately record your face talking (or use a mirror/second camera to show your face)

**Option 2: Point Camera at Phone** ✅ SIMPLER

- Use your computer webcam or another camera
- Point it at both your face AND your phone
- Just talk while using the app on your phone

**Option 3: Use OBS or Screen Recording Software**

- Install OBS Studio (free) - https://obsproject.com
- Or use Xbox Game Bar (Press `Win + G`)
- Show your face in corner while demoing the phone

**💡 Recommendation:** Option 1 gives best quality, Option 2 is quickest!

**Upload To:**

- **YouTube** (Unlisted video)
- **OneDrive** (Share link)
- **Google Drive** (Share link)

---

## 📏 Time Breakdown Reference

| Section                  | Time        | What to Cover                        |
| ------------------------ | ----------- | ------------------------------------ |
| Introduction             | 30 sec      | Say your name, app name, purpose     |
| Demo: Home               | 30 sec      | Show home screen, mention 5 features |
| Demo: Helpline           | 30 sec      | Show calling feature                 |
| Demo: Emergency Contacts | 1 min       | Add & save a contact                 |
| Demo: Safety Plan        | 45 sec      | Fill out and save plan               |
| Demo: Resources          | 30 sec      | Scroll through resources             |
| Code: App.js             | 1 min       | Navigation setup                     |
| Code: storage.js         | 1 min       | Data persistence functions           |
| Code: EmergencyContacts  | 1.5 min     | State, functions, UI                 |
| Code: Other screens      | 30 sec      | Quick mention                        |
| Conclusion               | 30 sec      | Summary                              |
| **TOTAL**                | **6-8 min** |                                      |

---

Good luck! You've got this! 🎉
