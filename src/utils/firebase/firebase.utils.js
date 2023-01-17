import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0Iw15wLziTyvxEvDfW4QjdFmTVGxjLvA",
  authDomain: "crwn-clothing-db-439d8.firebaseapp.com",
  projectId: "crwn-clothing-db-439d8",
  storageBucket: "crwn-clothing-db-439d8.appspot.com",
  messagingSenderId: "811495757342",
  appId: "1:811495757342:web:748a53cf0f008f6d96c00f",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
