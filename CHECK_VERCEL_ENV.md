# ⚠️ CRITICAL: Check Your Vercel Environment Variables NOW!

The backend code has been updated, but emails won't work until you add the environment variables.

## 🔍 Quick Check:

### 1. Open your Backend Vercel Dashboard:
Click this link: **https://vercel.com/pravins-projects-aec234d3/backend/settings/environment-variables**

(If that doesn't work, go to https://vercel.com → Find "backend" or "Portfoliobackend" project → Settings → Environment Variables)

---

## 2. Do you see these 3 variables?

✅ **EMAIL_USER** (should be: pravinsurya2905@gmail.com)
✅ **EMAIL_PASS** (should be: 16-character app password)
✅ **RECEIVER_EMAIL** (should be: pravinsurya2905@gmail.com)

---

## ❌ If you DON'T see these variables:

### You MUST add them now:

#### Step A: Generate Gmail App Password (if you haven't already)
1. Go to: https://myaccount.google.com/security
2. Enable **2-Step Verification**
3. Go to: https://myaccount.google.com/apppasswords
4. Create App Password:
   - App: Mail
   - Device: Other → "Portfolio Backend"
   - Click Generate
5. **COPY THE 16-CHARACTER PASSWORD** (looks like: `abcd efgh ijkl mnop`)

#### Step B: Add Variables to Vercel
1. In the Environment Variables page, click **"Add New"** for each:

**Variable 1:**
- Name: `EMAIL_USER`
- Value: `pravinsurya2905@gmail.com`
- Check all environments (Production, Preview, Development)
- Click Save

**Variable 2:**
- Name: `EMAIL_PASS`
- Value: [PASTE THE 16-CHARACTER APP PASSWORD]
- Check all environments
- Click Save

**Variable 3:**
- Name: `RECEIVER_EMAIL`
- Value: `pravinsurya2905@gmail.com`
- Check all environments
- Click Save

#### Step C: Redeploy
1. Go to **Deployments** tab
2. Click the "..." menu on the latest deployment
3. Click "Redeploy"
4. Wait 2 minutes

---

## ✅ If you DO see these variables:

### Check if they're correct:
- Click on each variable to view/edit
- Make sure there are no typos
- Make sure EMAIL_PASS is the Gmail App Password (not your regular Gmail password)

### Then Redeploy:
1. Go to **Deployments** tab
2. Click "Redeploy" on the latest deployment
3. Wait 2 minutes

---

## 🧪 After Setting Variables and Redeploying:

1. Open: https://pravin-peach.vercel.app
2. Go to Contact section
3. Fill the form with YOUR email address in the "Email" field
4. Submit
5. **Check YOUR inbox** - you should get the thank you email
6. **Check your Gmail sent folder** - you should see the sent emails

---

## 🔍 Still Not Working?

### Check Vercel Logs:
1. Go to: https://vercel.com/pravins-projects-aec234d3/backend
2. Click on the latest deployment
3. Click "Logs" or "Runtime Logs"
4. Look for errors mentioning "nodemailer" or "EMAIL_USER" or "EMAIL_PASS"

### Common Issues:
- ❌ Environment variables not set
- ❌ Gmail App Password incorrect
- ❌ 2-Step Verification not enabled on Gmail
- ❌ Didn't redeploy after adding variables
- ❌ Using regular Gmail password instead of App Password

---

**THE AUTOMATED EMAILS WILL NOT WORK UNTIL YOU ADD THESE ENVIRONMENT VARIABLES!** ⚠️
