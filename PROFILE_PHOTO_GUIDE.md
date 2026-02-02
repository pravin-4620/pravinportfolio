# 📸 How to Add Your Profile Photo

## 📍 Where to Add Your Photo

Place your photo in the `/public` folder:

```
/Users/pravin/Documents/portfolio/public/profile-photo.jpg
```

## 🚀 Quick Setup

### Step 1: Prepare Your Photo

1. **Find a good photo** - Professional headshot or casual photo
2. **Recommended size**: 400x400 pixels or larger (square format works best)
3. **Supported formats**: JPG, PNG, WEBP
4. **File size**: Keep under 500KB for fast loading

### Step 2: Copy Photo to Public Folder

```bash
# Option 1: Copy from Downloads
cp ~/Downloads/your-photo.jpg /Users/pravin/Documents/portfolio/public/profile-photo.jpg

# Option 2: Copy from Desktop
cp ~/Desktop/your-photo.jpg /Users/pravin/Documents/portfolio/public/profile-photo.jpg

# Option 3: Copy from anywhere
cp /path/to/your-photo.jpg /Users/pravin/Documents/portfolio/public/profile-photo.jpg
```

### Step 3: Rename Your File

The code looks for `profile-photo.jpg`. Either:

**Option A: Rename your file to match:**
```bash
mv /Users/pravin/Documents/portfolio/public/your-photo.jpg /Users/pravin/Documents/portfolio/public/profile-photo.jpg
```

**Option B: Update the code to match your filename:**

Edit `/src/components/About.js` and change:
```javascript
src="/profile-photo.jpg"
```
to:
```javascript
src="/your-filename.jpg"
```

## 🎨 Photo Features Added

### Round Profile Photo with Neon Effects:
- ✅ **200px circular photo** at the top of About section
- ✅ **Neon cyan border** matching portfolio theme
- ✅ **Glowing effect** around the photo
- ✅ **Rotating gradient border** animation
- ✅ **Hover effect** - slight zoom on hover
- ✅ **Responsive design** - adjusts for mobile (180px)

### Visual Design:
- 🎨 Neon cyan blue border
- ✨ Box shadow glow effect
- 🌈 Rotating gradient border (cyan → pink → purple)
- 🔄 Smooth hover animations
- 📱 Mobile-responsive layout

## 📂 File Structure

```
portfolio/
├── public/
│   ├── profile-photo.jpg     ← ADD YOUR PHOTO HERE
│   ├── resume.pdf
│   ├── certificates/
│   │   └── certificate.pdf
│   └── ...
└── src/
    └── components/
        └── About.js           ← Photo is used here
```

## 🧪 Testing Your Photo

1. **Add your photo** to `/public/profile-photo.jpg`
2. **Open portfolio**: `http://localhost:3003`
3. **Scroll to About section**
4. **You should see**:
   - Your round photo on the left
   - About text on the right
   - Neon glow effect around photo
   - Rotating gradient border

## 🖼️ Photo Optimization Tips

### Best Practices:
✅ **Square aspect ratio** (1:1) - e.g., 400x400px, 500x500px
✅ **Clear, well-lit photo**
✅ **Simple background** or blurred background
✅ **Centered face** in the frame
✅ **Professional appearance**
✅ **File size < 500KB**

### Tools to Resize/Optimize:
- **Mac Preview**: Open image → Tools → Adjust Size
- **Online**: tinypng.com (compress images)
- **Remove background**: remove.bg

## 🎯 Different Photo Formats

### Using PNG (with transparency):
```bash
cp your-photo.png /Users/pravin/Documents/portfolio/public/profile-photo.png
```

Update `About.js`:
```javascript
src="/profile-photo.png"
```

### Using WEBP (smaller file size):
```bash
cp your-photo.webp /Users/pravin/Documents/portfolio/public/profile-photo.webp
```

Update `About.js`:
```javascript
src="/profile-photo.webp"
```

## 🎨 Customization Options

### Change Photo Size

Edit `/src/App.css` and find:
```css
.about-photo {
  width: 200px;
  height: 200px;
}
```

Change to your preferred size:
```css
.about-photo {
  width: 250px;    /* Make it bigger */
  height: 250px;
}
```

### Change Border Color

Find in CSS:
```css
border: 4px solid var(--neon-blue);
```

Change to:
```css
border: 4px solid var(--neon-pink);    /* Pink border */
border: 4px solid var(--neon-purple);  /* Purple border */
border: 4px solid #00ff00;             /* Custom color */
```

### Remove Rotating Border

Find in CSS:
```css
.photo-border {
  /* ... */
  opacity: 0.5;
}
```

Change to:
```css
.photo-border {
  /* ... */
  opacity: 0;  /* Hides the rotating border */
}
```

## 🐛 Troubleshooting

### Photo doesn't show up:
```bash
# 1. Check file exists
ls -la /Users/pravin/Documents/portfolio/public/profile-photo.jpg

# 2. Check file name matches
# In About.js: src="/profile-photo.jpg"
# File must be: profile-photo.jpg (exactly)

# 3. Clear browser cache
# Press: Cmd + Shift + R (hard refresh)
```

### Photo looks stretched:
- Use a **square photo** (same width and height)
- Or adjust `object-fit` in CSS from `cover` to `contain`

### Photo is too large (slow loading):
```bash
# Compress using Mac Preview
# 1. Open image in Preview
# 2. File → Export
# 3. Reduce Quality to 70-80%
# 4. Save as profile-photo.jpg
```

### Wrong orientation:
- Rotate the image before uploading
- Use Mac Preview: Tools → Rotate Left/Right

## 📱 Mobile Layout

On mobile devices (< 768px):
- Photo appears **centered above** the text
- Size reduces to **180px**
- Text becomes **center-aligned**
- Layout stacks **vertically**

## ✅ Checklist

- [ ] Photo prepared (square, professional, clear)
- [ ] Photo added to `/public/profile-photo.jpg`
- [ ] File name matches code (`profile-photo.jpg`)
- [ ] Photo appears in About section
- [ ] Neon border and glow visible
- [ ] Hover effect works (photo zooms slightly)
- [ ] Mobile view looks good
- [ ] File size is reasonable (< 500KB)

## 🎉 You're Done!

Your About section now features:
- ✨ Round profile photo with neon glow
- 🌈 Rotating gradient border animation
- 💫 Smooth hover effects
- 📱 Mobile-responsive layout
- 🎨 Perfect match with your portfolio theme

Just add your photo and you're all set! 🚀

---
**File Location**: `/Users/pravin/Documents/portfolio/public/profile-photo.jpg`
**Referenced in**: `/src/components/About.js`
