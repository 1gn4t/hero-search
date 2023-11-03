import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  storageBucket: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const createUser = async (email, password) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);
  return response.user;
};

export const singInUser = async (email, password) => {
  const response = await signInWithEmailAndPassword(auth, email, password);
  return response.user;
};

export const singInGoogle = async () => {
  signInWithPopup(auth, provider).then(console.log);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedUser = (callback) =>
  onAuthStateChanged(auth, callback);
