import { initializeApp } from "firebase/app";
import { 
  getAuth,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  signOut,
  onAuthStateChanged,
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

const googleProvider = new GoogleAuthProvider();
const emailProvider = new EmailAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore(app);

export const createUserDocumentFromAuth = async (userAuth, additional) => {
  const userDocRef = doc(db, 'user', userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additional,
      });
    } catch {
      throw new Error('Some thing went wrong');
    }
  }
  console.log(userSnapShot.exists());
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password) 
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  const res = await signInWithEmailAndPassword(auth, email, password) ;
  return res;
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => 
  onAuthStateChanged(auth, callback);
