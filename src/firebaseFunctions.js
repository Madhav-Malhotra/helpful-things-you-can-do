import { collection, query, getDocs, doc, updateDoc, where } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { db, auth } from "./firebaseInit.js";

// Initialise data - DO NOT LEAVE THIS IN IF PEOPLE ARE ABLE TO ADD TIPS THEMSELVES
export async function getAllData(setData, prevData, setCurrent, setLoad, category) {
  let data = [];
  if (prevData[category]) data = prevData[category];
  else {
    const c = collection(db, "tips");
    const q = query(c, where("Tags", "array-contains", category));
    setLoad(true);
    const res = await getDocs(q);

    res.forEach((doc) => {
      data.push({id: doc.id, ...doc.data()});
    });

    setData((prev) => {
      let newState = JSON.parse(JSON.stringify(prev));
      newState[`${category}`] = data;
      return newState;
    });
    setLoad(false);
  }
  setCurrent(data);
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

// Authentication
const provider = new GoogleAuthProvider();
export async function verifyUser() {
  signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result.user);
  }).catch((error) => console.error(error.code, error.message));
}