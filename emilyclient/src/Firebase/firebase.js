// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9ltOa7qJV8-v2T7NJSpkvMQrmdZNnqtU",
  authDomain: "emilyclient.firebaseapp.com",
  databaseURL: "https://emilyclient-default-rtdb.firebaseio.com",
  projectId: "emilyclient",
  storageBucket: "emilyclient.appspot.com",
  messagingSenderId: "106508015048",
  appId: "1:106508015048:web:669997d4b1f184cb86dcfd",
  measurementId: "G-H4H8BLDQNM"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
//const analytics = getAnalytics(firebaseApp);
export const authentication = getAuth(firebaseApp);
