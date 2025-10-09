# CG-VAK Certificate Setup Guide

## 📋 Overview
You've successfully added the certificate viewer feature for CG - VAK Softwares & Exports Pvt Ltd internship!

## 📁 Required Action
You need to add your CG-VAK certificate PDF file to display it in the modal.

### Steps:

1. **Prepare your certificate:**
   - Make sure you have your CG-VAK internship certificate in PDF format
   - Name it: `cgvak-certificate.pdf`

2. **Add to the project:**
   ```bash
   # Navigate to the certificates folder
   cd /Users/pravin/Documents/portfolio/public/certificates/
   
   # Copy your certificate file here
   # The file should be named: cgvak-certificate.pdf
   ```

3. **Verify the file:**
   - Check that the file exists at: `/public/certificates/cgvak-certificate.pdf`
   - The file should be accessible like the existing `certificate.pdf`

4. **Deploy to Vercel:**
   ```bash
   git add public/certificates/cgvak-certificate.pdf
   git commit -m "Add CG-VAK internship certificate"
   git push
   ```

## ✨ Features Added

Both certificates (SkillUp and CG-VAK) now have:
- 📜 **Click to view** - Click on the timeline item to open the certificate
- 📥 **Download button** - Download the certificate as PDF
- 🔗 **Open in new tab** - View the certificate in a new browser tab
- 🎯 **Smart positioning** - Modal appears near where you click
- ❌ **Easy close** - Click the X button or click outside to close

## 🎨 How It Works

- The modal dynamically displays the correct certificate based on which internship you click
- Company name automatically appears in the modal title
- Download filename is auto-generated from company name
- Both certificates use the same beautiful neon-themed modal design

## 📝 File Locations

- SkillUp Certificate: `/public/certificates/certificate.pdf` ✅
- CG-VAK Certificate: `/public/certificates/cgvak-certificate.pdf` ⏳ (needs to be added)

## 🚀 Next Steps

1. Add your `cgvak-certificate.pdf` to `/public/certificates/`
2. Commit and push the changes
3. Test on your deployed site: https://pravin-peach.vercel.app

---

**Note:** Until you add the certificate file, clicking on CG-VAK will show the modal but the PDF viewer will be empty. The download and "Open in new tab" buttons will work once you add the file!
