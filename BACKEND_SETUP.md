# 📧 Contact Form Backend Setup Guide

## Complete Setup Instructions

### Step 1: Navigate to Backend Directory

```bash
cd /Users/pravin/Documents/portfolio/backend
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install:
- `express` - Web framework
- `cors` - Cross-origin resource sharing
- `nodemailer` - Email sending functionality
- `dotenv` - Environment variables
- `express-validator` - Form validation
- `nodemon` (dev) - Auto-restart server

### Step 3: Configure Email Settings

1. **Create `.env` file:**

```bash
cp .env.example .env
```

2. **Get Gmail App Password:**

   a. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
   
   b. Sign in to your Google Account
   
   c. If you don't see the option, you need to:
      - Enable 2-Factor Authentication first: https://myaccount.google.com/security
      - Then return to App Passwords
   
   d. Select "Mail" as the app
   
   e. Select "Other (Custom name)" and type: `Portfolio Contact`
   
   f. Click "Generate"
   
   g. Copy the 16-character password (example: `abcd efgh ijkl mnop`)

3. **Edit your `.env` file:**

```env
PORT=5000
EMAIL_USER=your.actual.email@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
RECEIVER_EMAIL=your.actual.email@gmail.com
NODE_ENV=development
```

Replace:
- `your.actual.email@gmail.com` with your Gmail address
- `abcd efgh ijkl mnop` with the App Password you generated

### Step 4: Start the Backend Server

**Option A: Development Mode (auto-restart on changes)**
```bash
npm run dev
```

**Option B: Production Mode**
```bash
npm start
```

You should see:
```
🚀 Server is running on port 5000
📧 Email service configured: Yes
```

### Step 5: Test the Backend

Open a new terminal and test the API:

```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Message",
    "message": "This is a test message from the contact form."
  }'
```

You should receive:
```json
{
  "success": true,
  "message": "Message sent successfully! Check your email for confirmation."
}
```

### Step 6: Start the Frontend

Open a **new terminal** window:

```bash
cd /Users/pravin/Documents/portfolio
npm start
```

The React app will open at `http://localhost:3000`

## 🎯 Testing the Complete System

1. Open your browser to `http://localhost:3000`
2. Scroll down to the "Get In Touch" section
3. Fill out the contact form:
   - Name: Your Name
   - Email: your.email@example.com
   - Subject: Test Message
   - Message: This is a test message

4. Click "Send Message"

5. You should see:
   - A loading spinner while sending
   - A success message after submission
   - Two emails:
     * One to your email (the form submission)
     * One auto-reply to the sender's email

## 🐛 Troubleshooting

### Error: "Invalid login"
**Solution:** 
- Make sure you're using an App Password, not your regular Gmail password
- Verify 2FA is enabled on your Google account
- Double-check the email and password in `.env`

### Error: "Unable to connect to server"
**Solution:**
- Make sure the backend server is running on port 5000
- Check if another app is using port 5000: `lsof -i :5000`
- Try changing the port in backend `.env` and frontend `ContactEnhanced.js`

### Backend server doesn't start
**Solution:**
```bash
cd backend
rm -rf node_modules package-lock.json
npm install
npm start
```

### Port 5000 already in use
**Solution:**
```bash
# Find and kill the process
lsof -i :5000
kill -9 <PID>

# Or use a different port
# In backend/.env: PORT=5001
# In src/components/ContactEnhanced.js: change localhost:5000 to localhost:5001
```

### CORS errors in browser
**Solution:** 
- Make sure the backend server is running
- Check the browser console for specific error messages
- CORS is enabled for all origins in development mode

## 📝 What Happens When Form is Submitted

1. **Frontend validates** the form data
2. **Sends POST request** to `http://localhost:5000/api/contact`
3. **Backend validates** data again (server-side validation)
4. **Sends two emails**:
   - To you: Contains the message details
   - To sender: Auto-reply confirmation
5. **Returns success** response to frontend
6. **Frontend shows** success message

## 🚀 Production Deployment

### Deploy Backend to Heroku

```bash
cd backend
heroku create your-portfolio-backend
heroku config:set EMAIL_USER=your.email@gmail.com
heroku config:set EMAIL_PASS=your-app-password
heroku config:set RECEIVER_EMAIL=your.email@gmail.com
git init
git add .
git commit -m "Initial commit"
git push heroku main
```

### Deploy Frontend to Vercel

```bash
cd /Users/pravin/Documents/portfolio
# Update ContactEnhanced.js to use production backend URL
# Change: http://localhost:5000 to https://your-portfolio-backend.herokuapp.com
vercel
```

## 🔒 Security Best Practices

✅ **DO:**
- Use App Passwords, never regular passwords
- Keep `.env` in `.gitignore`
- Enable 2FA on your email account
- Use environment variables for all sensitive data

❌ **DON'T:**
- Commit `.env` file to git
- Share your App Password
- Use the same password for multiple apps
- Disable CORS in production without proper configuration

## 📧 Email Service Alternatives

### Using Outlook/Hotmail
```javascript
// In backend/server.js
service: 'outlook'
```

### Using SendGrid (Recommended for Production)
```bash
npm install @sendgrid/mail
```

```javascript
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
```

### Using AWS SES
```bash
npm install aws-sdk
```

## ✅ Final Checklist

- [ ] Backend dependencies installed
- [ ] `.env` file created with correct credentials
- [ ] 2FA enabled on Gmail account
- [ ] App Password generated
- [ ] Backend server running (port 5000)
- [ ] Frontend running (port 3000)
- [ ] Test email sent successfully
- [ ] Received both emails (submission + auto-reply)

## 🎉 You're Done!

Your contact form is now fully functional with:
- Real email sending
- Form validation
- Loading states
- Error handling
- Success messages
- Auto-reply emails
- Beautiful email templates

Enjoy your working portfolio! 🚀
