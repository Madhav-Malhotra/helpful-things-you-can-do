// ================ INIT ================= //
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, getDocs, doc, updateDoc } from "firebase/firestore";

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

// Initialise data - DO NOT LEAVE THIS IN IF PEOPLE ARE ABLE TO ADD TIPS THEMSELVES
export async function getAllData(setState) {
  let data = [];
  const q = query(collection(db, "tips"));
  const res = await getDocs(q);

  res.forEach((doc) => {
    data.push({id: doc.id, ...doc.data()});
  });
  setState(data);
}

// Submit review 
export async function submitReview(rating, id, prevRating, reviewNumber) {
  const docRef = doc(db, "tips", id);
  const newReviewNumber = reviewNumber + 1;
  const newRating = (parseInt(rating) + parseInt(prevRating)) / newReviewNumber;
  
  await updateDoc(docRef, {
    Rating: newRating,
    ReviewNumber: newReviewNumber
  });
}