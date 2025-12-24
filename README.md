<<<<<<< HEAD
# Authentication System Setup Guide

## 📋 Project Overview

This is a complete authentication system with:
- ✅ Email/Password Login & Registration
- ✅ Google OAuth Integration
- ✅ MongoDB with Mongoose
- ✅ JWT Token-based Authentication
- ✅ Password Hashing with bcrypt

---

## 🚀 Backend Setup

### Prerequisites
- Node.js (v14+)
- MongoDB (Local or Cloud - MongoDB Atlas)
- npm/yarn

### Step 1: Install Dependencies
```bash
cd Backend
npm install
```

### Step 2: Configure Environment Variables

Create/Update `.env` file in the Backend folder:
```env
# Google OAuth
GOOGLE_CLIENT_ID=940666524566-7b9bv68tof9bl7hjib2hclao3837k45e.apps.googleusercontent.com

# JWT Secret
JWT_SECRET=bad569eafe718c748f4e6d0572fcb3ef

# MongoDB Connection String (Add your MongoDB URL here)
MONGOOSE_URL=mongodb://localhost:27017/sheriyans
```

#### Option 1: Local MongoDB
If you have MongoDB running locally:
```
MONGOOSE_URL=mongodb://localhost:27017/sheriyans
```

#### Option 2: MongoDB Atlas (Cloud)
If using MongoDB Atlas:
1. Create a free account at https://www.mongodb.com/cloud/atlas
2. Create a cluster and get your connection string
3. Update `.env`:
```
MONGOOSE_URL=mongodb+srv://username:password@cluster.mongodb.net/sheriyans?retryWrites=true&w=majority
```

### Step 3: Start Backend Server
```bash
npm run dev
```

Expected output:
```
✅ MongoDB Connected Successfully
✅ Server is running on port 3000
```

---

## 🎨 Frontend Setup

### Step 1: Install Dependencies
```bash
cd Frontend
npm install
```

### Step 2: Start Frontend Server
```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

---

## 📝 API Endpoints

### 1. Register User
```
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123",
  "fullname": "John Doe"
}

Response:
{
  "message": "Registration successful",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "fullname": "John Doe"
  }
}
```

### 2. Login User
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}

Response:
{
  "message": "Login successful",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "fullname": "John Doe"
  }
}
```

### 3. Google Sign-In
```
POST /api/auth/google
Content-Type: application/json

{
  "token": "google_id_token_from_frontend"
}

Response:
{
  "message": "Google login successful",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "fullname": "John Doe",
    "picture": "profile_picture_url"
  }
}
```

---

## 🔑 Key Features

### User Model
```javascript
{
  fullname: String (required),
  email: String (unique, required),
  password: String (hashed, min 6 chars),
  googleId: String (from Google),
  picture: String (profile picture URL),
  authProvider: String (email/google),
  isVerified: Boolean,
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

### Security Features
- ✅ Passwords hashed with bcryptjs (salt rounds: 10)
- ✅ JWT tokens expire in 7 days
- ✅ Google token verification
- ✅ CORS enabled for frontend
- ✅ Input validation on all endpoints

---

## 🐛 Troubleshooting

### "MongoDB Connected" error
- Check if MongoDB is running
- Verify MONGOOSE_URL in .env
- For MongoDB Atlas, ensure IP is whitelisted

### "Google authentication failed"
- Verify GOOGLE_CLIENT_ID is correct
- Check if Google OAuth is enabled in Google Cloud Console
- Ensure frontend is sending valid credential token

### CORS errors
- Check that Frontend URL is in CORS whitelist
- Default: `http://localhost:5173`

---

## 📂 Project Structure

```
Backend/
├── server.js              # Entry point
├── .env                   # Environment variables
├── package.json          # Dependencies
└── src/
    ├── app.js            # Express app & middleware
    ├── config/
    │   └── database.js   # MongoDB connection
    ├── models/
    │   └── user.model.js # User schema
    ├── controller/
    │   └── auth.controller.js # Auth logic
    ├── routes/
    │   └── auth.route.js # Auth endpoints
    └── services/
        └── googleauth.service.js # Google verification
```

---

## ✅ Ready to Use

Your authentication system is now fully functional! Test it with:

1. **Register**: Create a new account
2. **Login**: Sign in with email/password
3. **Google Sign-In**: Use your Google account
4. **JWT Token**: Token is returned on successful auth

Enjoy! 🎉
=======

>>>>>>> f1662a45b835c57092c64e4d790885fc1c3dd202
