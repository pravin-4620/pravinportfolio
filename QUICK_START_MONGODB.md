# Quick Start - MongoDB Integration

## What You Need to Do:

### 1. Get Your MongoDB Connection String
- Go to https://cloud.mongodb.com
- Click "Connect" on your cluster
- Choose "Drivers" → "Node.js"
- Copy the connection string (looks like: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/`)

### 2. Add to .env File
Open `/backend/.env` and add this line:
```
MONGODB_URI=your-connection-string-here
```

**Example:**
```
MONGODB_URI=mongodb+srv://pravin:MyPassword123@cluster0.abc123.mongodb.net/portfolio?retryWrites=true&w=majority
```

### 3. Install MongoDB Package
```bash
cd backend
npm install
```

### 4. Start Backend
```bash
npm run dev
```

You should see: ✅ MongoDB Connected

### 5. Test It
Open http://localhost:5000 in your browser
You should see:
```json
{
  "message": "Portfolio API is running!",
  "mongodb": "Connected"
}
```

## That's It! 🎉

Your portfolio admin panel will now save everything to MongoDB instead of browser localStorage. All your changes will be persistent and accessible from any device!

## What Changed:
✅ Data now saved to MongoDB Atlas (cloud database)
✅ Admin panel automatically uses MongoDB
✅ No more localStorage - data is permanent
✅ Can access from any device
✅ Ready for production deployment
