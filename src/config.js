import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDYMKnhAH445WAGIp4SpKcRLQ7ZxvKCgdM",
  authDomain: "leaf-assessment.firebaseapp.com",
  projectId: "leaf-assessment",
  storageBucket: "leaf-assessment.appspot.com",
  messagingSenderId: "10850667950",
  appId: "1:10850667950:web:cb13fb6fe427079bd94c3f",
  measurementId: "G-NJFVVQTXSN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };