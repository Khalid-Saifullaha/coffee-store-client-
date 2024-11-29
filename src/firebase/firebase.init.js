// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwxSGio9MPDqJBf73MznJ3wEx0FEWDLY4",
  authDomain: "coffee-store-7d014.firebaseapp.com",
  projectId: "coffee-store-7d014",
  storageBucket: "coffee-store-7d014.firebasestorage.app",
  messagingSenderId: "440169872157",
  appId: "1:440169872157:web:0095c89ca2621ed92e7ff4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
