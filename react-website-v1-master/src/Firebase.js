// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAI44q9R12Gk-MxX4S0xyN-hVCtttAeQWQ",
  authDomain: "fir-62679.firebaseapp.com",
  projectId: "fir-62679",
  storageBucket: "fir-62679.appspot.com",
  messagingSenderId: "808828110298",
  appId: "1:808828110298:web:3f946e0f0a029f3a6dace3",
  measurementId: "G-HY390963N8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);