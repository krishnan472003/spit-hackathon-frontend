// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAIMa6c86aJSaAyW3pICFERG9GgxGEdwys",
    authDomain: "spit-hackathon-4f40b.firebaseapp.com",
    projectId: "spit-hackathon-4f40b",
    storageBucket: "spit-hackathon-4f40b.appspot.com",
    messagingSenderId: "269630844278",
    appId: "1:269630844278:web:6289aef74977be27781e57",
    measurementId: "G-2P14VS3119"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export {auth}