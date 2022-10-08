// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  ProviderId,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO66TMvkwEHi2sGLk-ucYDCRmtqBYIdrw",
  authDomain: "crown-clothing-1a3c3.firebaseapp.com",
  projectId: "crown-clothing-1a3c3",
  storageBucket: "crown-clothing-1a3c3.appspot.com",
  messagingSenderId: "671935488265",
  appId: "1:671935488265:web:143dea70bf8b8e4586f3d8",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize provider - for google auth
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// storing and modifying database
export const db = getFirestore();

export const createUserDocumentFromAuth = async function (userAuth) {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshop = await getDoc(userDocRef);

  // if user data does not exits,
  //  / set the doc with the data from userAuth in my collection
  if (!userSnapshop.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log("error occured,", error);
    }
  }

  // if user data exits
  return userDocRef;

  // return userDocRef
};
