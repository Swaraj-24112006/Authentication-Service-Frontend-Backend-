# 🔐 Google OAuth Setup Guide

## ⚠️ Why You're Getting "Error 401: invalid_client"

The error "The OAuth client was not found" means your Google OAuth app is not properly configured. Follow these steps to fix it:

---

## 📋 Step 1: Create/Update Google Cloud Project

### Option A: If You Already Have a Google OAuth App

Go to: https://console.cloud.google.com/

1. **Select or Create a Project**
   - Top-left corner → Click project dropdown
   - Click "NEW PROJECT"
   - Name it: `Sheriyans Auth`
   - Click "Create"

2. **Enable Google+ API**
   - Search for "Google+ API" in the search bar
   - Click on it and press "ENABLE"

3. **Create OAuth 2.0 Credentials**
   - Go to "Credentials" in left sidebar
   - Click "Create Credentials" → "OAuth client ID"
   - If prompted: Configure OAuth consent screen first (see Step 2)

---

## 📝 Step 2: Configure OAuth Consent Screen

1. Go to **Credentials** → **OAuth consent screen**
2. Choose **External** user type → Click **Create**

3. **OAuth Consent Screen Details:**
   - **App name:** Sheriyans Auth
   - **User support email:** Your email
   - **Developer contact info:** Your email
   - Click **Save and Continue**

4. **Scopes:**
   - Click **Add or Remove Scopes**
   - Add these scopes:
     - `openid`
     - `email`
     - `profile`
   - Click **Update** → **Save and Continue**

5. **Test Users:**
   - Click **Add Users** (optional)
   - Add: `swarajvmatre@gmail.com`
   - Click **Save and Continue** → **Back to Dashboard**

---

## 🔑 Step 3: Create OAuth 2.0 Credentials

1. Go to **Credentials** in left sidebar
2. Click **Create Credentials** → **OAuth client ID**

3. **Select Application Type:**
   - Choose: **Web application**
   - Name: `Sheriyans Frontend`

4. **Authorized JavaScript Origins** (Add these):
   - `http://localhost:5173`
   - `http://localhost:3000`
   - `http://127.0.0.1:5173`
   - `http://127.0.0.1:3000`

5. **Authorized Redirect URIs** (Add these):
   - `http://localhost:5173`
   - `http://localhost:3000`
   - `http://127.0.0.1:5173`
   - `http://127.0.0.1:3000`

6. Click **Create**

---

## 📌 Step 4: Copy Your Client ID

After creating credentials, you'll see a popup with:
- **Client ID** (this is what you need)
- Client Secret (not needed for frontend)

---

## ✅ Step 5: Update Your Project

### 1. Update Backend `.env`:
```env
GOOGLE_CLIENT_ID=YOUR_NEW_CLIENT_ID_HERE
JWT_SECRET=bad569eafe718c748f4e6d0572fcb3ef
MONGOOSE_URL=mongodb+srv://swarajmatre24_db_user:cun130DeUAdu3xJm@cluster0.pjmdond.mongodb.net/
```

### 2. Update Frontend `src/main.jsx`:
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

const GOOGLE_CLIENT_ID = "YOUR_NEW_CLIENT_ID_HERE";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
```

Replace `YOUR_NEW_CLIENT_ID_HERE` with your actual Client ID from Step 4.

---

## 🚀 Step 6: Test

1. **Stop and restart backend:**
   ```bash
   cd Backend
   npm run dev
   ```

2. **Stop and restart frontend:**
   ```bash
   cd Frontend
   npm run dev
   ```

3. **Test Google Sign-In:**
   - Open `http://localhost:5173`
   - Click "Sign in with Google"
   - It should now work without "invalid_client" error!

---

## 🐛 Still Getting Errors?

### Error: "The OAuth client was not found"
- ✅ Verify Client ID is correct (copy-paste carefully)
- ✅ Check that OAuth app is in the same Google Cloud project
- ✅ Ensure "Google+ API" is enabled

### Error: "redirect_uri_mismatch"
- ✅ Add `http://localhost:5173` to "Authorized JavaScript Origins"
- ✅ Add `http://localhost:5173` to "Authorized Redirect URIs"

### Error: "invalid_client_id"
- ✅ Your Client ID format should be: `NUMBERS-HASH.apps.googleusercontent.com`
- ✅ Make sure there are no extra spaces

### Still Not Working?
- Clear browser cache (Ctrl+Shift+Delete)
- Restart both frontend and backend servers
- Wait 2-3 minutes for Google Cloud changes to propagate

---

## 📚 Quick Reference

| Item | Example |
|------|---------|
| Frontend Port | http://localhost:5173 |
| Backend Port | http://localhost:3000 |
| Client ID Format | `NUMBERS-HASH.apps.googleusercontent.com` |
| OAuth Scopes | openid, email, profile |

---

## ✨ All Set!

Once configured, your Google OAuth should work perfectly with your authentication system! 🎉
