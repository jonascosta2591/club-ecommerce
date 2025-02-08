import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCMyzfJg3NhJ7BWkn2xSqlCTOH3-8OntXc",
  authDomain: "club-ecommerce-fca69.firebaseapp.com",
  projectId: "club-ecommerce-fca69",
  storageBucket: "club-ecommerce-fca69.firebasestorage.app",
  messagingSenderId: "1003538205092",
  appId: "1:1003538205092:web:bdab84db33f1de8a259931"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)