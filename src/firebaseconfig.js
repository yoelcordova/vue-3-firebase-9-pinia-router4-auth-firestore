
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBaTFLrCotdwsv_SHcPjdLQbAV_y2uXbF8",
  authDomain: "vue-3-2023-943ae.firebaseapp.com",
  projectId: "vue-3-2023-943ae",
  storageBucket: "vue-3-2023-943ae.appspot.com",
  messagingSenderId: "158584932358",
  appId: "1:158584932358:web:cd8be80458643825ca1b87",
 
};


initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };