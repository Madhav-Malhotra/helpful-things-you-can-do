import { collection, query, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "./firebaseInit.js";

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