import firebase from "firebase/app";
import "firebase/auth";

const config = firebase.initializeApp({
  apiKey: "AIzaSyArWDXqc120hMCN_tep7dsE34aHg-uw-XE",
  authDomain: "movies-bf6aa.firebaseapp.com",
  projectId: "movies-bf6aa",
  storageBucket: "movies-bf6aa.appspot.com",
  messagingSenderId: "917283276991",
  appId: "1:917283276991:web:b10ce046a146003444de0a",
  measurementId: "G-9TJR1TQQKZ",
});

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default config;

