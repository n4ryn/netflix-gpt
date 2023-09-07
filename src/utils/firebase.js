// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCwWaYL9bn0PIozVmM59HpD7NQPTjcZqg",
  authDomain: "n4ryn-netflix-gpt.firebaseapp.com",
  projectId: "n4ryn-netflix-gpt",
  storageBucket: "n4ryn-netflix-gpt.appspot.com",
  messagingSenderId: "243499495834",
  appId: "1:243499495834:web:97fa3025195b73e883ca23",
  measurementId: "G-Q269ST25B2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);

export const auth = getAuth();
