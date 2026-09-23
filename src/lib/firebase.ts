// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx19svm7ObRJ4NMWgTceKq8gYOlffjNFA",
  authDomain: "shine-bros-db.firebaseapp.com",
  projectId: "shine-bros-db",
  storageBucket: "shine-bros-db.firebasestorage.app",
  messagingSenderId: "968208033898",
  appId: "1:968208033898:web:abb824b9e0f86d1e62c213",
  measurementId: "G-VJFPXMY98N"
};

// Initialize Firebase (Singleton pattern to prevent re-initialization in dev)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db, app };
