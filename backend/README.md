# Portfolio Contact Form Backend

This is the backend server for handling contact form submissions from the portfolio website.

## Features

- ✅ Express.js REST API
- ✅ Email notifications using Nodemailer
- ✅ Form validation with express-validator
- ✅ CORS enabled for frontend integration
- ✅ Auto-reply to sender
- ✅ Beautiful HTML email templates
- ✅ Environment variables for security

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the backend directory:

```bash
cp .env.example .env
```

Then edit the `.env` file with your email credentials:

```env
PORT=5000
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your-app-password-here
RECEIVER_EMAIL=your.email@gmail.com
NODE_ENV=development
```

### 3. Get Gmail App Password

1. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
2. Sign in to your Google Account
3. Select "Mail" as the app
4. Select "Other (Custom name)" and enter "Portfolio Contact"
5. Click "Generate"
6. Copy the 16-character password
7. Paste it in your `.env` file as `EMAIL_PASS`

### 4. Start the Server

**Development mode (with auto-restart):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### Health Check
```
GET /
```
Returns API status

### Send Contact Message
```
POST /api/contact
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I would like to discuss a project with you."
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Message sent successfully! Check your email for confirmation."
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Failed to send message. Please try again later."
}
```

## Email Services

The server is configured for Gmail by default. To use other email services:

### Outlook/Hotmail
```javascript
service: 'outlook'
```

### Yahoo
```javascript
service: 'yahoo'
```

### Custom SMTP
```javascript
host: 'smtp.example.com',
port: 587,
secure: false
```

## Security Notes

- Never commit the `.env` file to version control
- Use App Passwords, not your regular email password
- Keep your `EMAIL_PASS` secure
- Enable 2-Factor Authentication on your email account

## Testing

You can test the API using tools like:
- Postman
- cURL
- Thunder Client (VS Code extension)

Example cURL command:
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

## Troubleshooting

### "Invalid login" error
- Make sure you're using an App Password, not your regular password
- Check that 2FA is enabled on your Google account
- Verify the email and password in your `.env` file

### CORS errors
- The server has CORS enabled for all origins in development
- For production, update the CORS configuration in `server.js`

### Port already in use
- Change the PORT in your `.env` file
- Or stop the process using port 5000

## Production Deployment

For production, you can deploy to:
- **Heroku**: `heroku create` and `git push heroku main`
- **Vercel**: Use serverless functions
- **Railway**: Connect your GitHub repo
- **DigitalOcean**: Deploy on a droplet
- **AWS EC2**: Traditional server deployment

Remember to set environment variables in your hosting platform!
# Portfoliobackend
