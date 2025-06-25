// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4EecVeJU4Y3RbV0cCQtdc5Hr1prpm4tk",
  authDomain: "blog-project-7fa27.firebaseapp.com",
  projectId: "blog-project-7fa27",
  storageBucket: "blog-project-7fa27.firebasestorage.app",
  messagingSenderId: "828808476897",
  appId: "1:828808476897:web:f27a412c3fd45d8a249fa0",
  measurementId: "G-659XE6E5X3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {app, auth};