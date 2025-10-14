const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('❌ MongoDB Connection Error:', err));

// Middleware
const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://localhost:3003',
    'https://pravin-peach.vercel.app',
    'https://pravin-fat9e24ht-pravins-projects-aec234d3.vercel.app',
    /\.vercel\.app$/ // Allow all Vercel preview deployments
  ],
  credentials: true
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import portfolio routes
const portfolioRoutes = require('./routes/portfolio');
app.use('/api/portfolio', portfolioRoutes);

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio API is running!', mongodb: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected' });
});

// Contact form endpoint
app.post('/api/contact', [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('subject').trim().notEmpty().withMessage('Subject is required'),
  body('message').trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters')
], async (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ 
      success: false, 
      errors: errors.array() 
    });
  }

  const { name, email, subject, message } = req.body;

  try {
    // Log environment variables status (without exposing values)
    console.log('=== Email Configuration Check ===');
    console.log('EMAIL_USER set:', !!process.env.EMAIL_USER);
    console.log('EMAIL_PASS set:', !!process.env.EMAIL_PASS);
    console.log('RECEIVER_EMAIL set:', !!process.env.RECEIVER_EMAIL);
    console.log('Sender email:', email);
    
    // Check if required environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('ERROR: Missing EMAIL_USER or EMAIL_PASS environment variables!');
      return res.status(500).json({
        success: false,
        message: 'Email service is not configured. Please contact the administrator.',
        error: 'Missing environment variables'
      });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log('Transporter created, attempting to send emails...');

    // Send both emails in parallel using Promise.allSettled
    const [emailToOwnerResult, emailToSenderResult] = await Promise.allSettled([
      // Email to you (the portfolio owner)
      transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.RECEIVER_EMAIL || 'pravinsurya2905@gmail.com',
        replyTo: email,
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
            <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #00d9ff; border-bottom: 3px solid #00d9ff; padding-bottom: 10px;">New Contact Form Submission</h2>
              
              <div style="margin: 20px 0;">
                <p style="margin: 10px 0;"><strong style="color: #333;">Name:</strong> ${name}</p>
                <p style="margin: 10px 0;"><strong style="color: #333;">Email:</strong> <a href="mailto:${email}" style="color: #00d9ff;">${email}</a></p>
                <p style="margin: 10px 0;"><strong style="color: #333;">Subject:</strong> ${subject}</p>
              </div>
              
              <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #00d9ff; border-radius: 5px;">
                <p style="margin: 0;"><strong style="color: #333;">Message:</strong></p>
                <p style="margin: 10px 0; line-height: 1.6; color: #555;">${message}</p>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #888; font-size: 12px;">
                <p>This email was sent from your portfolio contact form</p>
                <p>Reply directly to this email to respond to ${name}</p>
              </div>
            </div>
          </div>
        `
      }),
      
      // Auto-reply email to the sender
      transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thank you for contacting me!',
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
            <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #00d9ff; border-bottom: 3px solid #00d9ff; padding-bottom: 10px;">Thank You for Reaching Out!</h2>
              
              <p style="color: #333; line-height: 1.6;">Hi ${name},</p>
              
              <p style="color: #555; line-height: 1.6;">
                Thank you for contacting me through my portfolio. I've received your message and will get back to you as soon as possible.
              </p>
              
              <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #00d9ff; border-radius: 5px;">
                <p style="margin: 0; color: #333;"><strong>Your Message:</strong></p>
                <p style="margin: 10px 0; color: #555; line-height: 1.6;">${message}</p>
              </div>
              
              <p style="color: #555; line-height: 1.6;">
                I typically respond within 24-48 hours. If you have any urgent matters, please feel free to reach out to me directly.
              </p>
              
              <p style="color: #333; line-height: 1.6; margin-top: 20px;">
                Best regards,<br/>
                <strong>Pravin Surya</strong><br/>
                <span style="color: #888; font-size: 14px;">Full Stack Developer</span>
              </p>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #888; font-size: 12px;">
                <p>This is an automated response from the portfolio contact form</p>
              </div>
            </div>
          </div>
        `
      })
    ]);

    // Log results
    console.log('Email to owner status:', emailToOwnerResult.status);
    console.log('Email to sender status:', emailToSenderResult.status);
    
    if (emailToOwnerResult.status === 'rejected') {
      console.error('Failed to send email to owner:', emailToOwnerResult.reason);
    }
    
    if (emailToSenderResult.status === 'rejected') {
      console.error('Failed to send email to sender:', emailToSenderResult.reason);
    }

    // Return success if at least the owner email was sent
    if (emailToOwnerResult.status === 'fulfilled') {
      res.status(200).json({ 
        success: true, 
        message: 'Message sent successfully! Check your email for confirmation.' 
      });
    } else {
      throw new Error('Failed to send notification email');
    }

  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error details:', error.message);
    console.error('EMAIL_USER set:', !!process.env.EMAIL_USER);
    console.error('EMAIL_PASS set:', !!process.env.EMAIL_PASS);
    console.error('RECEIVER_EMAIL set:', !!process.env.RECEIVER_EMAIL);
    
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong!' 
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📧 Email service: Gmail (Nodemailer)`);
  console.log(`📧 EMAIL_USER configured: ${process.env.EMAIL_USER ? 'Yes' : 'No - Please configure .env file'}`);
  console.log(`📧 EMAIL_PASS configured: ${process.env.EMAIL_PASS ? 'Yes' : 'No - Please configure .env file'}`);
});
