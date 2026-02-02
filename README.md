# Portfolio Project

Professional portfolio website built with React (frontend) and Express/Node.js (backend).

## Features

- **Frontend**: React-based professional design with smooth animations and responsive layout.
- **Backend**: Express server for handling contact form submissions and serving static assets.
- **Dockerized**: Easy deployment using Docker.

## Project Structure

- `/src`: React frontend source code.
- `/public`: Static assets for the frontend.
- `/backend`: Express server source code.
- `Dockerfile`: Multi-stage Docker build configuration.

## Getting Started

### Prerequisites

- Node.js (v18+)
- Docker (optional, for containerized deployment)

### Local Development

1. **Install Frontend Dependencies:**
   ```bash
   npm install
   ```

2. **Install Backend Dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Run the Application:**
   - Frontend: `npm start` (runs on http://localhost:3000)
   - Backend: `npm run dev` in the `/backend` directory (runs on http://localhost:5000)

### Docker Deployment

1. **Build the Docker Image:**
   ```bash
   docker build -t portfolio-app .
   ```

2. **Run the Container:**
   ```bash
   docker run -p 5000:5000 --env-file backend/.env portfolio-app
   ```
   The app will be available at `http://localhost:5000`.

## Scripts

- `npm start`: Runs the React app in development mode.
- `npm run build`: Builds the React app for production.
- `npm test`: Runs the test suite.

## Environment Variables

The backend requires a `.env` file in the `backend/` directory with the following variables:
- `MONGODB_URI`: Your MongoDB connection string.
- `EMAIL_USER`: Gmail address for sending emails.
- `EMAIL_PASS`: Gmail App Password.
- `RECEIVER_EMAIL`: Email address to receive contact form submissions.
