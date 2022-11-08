// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWzLVVXAd9tujFQdTVyiwQRZMGMb6vOzc",
    authDomain: "photographer-auth-ass11.firebaseapp.com",
    projectId: "photographer-auth-ass11",
    storageBucket: "photographer-auth-ass11.appspot.com",
    messagingSenderId: "389165972486",
    appId: "1:389165972486:web:a47fb3b259fd6c4e635787"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;