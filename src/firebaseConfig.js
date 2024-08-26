// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Import auth-related functions

// If you need analytics, uncomment the following import:
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx8p2GeBdn1s00PAbWc_z6ouV2g48HwoU",
  authDomain: "medical-kg-llm.firebaseapp.com",
  projectId: "medical-kg-llm",
  storageBucket: "medical-kg-llm.appspot.com",
  messagingSenderId: "457111073409",
  appId: "1:457111073409:web:a3c3cea4ea50d854a89380",
  measurementId: "G-DDF34G9YF4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Google Auth Provider
export const googleProvider = new GoogleAuthProvider();

// If you need analytics, uncomment the following line:
// const analytics = getAnalytics(app);