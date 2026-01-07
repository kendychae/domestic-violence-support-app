# 🚀 Beginner's Setup Guide for Kendahl Bingham

This guide walks you through **every single step** to get your app running. Don't worry if you're new to this - I'll explain everything!

---

## 📋 What You're Going to Do

1. Install Node.js (required for React Native)
2. Install Android Studio (to run the app)
3. Install project dependencies
4. Run your app on an Android emulator
5. Optionally: Put your project on GitHub

---

## Step 1: Install Node.js (15 minutes)

Node.js lets you run JavaScript on your computer and is required for React Native.

### Instructions:

1. **Open your web browser** and go to: https://nodejs.org/
2. **Download** the version labeled **"LTS"** (Long Term Support) - it's the recommended one
3. **Run the installer** you just downloaded
4. **Click "Next"** through all the steps (default settings are fine)
5. **Restart your computer** after installation

### Verify it worked:

1. Open **PowerShell** (search for it in Windows Start menu)
2. Type this command and press Enter:
   ```powershell
   node --version
   ```
3. You should see something like `v18.19.0` or similar
4. Also check npm (Node Package Manager):
   ```powershell
   npm --version
   ```
5. You should see something like `10.2.3` or similar

✅ **If you see version numbers, you're good!**

---

## Step 2: Install Android Studio (30-45 minutes)

Android Studio lets you create a virtual Android phone on your computer to test apps.

### Instructions:

