
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBaTFLrCotdwsv_SHcPjdLQbAV_y2uXbF8",
  authDomain: "vue-3-2023-943ae.firebaseapp.com",
  projectId: "vue-3-2023-943ae",
  storageBucket: "vue-3-2023-943ae.appspot.com",
  messagingSenderId: "158584932358",
  appId: "1:158584932358:web:cd8be80458643825ca1b87",
  measurementId: "G-9VEMNY4TFJ"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth();
export { auth };