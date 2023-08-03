import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDec9S5lcK-HNxdMz1Nz95iv-J77A9FuDI",
  authDomain: "react-authentication-c2a0c.firebaseapp.com",
  projectId: "react-authentication-c2a0c",
  storageBucket: "react-authentication-c2a0c.appspot.com",
  messagingSenderId: "898339745161",
  appId: "1:898339745161:web:b5cd51610f1c47040e0558",
  measurementId: "G-6RPRW98RXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;