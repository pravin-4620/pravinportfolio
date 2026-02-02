# 🚨 URGENT: Backend Environment Variables Setup

## Your backend at `https://backend-self-theta-72.vercel.app` needs these variables!

---

## Step 1: Generate Gmail App Password

1. **Go to Google Account Security:**
   - Visit: https://myaccount.google.com/security

2. **Enable 2-Step Verification** (if not already enabled):
   - Search for "2-Step Verification"
   - Click "Get Started" and complete setup

3. **Create App Password:**
   - Visit: https://myaccount.google.com/apppasswords
   - Select app: **Mail**
   - Select device: **Other (Custom name)** → Type: "Portfolio Backend"
   - Click **Generate**
   - **COPY THE 16-CHARACTER PASSWORD** (looks like: `xxxx xxxx xxxx xxxx`)
   - ⚠️ **SAVE THIS PASSWORD - You can't see it again!**

---

## Step 2: Add Environment Variables to Vercel Backend

1. **Go to Backend Vercel Dashboard:**
   ```
   https://vercel.com/pravins-projects-aec234d3/backend/settings/environment-variables
   ```
   
   (Or search for "Portfoliobackend" or "backend-self-theta-72" in your Vercel dashboard)

2. **DELETE old variables** (if they exist):
   - Remove `RESEND_API_KEY` (not needed anymore)

3. **Add these 3 NEW variables:**

### Variable 1: EMAIL_USER
- **Key:** `EMAIL_USER`
- **Value:** `pravinsurya2905@gmail.com`
- **Environments:** ✅ Production ✅ Preview ✅ Development
- Click **Save**

### Variable 2: EMAIL_PASS
- **Key:** `EMAIL_PASS`
- **Value:** [PASTE THE 16-CHARACTER APP PASSWORD FROM STEP 1]
- **Environments:** ✅ Production ✅ Preview ✅ Development
- Click **Save**

### Variable 3: RECEIVER_EMAIL
- **Key:** `RECEIVER_EMAIL`
- **Value:** `pravinsurya2905@gmail.com`
- **Environments:** ✅ Production ✅ Preview ✅ Development
- Click **Save**

---

## Step 3: Redeploy Backend

1. Go to **Deployments** tab in Vercel
2. Find the latest deployment
3. Click the **"..."** (three dots) menu
4. Click **"Redeploy"**
5. Click **"Redeploy"** again to confirm
6. Wait 1-2 minutes for deployment to complete

---

## Step 4: Test the Contact Form

1. Open your portfolio: https://pravin-peach.vercel.app
2. Go to the Contact section
3. Fill out the form and submit
4. **Check your email inbox** - You should receive the contact message
5. **Ask the sender to check their inbox** - They should receive an automated thank you email!

---

## 🎯 What This Does:

✅ **Switches from Resend to Gmail** (more reliable)
✅ **Sends you the contact form submission**
✅ **Automatically sends the sender a professional thank you email**
✅ **Works with your existing Gmail account**

---

## 🔍 Troubleshooting:

### If emails aren't sending:

1. **Check Vercel logs:**
   - Go to: https://vercel.com/pravins-projects-aec234d3/backend/logs
   - Look for error messages

2. **Verify environment variables are set:**
   - Go to: https://vercel.com/pravins-projects-aec234d3/backend/settings/environment-variables
   - Make sure all 3 variables are there with green checkmarks

3. **Check Gmail settings:**
   - Make sure 2-Step Verification is enabled
   - Make sure the App Password is correct (no spaces)

4. **Check spam folder:**
   - The automated email might be in spam initially

---

## 📌 Important Notes:

- **The App Password is NOT your Gmail password**
- **Keep the App Password secure** - treat it like a password
- **The automated email will come FROM your Gmail** (pravinsurya2905@gmail.com)
- **Both you and the sender will receive emails** after each form submission

---

**DO THIS NOW TO FIX THE AUTOMATED EMAILS!** ⚠️
