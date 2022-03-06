import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyBb10ABi_IQGUq2ijdqHcRGsaOCPfJ1W_o",
    authDomain: "chat-app-a5334.firebaseapp.com",
    projectId: "chat-app-a5334",
    storageBucket: "chat-app-a5334.appspot.com",
    messagingSenderId: "385552796665",
    appId: "1:385552796665:web:9bd9b712eef2a08f984b28"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore }

