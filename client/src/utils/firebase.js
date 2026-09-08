
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "prepi-c424e.firebaseapp.com",
  projectId: "prepi-c424e",
  storageBucket: "prepi-c424e.firebasestorage.app",
  messagingSenderId: "801450098730",
  appId: "1:801450098730:web:8d4f3388d4cb39cdd8c353"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()

export {auth ,provider}