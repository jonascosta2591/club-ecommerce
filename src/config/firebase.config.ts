import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD2UJiEXQu_HmvVcWDK8U8Y5BsWzPEtOKg",
  authDomain: "e-commercefsc.firebaseapp.com",
  projectId: "e-commercefsc",
  storageBucket: "e-commercefsc.firebasestorage.app",
  messagingSenderId: "465044265014",
  appId: "1:465044265014:web:2102ff305c67a287a3e097"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const auth = getAuth()

export const provider = new GoogleAuthProvider()