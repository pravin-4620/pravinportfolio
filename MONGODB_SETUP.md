# MongoDB Setup Instructions

## Step 1: Add MongoDB Connection String

1. Go to your MongoDB Atlas dashboard
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Copy the connection string
5. Add it to your `.env` file in the backend folder:

```env
MONGODB_URI=mongodb+srv://your-username:your-password@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
```

Replace:
- `your-username` with your MongoDB username
- `your-password` with your MongoDB password
- `cluster0.xxxxx` with your actual cluster address

## Step 2: Install Dependencies

```bash
cd backend
npm install
```

This will install mongoose (MongoDB driver) along with other dependencies.

## Step 3: Start Backend Server

```bash
npm run dev
```

The server will start on http://localhost:5000

## Step 4: Test API

Visit http://localhost:5000 - you should see:
```json
{
  "message": "Portfolio API is running!",
  "mongodb": "Connected"
}
```

## Step 5: Update Frontend (Already Done)

The AdminPanel component will now save data to MongoDB instead of localStorage.

## API Endpoints

- `GET /api/portfolio/about` - Get about section
- `PUT /api/portfolio/about` - Update about section
- `GET /api/portfolio/projects` - Get all projects
- `POST /api/portfolio/projects` - Add new project
- `DELETE /api/portfolio/projects/:id` - Delete project
- `GET /api/portfolio/certifications` - Get all certifications
- `POST /api/portfolio/certifications` - Add certification
- `DELETE /api/portfolio/certifications/:id` - Delete certification
- `GET /api/portfolio/skills` - Get all skills
- `POST /api/portfolio/skills` - Add skill
- `DELETE /api/portfolio/skills/:id` - Delete skill
- `GET /api/portfolio/timeline` - Get timeline
- `POST /api/portfolio/timeline` - Add timeline item
- `DELETE /api/portfolio/timeline/:id` - Delete timeline item

## Deployment

When deploying to Vercel:
1. Add `MONGODB_URI` to your Vercel environment variables
2. The backend will automatically connect to MongoDB
