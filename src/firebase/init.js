// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_0GGV_amfPd3ShWwcUrWDXgOct8AUsTg",
  authDomain: "fir-practice-27a91.firebaseapp.com",
  projectId: "fir-practice-27a91",
  storageBucket: "fir-practice-27a91.firebasestorage.app",
  messagingSenderId: "337350654216",
  appId: "1:337350654216:web:c002c9c62262d98ff254bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();