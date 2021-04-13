import React from 'react';
import {auth} from '../firebase';
import firebase from 'firebase/app'

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign In</button>
    </>
  )
}

export default SignIn
