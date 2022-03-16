import {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios';
import { authentication } from './Firebase/firebase';
import {signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

function App() {
  const[displayName, setDisplayName] = useState("");
  const[email, setEmail] = useState("");
  const[uid, setUID] = useState("");
  const[photoURL, setPhotoURL] = useState("");
  const[isHidden, setIsHidden] = useState(true);
  const [loginTrigger, setLoginTrigger] = useState(0)

  const URL = "http://localhost:2424"
  const buttonClicked = () => {
    axios.get(`${URL}/test`)
    .then(data => console.log(data))
  }
  const SignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
    .then((re) =>{
      const p1 = setDisplayName(re.user.displayName);
      const p2 = setEmail(re.user.email);
      const p3 = setUID(re.user.uid);
      const p4 = setPhotoURL(re.user.photoURL);
    Promise.all([p1,p2,p3,p4]).then(() =>{
    })
    }).then(() => setIsHidden(false))
  }

  useEffect(() => {
    if (loginTrigger != 2) {

      if(displayName != "") {
        if (email != "") {
          if(photoURL != "") {

          }
          if(photoURL != "") {
            setLoginTrigger(2);
            axios.post(`${URL}/user/${displayName}/${email}/${uid}/${photoURL}`)
          }
        }
      }
    }
  }, [displayName,email,photoURL,uid, loginTrigger])
  return (
    <div className="App">
      <button onClick={buttonClicked}>test connection</button>
      <button onClick={SignInWithGoogle}>Sign in with Google</button>
      <div hidden={isHidden}>hello {displayName}</div>
      <img src={photoURL} hidden={isHidden}/>
    </div>
  );
}

export default App;
