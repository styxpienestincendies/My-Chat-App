// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA84ERHF5WpxCzi3xGnOg-GlvFIdHhka80",
    authDomain: "chat-app-b21bc.firebaseapp.com",
    projectId: "chat-app-b21bc",
    storageBucket: "chat-app-b21bc.appspot.com",
    messagingSenderId: "311393075174",
    appId: "1:311393075174:web:13fa46823092bad2c42027"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)