// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaCcUQqf2YgB7E762hggtUYnavjyL9dnI",
  authDomain: "assignment-10-3a48e.firebaseapp.com",
  projectId: "assignment-10-3a48e",
  storageBucket: "assignment-10-3a48e.firebasestorage.app",
  messagingSenderId: "218397629717",
  appId: "1:218397629717:web:d2187574cf4d873042dd1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;