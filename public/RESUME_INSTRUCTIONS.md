# 📄 How to Add Your Resume

## Step 1: Prepare Your Resume

Make sure your resume is in **PDF format** for best compatibility across all devices and browsers.

## Step 2: Add Your Resume File

1. **Save your resume as `resume.pdf`**
2. **Place it in the `/public` folder** of your portfolio project:
   ```
   /Users/pravin/Documents/portfolio/public/resume.pdf
   ```

## Step 3: File Location

Your resume should be placed here:
```
portfolio/
  ├── public/
  │   ├── favicon.ico
  │   ├── index.html
  │   ├── logo192.png
  │   ├── logo512.png
  │   ├── manifest.json
  │   ├── robots.txt
  │   └── resume.pdf  ← ADD YOUR RESUME HERE
  ├── src/
  └── ...
```

## Step 4: Verify It Works

1. **Save your `resume.pdf` file** in the `/public` folder
2. **Restart your React development server** (if needed):
   ```bash
   cd /Users/pravin/Documents/portfolio
   npm start
   ```
3. **Test the buttons** on your portfolio:
   - Click "Download Resume" - should download the PDF
   - Click "View Resume" - should open the PDF in a new tab

## Alternative: Use a Different Filename

If you want to use a different filename (e.g., `Pravin_Resume.pdf`):

1. **Save your resume** as your desired filename in `/public`
2. **Update the paths** in `/src/components/Hero.js`:

```javascript
// Find these lines and update the filename:
<a href="/resume.pdf" download="Pravin_PT_Resume.pdf" className="btn btn-resume">
<a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-resume-outline">

// Change to:
<a href="/your-filename.pdf" download="Pravin_PT_Resume.pdf" className="btn btn-resume">
<a href="/your-filename.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-resume-outline">
```

## Resume Button Features

### Download Button (Cyan/Blue)
- Downloads the resume with the filename: `Pravin_PT_Resume.pdf`
- Users can save it directly to their device

### View Button (Pink/Magenta)
- Opens the resume in a new browser tab
- Allows users to preview before downloading
- Good for quick viewing on mobile devices

## Tips for Your Resume PDF

✅ **DO:**
- Keep file size under 2MB for fast loading
- Use a professional, clean design
- Ensure text is selectable (not just an image)
- Test on multiple devices and browsers
- Include your contact information

❌ **DON'T:**
- Use overly large file sizes (slows down site)
- Password-protect the PDF (users won't be able to view it)
- Use special characters in the filename
- Forget to update the resume regularly

## Testing Checklist

- [ ] Resume PDF placed in `/public` folder
- [ ] Filename is `resume.pdf` (or updated in code)
- [ ] File size is reasonable (< 2MB)
- [ ] Download button works
- [ ] View button opens in new tab
- [ ] Resume displays correctly in browser
- [ ] Mobile view works properly

## Troubleshooting

### Resume doesn't download
- Check that the file is named exactly `resume.pdf`
- Ensure it's in the `/public` folder, not `/src`
- Clear browser cache and try again

### Resume doesn't open
- Verify the PDF is not corrupted
- Test opening the PDF locally first
- Check browser console for errors

### 404 Error
- Confirm file location: `/public/resume.pdf`
- Restart development server
- Check for typos in filename

## 🎉 You're Done!

Once your resume is in place, visitors can:
- **Download** your resume with one click
- **View** your resume in their browser
- Get your resume with the professional filename: `Pravin_PT_Resume.pdf`

Your resume buttons are styled with:
- ✨ Neon cyan download button with hover effects
- ✨ Neon pink outline view button with animations
- ✨ Responsive design for all screen sizes
