// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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