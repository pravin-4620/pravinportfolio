# 📁 Quick Reference: File Locations

## ✅ Folders Created

### Certificates Folder:
```
/Users/pravin/Documents/portfolio/public/certificates/
```
✅ This folder has been created and is ready for your certificate PDFs!

### Resume Location (Already exists):
```
/Users/pravin/Documents/portfolio/public/resume.pdf
```
✅ Your resume is already in the correct location!

## 📝 How to Add Certificate PDFs

### Option 1: Copy from your current location
If your certificate files are somewhere else on your computer:

```bash
# Navigate to where your certificates are
cd ~/Downloads  # or wherever your certificates are

# Copy to the certificates folder
cp your-certificate.pdf /Users/pravin/Documents/portfolio/public/certificates/

# Example:
cp aws-certificate.pdf /Users/pravin/Documents/portfolio/public/certificates/
cp react-certificate.pdf /Users/pravin/Documents/portfolio/public/certificates/
```

### Option 2: Use Finder (macOS)
1. Open Finder
2. Navigate to `/Users/pravin/Documents/portfolio/public/certificates/`
3. Drag and drop your certificate PDFs into this folder

### Option 3: If certificates are in Downloads
```bash
# Copy from Downloads
cp ~/Downloads/your-cert.pdf /Users/pravin/Documents/portfolio/public/certificates/

# Or copy all PDFs at once
cp ~/Downloads/*.pdf /Users/pravin/Documents/portfolio/public/certificates/
```

## 📂 Current File Structure

```
portfolio/
├── public/
│   ├── certificates/          ← ADD YOUR CERTIFICATES HERE
│   │   └── (empty - waiting for your PDFs)
│   ├── resume.pdf            ← YOUR RESUME (already here!)
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src/
    └── components/
        └── Certifications.js  ← UPDATE YOUR CERTIFICATE INFO HERE
```

## 🎯 Next Steps

### 1. Add Your Certificate PDFs
```bash
# Find where your certificates are stored
# Then copy them to:
/Users/pravin/Documents/portfolio/public/certificates/
```

### 2. Update Certificate Data
Edit this file: `/Users/pravin/Documents/portfolio/src/components/Certifications.js`

Replace the sample certificates with your actual certificate information:

```javascript
const certifications = [
  {
    id: 1,
    title: 'Your Actual Certificate Name',
    issuer: 'Organization Name',
    date: 'Month Year',
    credentialId: 'YOUR-CERT-ID',
    image: '/certificates/your-actual-file.pdf',  // ← Must match your PDF filename
    description: 'What you learned',
    skills: ['Skill 1', 'Skill 2'],
    verified: true
  },
  // Add more certificates...
];
```

## 🔍 Verify Files

Check if your certificates are in the right place:
```bash
ls -la /Users/pravin/Documents/portfolio/public/certificates/
```

## 💡 Important Notes

1. **Certificate PDFs** go in `/public/certificates/`
2. **Resume PDF** is already in `/public/resume.pdf` ✅
3. **File names** in code must match actual PDF filenames
4. **Use simple names**: `aws-cert.pdf` (not `My Certificate (1).pdf`)

## 🚨 Common Mistakes to Avoid

❌ Wrong: Trying to copy from current directory when file isn't there
```bash
cp resume.pdf /path/to/certificates/  # ❌ File not in current directory
```

✅ Right: Copy from actual file location
```bash
cp ~/Downloads/certificate.pdf /Users/pravin/Documents/portfolio/public/certificates/  # ✅ Full path
```

## 🧪 Test Your Setup

1. Add certificate PDFs to `/public/certificates/`
2. Update data in `Certifications.js`
3. Open browser: `http://localhost:3003`
4. Navigate to Certifications section
5. Click on a certificate card
6. Click "View Full Certificate" - PDF should open

---

**Need help? Check CERTIFICATIONS_GUIDE.md for detailed instructions!** 📖
