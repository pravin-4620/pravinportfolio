// Vercel Serverless Function for Contact Form
// This runs on Vercel's edge network - no backend server needed!

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid email address' 
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

    // Send both emails in parallel
    const [emailToOwner, emailToSender] = await Promise.allSettled([
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
      
      // Auto-reply to the sender
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

    console.log('Email to owner status:', emailToOwner.status);
    console.log('Email to sender status:', emailToSender.status);
    
    if (emailToOwner.status === 'fulfilled') {
      console.log('Email sent to owner:', emailToOwner.value);
    } else {
      console.error('Failed to send email to owner:', emailToOwner.reason);
    }
    
    if (emailToSender.status === 'fulfilled') {
      console.log('Email sent to sender:', emailToSender.value);
    } else {
      console.error('Failed to send email to sender:', emailToSender.reason);
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully! Check your email for confirmation.' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}
