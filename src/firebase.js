import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA24QrgnqNUkDCl0ScC4pruyLre6lgU2sM",
  authDomain: "thead-art-creations.firebaseapp.com",
  projectId: "thead-art-creations",
  storageBucket: "thead-art-creations.appspot.com",
  messagingSenderId: "803109609069",
  appId: "1:803109609069:web:9e349f377307b2725ba964"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence);