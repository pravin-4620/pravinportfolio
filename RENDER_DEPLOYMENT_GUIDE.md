# 🔧 How to Deploy Backend & Add Environment Variables on Render

## 📋 Step-by-Step Guide (With Screenshots Instructions)

### Step 1: Go to Render
1. Open browser and go to: **https://render.com**
2. Click **"Get Started for Free"** or **"Sign In"**
3. **Sign in with GitHub** (easiest option)
4. Authorize Render to access your GitHub

---

### Step 2: Create New Web Service
1. On Render dashboard, click the **"New +"** button (top right)
2. Select **"Web Service"**
3. Click **"Connect account"** if GitHub isn't connected yet

---

### Step 3: Select Your Repository
1. You'll see a list of your GitHub repositories
2. Find and click **"Connect"** next to `pravinportfolio`
3. If you don't see it, click **"Configure account"** and give Render access

---

### Step 4: Configure the Web Service

Fill in these settings **EXACTLY**:

#### Basic Settings:
- **Name**: `pravin-portfolio-backend` (or any name you like)
- **Region**: Choose closest to you (e.g., `Oregon (US West)`)
- **Branch**: `main`
- **Root Directory**: `backend` ⚠️ **IMPORTANT!**

#### Build & Deploy:
- **Runtime**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `npm start`

#### Instance:
- **Instance Type**: Select **"Free"** (it's at the bottom)

---

### Step 5: Add Environment Variables ⭐ (MOST IMPORTANT!)

Scroll down to **"Environment Variables"** section and click **"Add Environment Variable"**

Add these **4 variables** one by one:

#### Variable 1:
- **Key**: `EMAIL_USER`
- **Value**: `your.gmail@gmail.com` (your actual Gmail address)
- Click **"Add"**

#### Variable 2:
- **Key**: `EMAIL_PASS`
- **Value**: `your-app-password-here` (your 16-character Gmail App Password)
- Click **"Add"**

#### Variable 3:
- **Key**: `RECEIVER_EMAIL`
- **Value**: `your.gmail@gmail.com` (where you want to receive emails)
- Click **"Add"**

#### Variable 4:
- **Key**: `NODE_ENV`
- **Value**: `production`
- Click **"Add"**

---

### Step 6: Deploy!
1. Click **"Create Web Service"** button at the bottom
2. Wait 2-5 minutes for deployment (you'll see logs)
3. When done, you'll see ✅ **"Your service is live"**

---

### Step 7: Get Your Backend URL

After deployment completes:
1. You'll see your backend URL at the top, like:
   ```
   https://pravin-portfolio-backend.onrender.com
   ```
2. **COPY THIS URL** - you'll need it!

---

### Step 8: Test Your Backend

Open in browser:
```
https://your-backend-url.onrender.com/api/health
```

You should see:
```json
{"status":"ok","service":"Portfolio Contact API"}
```

---

## 🔑 Where to Get Gmail App Password (If You Don't Have It)

### Step 1: Enable 2-Factor Authentication
1. Go to: https://myaccount.google.com/security
2. Find **"2-Step Verification"**
3. Click **"Get Started"** and follow the steps
4. Enable it (you'll need your phone)

### Step 2: Create App Password
1. Go to: https://myaccount.google.com/apppasswords
2. You might need to sign in again
3. Under **"Select app"**, choose **"Mail"**
4. Under **"Select device"**, choose **"Other"**
5. Type: `Portfolio Backend`
6. Click **"Generate"**
7. **COPY the 16-character password** (looks like: `abcd efgh ijkl mnop`)
8. **Use this password** as `EMAIL_PASS` value on Render

---

## 📝 Environment Variables Summary

Here's what you need to add on Render:

| Key | Value | Example |
|-----|-------|---------|
| `EMAIL_USER` | Your Gmail address | `pravin@gmail.com` |
| `EMAIL_PASS` | Gmail App Password (16 chars) | `abcd efgh ijkl mnop` |
| `RECEIVER_EMAIL` | Where to receive emails | `pravin@gmail.com` |
| `NODE_ENV` | Production environment | `production` |

---

## 🔗 Step 9: Update Frontend to Use Backend URL

After your backend is deployed, you need to update your React app:

### I'll help you update the code:

Your backend URL will be something like:
```
https://pravin-portfolio-backend.onrender.com
```

We need to change the contact form to use this URL instead of `localhost:5001`

**Tell me your backend URL when it's deployed, and I'll update the code for you!**

---

## ✅ Checklist

- [ ] Go to render.com
- [ ] Sign in with GitHub
- [ ] Create new Web Service
- [ ] Select `pravinportfolio` repository
- [ ] Set Root Directory to `backend`
- [ ] Add all 4 environment variables
- [ ] Deploy service
- [ ] Copy backend URL
- [ ] Test `/api/health` endpoint
- [ ] Update frontend with backend URL

---

## 🆘 Common Issues

### "Repository not found"
- Go to Render → Account Settings → GitHub
- Click "Configure" and give access to your repo

### "Build failed"
- Check Root Directory is set to `backend`
- Check Build Command is `npm install`
- Check Start Command is `npm start`

### "Service unhealthy"
- Check all environment variables are added
- Check EMAIL_PASS is the App Password (not regular password)
- View logs on Render dashboard for errors

### "Can't send emails"
- Verify 2FA is enabled on Gmail
- Verify App Password is correct (16 characters)
- Check EMAIL_USER is your full Gmail address

---

## 🎯 What Happens Next

1. **Backend deploys on Render** ✅
2. **You get a backend URL** (like: `https://pravin-portfolio-backend.onrender.com`)
3. **I'll update your frontend** to use this URL
4. **Contact form will work!** 📧

---

## 💡 After Deployment

Once you have the backend URL, just tell me and I'll:
1. Update `ContactEnhanced.js` with the new backend URL
2. Commit and push to GitHub
3. Vercel will auto-deploy the updated frontend
4. Your contact form will work perfectly!

---

**Let me know once you've deployed to Render and I'll help you connect everything!** 🚀
