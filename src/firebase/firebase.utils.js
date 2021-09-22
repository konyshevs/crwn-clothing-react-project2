import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA12OWNancRlz4o-hmdog_x9yQLxxQ7OFM",
  authDomain: "crwn-db-254d9.firebaseapp.com",
  projectId: "crwn-db-254d9",
  storageBucket: "crwn-db-254d9.appspot.com",
  messagingSenderId: "595141543354",
  appId: "1:595141543354:web:cd66d2ad30b3d078600983",
};

initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = doc(db, "users", `${userAuth.uid}`);
  const snapShot = await getDoc(userRef);
  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdDate,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};
// Initialize Firebase

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ params: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
