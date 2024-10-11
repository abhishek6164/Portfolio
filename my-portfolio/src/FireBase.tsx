import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import getFirestore

const firebaseConfig = {
  apiKey: "AIzaSyCs2ercMymbN31UFyH0mU26fsTyP0TOvKE",
  authDomain: "portfolio-18d24.firebaseapp.com",
  projectId: "portfolio-18d24",
  storageBucket: "portfolio-18d24.appspot.com",
  messagingSenderId: "1000776467099",
  appId: "1:1000776467099:web:80c15c0ef7470f0c89bc3e",
  measurementId: "G-E6M9P7NT3S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
