import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyC4vDSU1Tt-TJXvh31KPaQSB7v39GiiSCA",
  authDomain: "vision-chat-bf5a7.firebaseapp.com",
  projectId: "vision-chat-bf5a7",
  storageBucket: "vision-chat-bf5a7.appspot.com",
  messagingSenderId: "669907452848",
  appId: "1:669907452848:web:3fcf2f25dc05815b610c75"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db=getFirestore();