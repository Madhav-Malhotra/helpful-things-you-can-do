// ================ INIT ================= //
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCwlY9XjIsCs8gsRc77ihPPFAiEZxBWj9A",
  authDomain: "helpful-things-you-can-do.firebaseapp.com",
  projectId: "helpful-things-you-can-do",
  storageBucket: "helpful-things-you-can-do.appspot.com",
  messagingSenderId: "308620439267",
  appId: "1:308620439267:web:fd1c783af39504ea845fd6",
  measurementId: "G-QFJWVVMENW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
auth.useDeviceLanguage();