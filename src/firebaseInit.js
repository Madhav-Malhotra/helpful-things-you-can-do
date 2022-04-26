// ================ INIT ================= //
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

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
const analytics = getAnalytics(app);
export const db = getFirestore();