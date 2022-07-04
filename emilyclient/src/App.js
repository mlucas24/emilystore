import {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios';
import { authentication } from './Firebase/firebase';
import {signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import Maintenance from './Maintenance';
import AppBarMUI from './Components/AppBarMUI';
import { ThemeProvider } from '@mui/material';
import themeOptions from './MUI/themeOptions';
import HomePage from './Components/HomePage';

function App() {
  const [user, setUser] = useState({displayName: "", email: "", uid:"", photoURL: ""});

  const URL = "http://localhost:8080";
  //const URL = "https://emilyserver-2qvoitnhwq-uc.a.run.app";

  const SignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
    .then(async (re) =>{
      await setUser({
        displayName: re.user.displayName,
        email: re.user.email,
        uid: re.user.uid,
        photoURL: re.user.photoURL
      })})}

  return (
    <ThemeProvider theme={themeOptions}>
      <AppBarMUI user={user} SignInWithGoogle={SignInWithGoogle} />
      <HomePage />
      <Maintenance />
      </ThemeProvider>
  );
}

export default App;