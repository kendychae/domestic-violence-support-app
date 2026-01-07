# GitHub Setup - Quick Steps for Kendahl

## Step 1: Check if Git is Installed

Open PowerShell and run:
```powershell
git --version
```

- **If you see a version number** (like `git version 2.x.x`): ✅ Git is installed! Go to Step 3
- **If you get an error**: ⚠️ Need to install Git - Go to Step 2

---

## Step 2: Install Git (If Needed)

1. Download from: https://git-scm.com/download/win
2. Run the installer
3. Use all default settings (just keep clicking "Next")
4. **Restart PowerShell** after installation
5. Test again: `git --version`

---

## Step 3: Configure Git (First Time Only)

Run these commands in PowerShell (replace with your info):

```powershell
git config --global user.name "Kendahl Bingham"
git config --global user.email "your-email@byui.edu"
```

Use the same email you'll use for GitHub!

---

## Step 4: Create GitHub Account

1. Go to: https://github.com
2. Click "Sign up"
3. Choose a username (something professional like: `kendahl-bingham` or `kbingham`)
4. Use your school email
5. Verify your email

---

## Step 5: Create Repository on GitHub

1. Sign in to GitHub
2. Click the **"+"** icon (top right) → **"New repository"**
3. Fill in:
   - **Repository name:** `domestic-violence-support-app`
   - **Description:** `Mobile app providing resources and support for domestic violence victims`
   - **Public** (keep it public)
   - **DO NOT** check "Initialize with README" (you already have one!)
4. Click **"Create repository"**

GitHub will show you a page with instructions - **keep this page open!**

---

## Step 6: Upload Your Project to GitHub

Copy and paste these commands **ONE AT A TIME** in PowerShell (make sure you're in your project folder):

### First, make sure you're in the right folder:
```powershell
cd C:\Users\kendy\OneDrive\DomesticViolenceSupportApp
```

### Initialize git:
```powershell
git init
```

### Add all your files:
```powershell
git add .
```

### Create your first commit:
```powershell
git commit -m "Initial commit - Domestic Violence Support App by Kendahl Bingham"
```

### Rename branch to main:
```powershell
git branch -M main
```

### Connect to GitHub (REPLACE with YOUR username):
```powershell
git remote add origin https://github.com/YOUR-USERNAME-HERE/domestic-violence-support-app.git
```

**IMPORTANT:** Replace `YOUR-USERNAME-HERE` with your actual GitHub username!

### Push to GitHub:
```powershell
git push -u origin main
```

**When prompted for credentials:**
- **Username:** Your GitHub username
- **Password:** Use a **Personal Access Token** (see Step 7 if needed)

---

## Step 7: Create Personal Access Token (If Prompted for Password)

GitHub doesn't accept regular passwords anymore. You need a token:

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. **Note:** "CSE 310 Project Access"
4. **Expiration:** 90 days
5. **Select scopes:** Check the **"repo"** checkbox (gives full repository access)
6. Click **"Generate token"**
7. **COPY THE TOKEN** - you can't see it again!
8. Use this token as your "password" when pushing to GitHub

---

## Step 8: Verify It Worked

1. Go to your GitHub repository page
2. Refresh the page
3. You should see all your files!

Your repository URL will be:
```
https://github.com/YOUR-USERNAME/domestic-violence-support-app
```

---

## What to Include in Your Submission

✅ **GitHub Repository Link** - Add this to your README.md and submit it

Example:
```markdown
## GitHub Repository

https://github.com/kendahl-bingham/domestic-violence-support-app
```

---

## Troubleshooting

### "git is not recognized"
- Git isn't installed or PowerShell needs restart
- Install Git (Step 2) and restart PowerShell

### "fatal: remote origin already exists"
- Run: `git remote remove origin`
- Then try the `git remote add origin` command again

### "Authentication failed"
- Make sure you're using a Personal Access Token, not your password
- Create a new token (Step 7)

### "Permission denied"
- Check that your GitHub username in the URL is correct
- Make sure your token has "repo" permissions

---

## Need Help?

Let me know which step you're stuck on and I can help troubleshoot!
