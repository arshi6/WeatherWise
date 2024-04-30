// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5pLgU_VJhARR5Z2l5YVMEopwFNO63AYE",
  authDomain: "weather-2df12.firebaseapp.com",
  projectId: "weather-2df12",
  storageBucket: "weather-2df12.appspot.com",
  messagingSenderId: "544986193444",
  appId: "1:544986193444:web:f7611fb32b483bc99dc2b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };