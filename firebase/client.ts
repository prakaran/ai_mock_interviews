// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeR2QPKabQYDU0jnHE4jRTCq2ywq1xV0A",
  authDomain: "prepwise-c7093.firebaseapp.com",
  projectId: "prepwise-c7093",
  storageBucket: "prepwise-c7093.firebasestorage.app",
  messagingSenderId: "95284695420",
  appId: "1:95284695420:web:f0e5b5478d5e101bb014f9",
  measurementId: "G-63W54DJD6X",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
