import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbja4x2kpieI7Xoprgkyyd0JIxoeqko50",
  authDomain: "e-ride-a72e6.firebaseapp.com",
  projectId: "e-ride-a72e6",
  storageBucket: "e-ride-a72e6.appspot.com",
  messagingSenderId: "68662239185",
  appId: "1:68662239185:web:97e043a06cb114f4638af0"
};

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
