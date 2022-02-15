// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9VkUMC0Zzfb3-M8lxq9HDbIAiKu5QL_s",
  authDomain: "instagram2-105da.firebaseapp.com",
  projectId: "instagram2-105da",
  storageBucket: "instagram2-105da.appspot.com",
  messagingSenderId: "1038931008490",
  appId: "1:1038931008490:web:a8971dceb82bef4502f093"
};

// Initialize Firebase
const app = ( !getApps().length ) ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {
  app,
  db,
  storage
};