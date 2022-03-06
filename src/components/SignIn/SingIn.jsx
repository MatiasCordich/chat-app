import React from 'react'
import firebase from 'firebase/compat/app'
import { auth } from '../../firebase'
import { SignInBtn, GmailImage } from './SingInStyle'


const SingIn = () => {

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
    }

  return (
    <SignInBtn onClick={signInWithGoogle}>
      <GmailImage src="https://img.icons8.com/fluency/48/000000/gmail-new.png"/>
      Sign In with Google
    </SignInBtn>
  )
}

export default SingIn