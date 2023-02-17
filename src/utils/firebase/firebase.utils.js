import { initializeApp } from "firebase/app";
import { 
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

import {
  doc,
  getFirestore,
  getDoc,
  setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCaya8-3snVsbdYQ6O1xff7Gd36yXmjgKY",
  authDomain: "crwn-clothing-db-4c479.firebaseapp.com",
  projectId: "crwn-clothing-db-4c479",
  storageBucket: "crwn-clothing-db-4c479.appspot.com",
  messagingSenderId: "448456973955",
  appId: "1:448456973955:web:f62fb9519db9076a92c5b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore(app);

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'user', userAuth.uid);
  console.log(userDocRef);
  const userSnapShot = await getDoc(userDocRef);
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    console.log(displayName, email);
    try {
      setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch {
      throw new Error('Some thing went wrong');
    }
  }
  console.log(userSnapShot.exists());
}
