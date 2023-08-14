


import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeSOg4pSkxoHFbzv2Jb2u7M6lisuyiYEg",
  authDomain: "algotech-db.firebaseapp.com",
  projectId: "algotech-db",
  storageBucket: "algotech-db.appspot.com",
  messagingSenderId: "292398028980",
  appId: "1:292398028980:web:fd027c9b5c689643449fe1",
  measurementId: "G-E800NMV13Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)



