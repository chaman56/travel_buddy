import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  "Your firbase configurations";
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
