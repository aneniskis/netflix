// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import firestore from "firebase/firestore";
// import auth from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCV_aSIj0-eGqz6wLdPitEYusfegfLQF8",
  authDomain: "netflix-60640.firebaseapp.com",
  projectId: "netflix-60640",
  storageBucket: "netflix-60640.appspot.com",
  messagingSenderId: "457014424827",
  appId: "1:457014424827:web:f9019cf97a105fadd42c5e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
// const firebaseApp = initializeApp(firebaseConfig);
// export const db = getFirestore();
// export const { auth } = getAuth();
