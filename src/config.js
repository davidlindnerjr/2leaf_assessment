import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
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
const storage = getStorage(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { storage, app, db, auth };