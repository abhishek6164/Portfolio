// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUMVwyiqIF2oqAs2P1Q9ARFg_rW6KLa90",
  authDomain: "portfolio-c2eb5.firebaseapp.com",
  projectId: "portfolio-c2eb5",
  storageBucket: "portfolio-c2eb5.appspot.com",
  messagingSenderId: "1075855895894",
  appId: "1:1075855895894:web:84bce0fcb102da45593af7",
  measurementId: "G-7M6ZQX0WSC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
