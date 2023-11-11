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
  apiKey: "AIzaSyA0X5-77ZIzJW3UICz9P51IIMVBD6WsGOA",
  authDomain: "super-hero-4f3c5.firebaseapp.com",
  projectId: "super-hero-4f3c5",
  storageBucket: "super-hero-4f3c5.appspot.com",
  messagingSenderId: "915189083120",
  appId: "1:915189083120:web:c30e58b2954b441c188b35",
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
  const response = await signInWithPopup(auth, provider);
  return response.user;
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedUser = (callback) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (userAuth) => resolve(userAuth), reject);
  });
};
