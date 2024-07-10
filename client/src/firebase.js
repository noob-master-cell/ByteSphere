// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tech-blog-ff1d5.firebaseapp.com",
  projectId: "tech-blog-ff1d5",
  storageBucket: "tech-blog-ff1d5.appspot.com",
  messagingSenderId: "346533903620",
  appId: "1:346533903620:web:65941201547af67931e451",
  measurementId: "G-YK1LKQ9J57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
