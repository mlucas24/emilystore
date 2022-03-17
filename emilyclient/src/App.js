import {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios';
import { authentication } from './Firebase/firebase';
import {signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

function App() {
  const [user, setUser] = useState({});
  const[isHidden, setIsHidden] = useState(true);

  const URL = "http://localhost:2424"
  const buttonClicked = () => {
    axios.get(`${URL}/test`)
    .then(data => console.log(data))
  }
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

      useEffect(() => {
        const isEmpty = Object.keys(user).length === 0;
        if (isEmpty === true) {
          setIsHidden(true);
        }
        else {
          setIsHidden(false);
            axios.post(`${URL}/user`, {
              params: {
                displayName: user.displayName,
                email: user.email,
                uid: user.uid,
                photoURL: user.photoURL
              }
            })
        }
      }, [user]);
  return (
    <div className="App">
      <button onClick={buttonClicked}>test connection</button>
      <button onClick={SignInWithGoogle}>Sign in with Google</button>
      <div hidden={isHidden}>hello {user.displayName}</div>
      <img src={user.photoURL} hidden={isHidden} alt="profilepic"/>
    </div>
  );
}

export default App;
