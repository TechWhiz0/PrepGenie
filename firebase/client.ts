// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyBTOzgpXmhq_cImH559s4wSJDjL9KSOkHc",
  authDomain: "prepgenie-72fe8.firebaseapp.com",
  projectId: "prepgenie-72fe8",
  storageBucket: "prepgenie-72fe8.firebasestorage.app",
  messagingSenderId: "999282706626",
  appId: "1:999282706626:web:0abeda6a7e52487f9ed35b",
  measurementId: "G-MST0CFCGLL"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export  const auth = getAuth(app);
export const db = getFirestore(app);