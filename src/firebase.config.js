import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBJAIsmFFeJvIfcUJYK0oHCvRJzos1MR40",
  authDomain: "house-market-place-app-95e36.firebaseapp.com",
  projectId: "house-market-place-app-95e36",
  storageBucket: "house-market-place-app-95e36.appspot.com",
  messagingSenderId: "928692675531",
  appId: "1:928692675531:web:8a498ca7f7b0eb85290c4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore