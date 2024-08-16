// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  User,
} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiZ7QmSMJ62upSeNjDOWXL2KzKWEjqNBA",
  authDomain: "yt-clone-ee9ae.firebaseapp.com",
  projectId: "yt-clone-ee9ae",
  storageBucket: "yt-clone-ee9ae.appspot.com",
  messagingSenderId: "683112945532",
  appId: "1:683112945532:web:89c27604783fdd0eca76f9",
  measurementId: "G-1X118WYV0N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export function signInWithGoogle() {
  return signInWithPopup(auth, new GoogleAuthProvider());
}

export function signOut() {
  return auth.signOut();
}

export function onAuthStateChangedHelper(
  callback: (user: User | null) => void
) {
  return onAuthStateChanged(auth, callback);
}


