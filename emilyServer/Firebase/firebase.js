// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA24p9lWizwltQhFtBcXp0D9v0J8hLV1GM",
  authDomain: "emilyserver.firebaseapp.com",
  projectId: "emilyserver",
  storageBucket: "emilyserver.appspot.com",
  messagingSenderId: "550799983513",
  appId: "1:550799983513:web:d26ef79138113b45a0c908",
  measurementId: "G-BQGNRTMEL2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);