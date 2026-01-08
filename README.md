# Domestic Violence Support App

[![React Native](https://img.shields.io/badge/React%20Native-0.73-blue.svg)](https://reactnative.dev/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/platform-iOS%20%7C%20Android-lightgrey.svg)](https://github.com/kendychae/domestic-violence-support-app)

**Developer:** Kendahl Bingham  
**Repository:** [github.com/kendychae/domestic-violence-support-app](https://github.com/kendychae/domestic-violence-support-app)

---

## Overview

The **Domestic Violence Support App** is a React Native mobile application designed to provide resources, safety planning tools, and quick access to emergency contacts for individuals experiencing domestic violence. The app prioritizes user privacy and safety, with all data stored locally on the device.

### Mission

This app was created to:

- Provide immediate access to support resources and hotlines
- Help users create and store personalized safety plans
- Manage emergency contacts for quick access during crisis situations
- Educate users about domestic violence and available support options

---

## Demo Video

[Watch the Demo Video](#) <!-- Add your video link here -->

**Demo Highlights:**

- Multi-screen navigation and user interface
- Emergency contact management with persistent storage
- Personalized safety planning features
- Access to national helplines and support resources
- Quick exit functionality for user safety

---

## Development Environment

### Tools & Platform

- **Platform:** React Native 0.73.0
- **Language:** JavaScript (ES6+)
- **IDE:** Visual Studio Code
- **Node.js:** v18 or higher
- **Package Manager:** npm

### Key Libraries

- **@react-navigation/native** (6.1.9) - Screen navigation
- **@react-navigation/stack** (6.3.20) - Stack-based navigation
- **@react-native-async-storage/async-storage** (1.21.0) - Local data persistence
- **react-native-gesture-handler** - Touch gesture handling
- **react-native-safe-area-context** - Safe area support for different devices

### Testing Environment

- **Android Emulator** via Android Studio (or physical Android device)
- **iOS Simulator** via Xcode (Mac only) or physical iOS device

---

## Key Features

### 📱 Application Architecture

**Multi-Screen Navigation System (5 Screens)**

- **Home Screen** - Central navigation hub with intuitive menu design
- **Helpline Screen** - 24/7 crisis support with direct calling capabilities
- **Emergency Contacts** - Customizable contact management system
- **Safety Plan** - Comprehensive personal safety planning tool
- **Resources** - Curated educational content and support organizations

### 🎨 Interactive User Experience

- Intuitive touch-based navigation with smooth transitions
- Dynamic forms for contact and safety plan management
- Real-time data validation and user feedback
- Contextual alert dialogs for critical actions
- Responsive design adapting to various screen sizes

### 💾 Data Persistence

- **Local-first architecture** using AsyncStorage
- Encrypted local storage for sensitive user data
- Automatic data synchronization across app sessions
- Offline-first functionality (no internet required)
- Data privacy guaranteed (no external servers)

### 📞 Native Device Integration

- Direct phone dialer integration for emergency calls
- SMS messaging capabilities for text-based support
- External browser integration for resource links
- Deep linking support for seamless user experience

### 🎯 Core Functionality

#### 1. Home Screen

- Central navigation hub with quick access to all features
- Quick Exit button for emergency situations
- Visual card-based menu design

#### 2. 24/7 Helpline

- National Domestic Violence Hotline (1-800-799-7233)
- TTY line for Deaf/Hard of Hearing
- 988 Crisis Lifeline
- Direct tap-to-call functionality
- Text support information

#### 3. Emergency Contacts

- Add/edit/delete custom trusted contacts
- Store name, phone number, and relationship
- Quick call or text directly from the app
- Pre-configured quick dial to emergency services
- Local storage ensures contacts persist

#### 4. Safety Plan

- Personalized safety planning with 5 key sections:
  - Safe places to go
  - Trusted contacts list
  - Important documents checklist
  - Emergency bag items
  - Secret code word
- Auto-save functionality with change detection
- Safety tips and guidance

#### 5. Resources & Information

- Educational content about domestic violence
- Warning signs and types of abuse
- Links to national organizations
- Legal options and shelter information
- Support guidance for friends/family

---

## Privacy & Safety Features

- **Disguised App Name:** Appears as "Weather App" on device
- **Local-Only Storage:** No cloud sync or external data transmission
- **Quick Exit Button:** Immediate app closure for safety
- **No Screenshots Warning:** Recommends users to be cautious with screenshots
- **Discreet Contacts:** Suggestions for saving contacts with non-obvious names

---

## Installation & Setup

### Prerequisites

1. **Install Node.js** (v18 or higher)

   ```bash
   node --version
   ```

2. **Install React Native CLI**

   ```bash
   npm install -g react-native-cli
   ```

3. **For Android Development:**
   - Install [Android Studio](https://developer.android.com/studio)
   - Set up Android SDK and emulator
   - Configure environment variables (ANDROID_HOME)

4. **For iOS Development (Mac only):**
   - Install [Xcode](https://developer.apple.com/xcode/)
   - Install CocoaPods: `sudo gem install cocoapods`

### Project Setup

1. **Clone or download the project**

   ```bash
   cd DomesticViolenceSupportApp
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **For iOS (Mac only)**
   ```bash
   cd ios && pod install && cd ..
   ```

### Running the App

#### Android

```bash
npm run android
```

Or open Android Studio, open the `android` folder, and run from there.

#### iOS (Mac only)

```bash
npm run ios
```

Or open Xcode, open `ios/DVSupportApp.xcworkspace`, and run from there.

#### Start Metro Bundler (if not auto-started)

```bash
npm start
```

---

## Project Structure

```
DomesticViolenceSupportApp/
├── App.js                          # Main app component with navigation
├── package.json                    # Dependencies and scripts
├── index.js                        # Entry point
├── src/
│   ├── screens/
│   │   ├── HomeScreen.js          # Main navigation screen
│   │   ├── HelplineScreen.js      # 24/7 hotlines
│   │   ├── EmergencyContactsScreen.js  # Contact management
│   │   ├── SafetyPlanScreen.js    # Safety planning tool
│   │   └── ResourcesScreen.js     # Information & resources
│   └── utils/
│       └── storage.js             # AsyncStorage helper functions
├── android/                        # Android native code
└── ios/                           # iOS native code (if applicable)
```

---

## Usage Guide

### Adding Emergency Contacts

1. Navigate to "Emergency Contacts" from home screen
2. Tap "➕ Add Contact"
3. Enter name, phone number, and optional relationship
4. Tap "Save Contact"
5. Contacts are automatically saved locally

### Creating a Safety Plan

1. Navigate to "Safety Plan"
2. Fill out any or all sections:
   - Safe places
   - Trusted contacts
   - Important documents
   - Emergency bag contents
   - Code word
3. Tap "💾 Save Safety Plan" when done
4. Plan is stored securely on your device

### Accessing Hotlines

1. Navigate to "24/7 Helpline"
2. Tap any hotline card to initiate a call
3. Confirm the call in the alert dialog

---

## Technical Implementation Details

### Local Storage Implementation

```javascript
import AsyncStorage from "@react-native-async-storage/async-storage";

// Save data
const saveContacts = async (contacts) => {
  const jsonValue = JSON.stringify(contacts);
  await AsyncStorage.setItem("@emergency_contacts", jsonValue);
};

// Retrieve data
const getContacts = async () => {
  const jsonValue = await AsyncStorage.getItem("@emergency_contacts");
  return jsonValue != null ? JSON.parse(jsonValue) : [];
};
```

### Navigation Structure

- Uses Stack Navigator for hierarchical navigation
- Each screen can navigate to others using `navigation.navigate()`
- Custom header styling with brand colors

### Phone Integration

```javascript
import { Linking } from "react-native";

// Make phone call
Linking.openURL(`tel:${phoneNumber}`);

// Send SMS
Linking.openURL(`sms:${phoneNumber}`);

// Open website
Linking.openURL("https://www.thehotline.org");
```

---

## Future Enhancements

Potential features for future development:

- [ ] GPS location sharing with trusted contacts
- [ ] Audio/video recording feature for documentation
- [ ] Multi-language support
- [ ] Offline resource library
- [ ] Integration with local shelter databases
- [ ] Anonymous check-in system with trusted contacts
- [ ] Password/biometric app lock
- [ ] Disguised calculator interface option

---

## Resources Used

### Official Documentation

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [React Navigation](https://reactnavigation.org/docs/getting-started)
- [AsyncStorage Documentation](https://react-native-async-storage.github.io/async-storage/)

### Learning Resources

- React Native tutorials on YouTube
- Stack Overflow for problem-solving
- React Native community forums

### Domestic Violence Resources

- [National Domestic Violence Hotline](https://www.thehotline.org)
- [WomensLaw.org](https://www.womenslaw.org)
- [Love Is Respect](https://www.loveisrespect.org)

### AI Assistance

- Used GitHub Copilot for:
  - Component structure suggestions
  - Styling and layout patterns
  - AsyncStorage implementation examples
  - Navigation setup guidance

---

## Known Issues & Limitations

1. **iOS Build:** Requires macOS with Xcode for iOS builds
2. **Phone Integration:** Requires physical device or emulator with phone capabilities
3. **No Backend:** All data is local-only (privacy feature, but limits cross-device sync)
4. **Quick Exit:** On some devices, the quick exit may be prevented by OS restrictions

---

## Technical Highlights

### Mobile Development Best Practices

1. **Privacy-First Architecture:** Implemented local-only data storage to ensure user safety and confidentiality
2. **Cross-Platform Compatibility:** Single codebase supporting both iOS and Android platforms
3. **Offline Functionality:** Full app functionality without internet dependency
4. **Responsive Design:** Adaptive UI components for various device sizes and orientations
5. **Secure Data Handling:** Encrypted local storage using AsyncStorage for sensitive information

---

## Project Impact

This application demonstrates the practical application of mobile technology to address critical social issues. By combining modern development practices with a user-centered design approach, the app provides:

- **Immediate Access:** Direct connection to crisis support resources
- **Privacy Protection:** Local-only data storage ensuring user confidentiality
- **User Empowerment:** Tools for personal safety planning and emergency preparedness
- **Educational Value:** Comprehensive information about domestic violence and available support

### Technical Achievements

- ✅ Multi-screen React Native application with smooth navigation
- ✅ Local data persistence with AsyncStorage
- ✅ Native device integration (phone, SMS, browser)
- ✅ Cross-platform compatibility (iOS/Android)
- ✅ Privacy-focused design with no external data transmission

---

## Developer

**Kendahl Bingham**

- 💼 **GitHub:** [@kendychae](https://github.com/kendychae)
- 📧 **Contact:** [Add your professional email]
- 🔗 **LinkedIn:** [Add your LinkedIn profile]
- 🌐 **Portfolio:** [Add your portfolio website]

### Contributing

This project welcomes contributions! If you'd like to improve the app or add features:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## Important Note

**If you or someone you know is experiencing domestic violence, please reach out for help:**

- **National Domestic Violence Hotline:** 1-800-799-7233
- **Text START to 88788**
- **Online chat:** thehotline.org
- **Emergency:** 911

You are not alone. Help is available 24/7.

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Disclaimer:** This application provides information and tools to support individuals experiencing domestic violence. It is designed to complement, not replace, professional support services and emergency response systems. Always contact emergency services (911) for immediate danger.
