import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as Auth from "firebase/auth";
import * as database from "firebase/database";

// Config
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Analytics
// getAnalytics(app);

// Get Auth
const auth = Auth.getAuth();

// Auth Provider
const googleAuthProvider = new Auth.GoogleAuthProvider();

export { auth, Auth, googleAuthProvider, database as default };
