// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNHfUAYYabiUwdIp66yqdJV73dFuq7VyE",
  authDomain: "simple-ecoomerce.firebaseapp.com",
  projectId: "simple-ecoomerce",
  storageBucket: "simple-ecoomerce.appspot.com",
  messagingSenderId: "245894213077",
  appId: "1:245894213077:web:9207c6bbe23ea38723615c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export default auth;