1. **Go to:** https://developer.android.com/studio
2. **Download** Android Studio (it's a big file, ~1GB)
3. **Run the installer**
4. **Choose "Standard" installation** when asked
5. **Wait for it to download** Android SDK and other components (this takes a while!)

### Set up an Android Virtual Device (Emulator):

After Android Studio opens:

1. **Click** on "More Actions" dropdown (or "Configure" in older versions)
2. **Click** "Virtual Device Manager" or "AVD Manager"
3. **Click** "Create Virtual Device"
4. **Select** "Pixel 5" or any phone you like, then click **Next**
5. **Select** a system image (choose one with the highest API level, like "Tiramisu" or "UpsideDownCake"), click **Download** next to it
6. **Wait** for the download to finish, then click **Next**
7. **Click** "Finish"

✅ **You now have a virtual Android phone!**

### Set up Environment Variables (Important!):

1. **Open** Windows Start Menu and search for "Environment Variables"
2. **Click** "Edit the system environment variables"
3. **Click** "Environment Variables" button at the bottom
4. **Under "User variables"**, click **"New"**
5. **Variable name:** `ANDROID_HOME`
6. **Variable value:** `C:\Users\kendy\AppData\Local\Android\Sdk`
   (This is usually the default location. If yours is different, find it in Android Studio under File > Settings > Appearance & Behavior > System Settings > Android SDK)
7. **Click OK** to save

8. **Find** the "Path" variable in "User variables" and click **"Edit"**
9. **Click** "New" and add: `%ANDROID_HOME%\platform-tools`
10. **Click** "New" again and add: `%ANDROID_HOME%\emulator`
11. **Click OK** on everything

12. **Close and reopen PowerShell** for changes to take effect

### Verify Android tools:

```powershell
adb --version
```

You should see version info. If not, restart your computer and try again.

---

## Step 3: Install Project Dependencies (5 minutes)

Now let's install all the code libraries your app needs.

### Instructions:

1. **Open PowerShell**
2. **Navigate** to your project folder:
   ```powershell
   cd C:\Users\kendy\OneDrive\DomesticViolenceSupportApp
   ```
3. **Install dependencies** (this downloads all the required packages):
   ```powershell
   npm install
   ```
4. **Wait** for it to finish (3-5 minutes). You'll see lots of text scrolling - that's normal!

✅ **Done when you see the command prompt again without errors**

---

## Step 4: Run Your App! (10 minutes)

Time to see your app in action!

### Instructions:

1. **Open Android Studio**
2. **Click** the "Device Manager" button (phone icon on the right side)
3. **Click the green play button** next to your virtual device to start it
4. **Wait** for the virtual phone to fully boot up (you'll see the home screen)

5. **Go back to PowerShell** (still in your project folder)
6. **Run this command:**
   ```powershell
   npm run android
   ```

7. **What happens next:**
   - Metro bundler will start (shows a colorful menu)
   - Your app will build (takes 2-5 minutes the first time)
   - The app will automatically install on the virtual phone
   - Your app will open!

### Troubleshooting:

**If you get an error about "adb":**
- Make sure the environment variables are set correctly
- Restart PowerShell
- Restart your computer if needed

**If the emulator won't start:**
- Make sure virtualization is enabled in your computer's BIOS
- Try creating a new virtual device with a lower API level

**If build fails:**
- Delete `node_modules` folder and run `npm install` again
- Make sure you have internet connection

---

## Step 5: Testing Your App

Once your app opens on the virtual phone:

### Try these features:

1. **Home Screen** - See all the menu options
2. **24/7 Helpline** - Tap to see hotline numbers
3. **Emergency Contacts** - Add a test contact (use fake data like "John Doe" and "555-1234")
4. **Safety Plan** - Type something in any field and save it
5. **Close the app** and reopen it - your data should still be there! (This proves local storage works)

### Taking Screenshots:

On the right side of the emulator window, there's a camera icon - click it to take screenshots for your demo video!

---

## 🎥 Recording Your Demo Video

You need to record a video showing your app working.

### Option 1: Screen Recording (Recommended)

**Windows Built-in Screen Recorder:**
1. Press `Windows + G` to open Xbox Game Bar
2. Click the record button (circle icon)
3. Open your app and demonstrate the features
4. Press `Windows + Alt + R` to stop recording
5. Find your video in `C:\Users\kendy\Videos\Captures`

**OBS Studio (Free, professional):**
1. Download from: https://obsproject.com/
2. Much more control over your recording

### Option 2: Use Phone Camera

Just point your phone camera at your computer screen while you demonstrate the app!

### What to Show in Your Video (3-5 minutes):

1. **Introduction:** "Hi, I'm Kendahl Bingham, and this is my Domestic Violence Support App"
2. **Home Screen:** Show the navigation
3. **Add a Contact:** Demonstrate adding and saving an emergency contact
4. **Safety Plan:** Show filling out the safety plan and saving it
5. **Reopen App:** Close and reopen to prove data persists
6. **Helpline Screen:** Show the hotline numbers
7. **Conclusion:** "This app provides support resources and safety planning for domestic violence victims"

### Upload Your Video:

**YouTube (Recommended):**
1. Go to: https://youtube.com
2. Sign in with your Google account
3. Click the camera+ icon → "Upload video"
4. Choose "Unlisted" so only people with the link can see it
5. Copy the link and add it to your README

**Google Drive:**
1. Upload video to Google Drive
2. Right-click → Get link → Change to "Anyone with the link"
3. Copy the link and add it to your README

---

## 📤 Putting Your Project on GitHub (Optional but Recommended)

Yes, you should definitely put this on GitHub! It's like Google Drive for code and looks great on your resume.

### Step-by-Step:

#### 1. Create a GitHub Account (if you don't have one)
1. Go to: https://github.com
2. Click "Sign up"
3. Follow the steps

#### 2. Install Git on Windows
1. Download from: https://git-scm.com/download/win
2. Run the installer (default settings are fine)
3. Restart PowerShell after installation

#### 3. Configure Git (First Time Only)
Open PowerShell and run:
```powershell
git config --global user.name "Kendahl Bingham"
git config --global user.email "your-email@example.com"
```
(Use the same email as your GitHub account)

#### 4. Create a New Repository on GitHub
1. Go to GitHub and sign in
2. Click the "+" icon (top right) → "New repository"
3. **Repository name:** `domestic-violence-support-app`
4. **Description:** "Mobile app providing resources and support for domestic violence victims"
5. **Keep it Public** (unless you want it private)
6. **DO NOT** check "Initialize with README" (you already have one!)
7. Click "Create repository"

#### 5. Upload Your Project to GitHub
Back in PowerShell (in your project folder):

```powershell
# Initialize git in your project
git init

# Add all your files
git add .

# Create your first commit
git commit -m "Initial commit - Domestic Violence Support App"

# Connect to GitHub (replace YOUR-USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/domestic-violence-support-app.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

**If it asks for credentials:**
- Username: Your GitHub username
- Password: Use a Personal Access Token (not your password)
  - Get one at: https://github.com/settings/tokens
  - Click "Generate new token (classic)"
  - Give it a name, check "repo" permission
  - Copy the token and use it as the password

✅ **Your project is now on GitHub!**

#### 6. Add the GitHub Link to Your README
1. Copy your GitHub repository URL (like: `https://github.com/yourusername/domestic-violence-support-app`)
2. Add it to your README under a "GitHub Repository" section

---

## 🎓 For Your Assignment Submission

Make sure you have:

- ✅ README.md with your name (Kendahl Bingham) ✓
- ✅ Demo video link added to README
- ✅ GitHub repository link (optional but recommended)
- ✅ All code files in your project
- ✅ Screenshots or video showing:
  - Multiple screens working
  - Data persistence (contacts/safety plan saved)
  - Interactive features (buttons, inputs)

---

## 🆘 Need Help?

### Common Issues:

**"npm is not recognized"**
- Node.js isn't installed correctly or you need to restart PowerShell

**"Could not connect to development server"**
- Make sure Metro bundler is running (the colorful terminal)
- Try closing and running `npm start` in one terminal, then `npm run android` in another

**Emulator is too slow**
- Give it more RAM in AVD Manager settings
- Or use a physical Android device (enable Developer Options and USB Debugging)

**Build errors**
- Delete `node_modules` folder
- Delete `android/app/build` folder
- Run `npm install` again
- Try `cd android && ./gradlew clean && cd ..`

### Getting More Help:

1. **Search the error message** on Google or Stack Overflow
2. **Ask your instructor or TA**
3. **React Native Documentation:** https://reactnative.dev/docs/getting-started
4. **Watch YouTube tutorials** on "React Native Android setup"

---

## 🎉 Congratulations!

If you've made it through all these steps, you've:
- Set up a complete mobile development environment
- Run a React Native app with 5 screens
- Implemented local data storage
- Created phone integration features
- Learned about app navigation

This is a huge accomplishment! Mobile development is not easy, especially for beginners. You should be proud! 🌟

---

**Next Steps After This Class:**
- Try modifying the app (change colors, text, add features)
- Build another React Native app
- Learn more JavaScript/React
- Explore Flutter or native Android development

Good luck with your assignment, Kendahl! 🚀
