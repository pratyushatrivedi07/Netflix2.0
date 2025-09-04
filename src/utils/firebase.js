// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApDk35OwNbnimj5Hz_yzBwyDb2XyaZGFI",
  authDomain: "netflix-gpt-d480c.firebaseapp.com",
  projectId: "netflix-gpt-d480c",
  storageBucket: "netflix-gpt-d480c.firebasestorage.app",
  messagingSenderId: "785311334213",
  appId: "1:785311334213:web:5dfa406d912859af71482c",
  measurementId: "G-L8LZQ8L35Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Centralized Auth
export const auth = getAuth();
