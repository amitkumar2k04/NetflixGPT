// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8TdM4v4yuglr-xUmufXf8853CkEA2_08",
  authDomain: "netflixgpt-f2c08.firebaseapp.com",
  projectId: "netflixgpt-f2c08",
  storageBucket: "netflixgpt-f2c08.appspot.com",
  messagingSenderId: "440593659807",
  appId: "1:440593659807:web:4ba731da81ae775b226faa",
  measurementId: "G-6NL8GFY2L0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);





export const auth = getAuth();