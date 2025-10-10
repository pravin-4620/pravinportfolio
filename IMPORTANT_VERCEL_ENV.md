# ⚠️ IMPORTANT: Add Environment Variables to Vercel NOW!

## 🚨 Your deployment will fail without these variables!

### Step-by-Step Instructions:

1. **Go to Vercel Dashboard:**
   ```
   https://vercel.com/pravins-projects-aec234d3/pravin/settings/environment-variables
   ```

2. **Add Variable 1 - Gmail Email:**
   - Click "Add New" button
   - **Key**: `EMAIL_USER`
   - **Value**: `pravinsurya2905@gmail.com`
   - **Environments**: ✅ Production, ✅ Preview, ✅ Development
   - Click "Save"

3. **Add Variable 2 - Gmail App Password:**
   - Click "Add New" again
   - **Key**: `EMAIL_PASS`
   - **Value**: YOUR_GMAIL_APP_PASSWORD (see below to generate)
   - **Environments**: ✅ Production, ✅ Preview, ✅ Development
   - Click "Save"

4. **Add Variable 3 - Receiver Email:**
   - Click "Add New" again
   - **Key**: `RECEIVER_EMAIL`
   - **Value**: `pravinsurya2905@gmail.com`
   - **Environments**: ✅ Production, ✅ Preview, ✅ Development
   - Click "Save"

---

## 📧 How to Get Gmail App Password:

1. **Go to your Google Account:**
   - Visit: https://myaccount.google.com/security
   
2. **Enable 2-Step Verification** (if not already enabled):
   - Search for "2-Step Verification"
   - Click "Get Started" and follow the steps

3. **Create App Password:**
   - Search for "App passwords" or visit: https://myaccount.google.com/apppasswords
   - Select app: "Mail"
   - Select device: "Other (Custom name)" → type "Portfolio Contact Form"
   - Click "Generate"
   - **Copy the 16-character password** (it will look like: `xxxx xxxx xxxx xxxx`)

4. **Use this password as EMAIL_PASS in Vercel**

---

## 🔄 Redeploy After Adding Variables:

1. Go to Deployments tab
2. Click "..." on latest deployment
3. Click "Redeploy"
4. Check "Use existing Build Cache"
5. Click "Redeploy"

---

## ✅ Quick Link

**Direct link to add environment variables:**
https://vercel.com/pravins-projects-aec234d3/pravin/settings/environment-variables

---

## 🎯 After Adding Variables:

Wait 2 minutes for redeployment, then:

1. Go to: https://pravin-peach.vercel.app
2. Test the contact form
3. Check BOTH your inbox (you'll receive the contact message) AND the sender's inbox (they'll receive the thank you email)!

---

**DO THIS NOW! Your contact form won't work without these variables!** ⚠️
