
import firebase from 'firebase/app'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB_NoIWMY2Az8wzv4N2siERDWNyYGlTTM8",
    authDomain: "pratice-firebase-52fa1.firebaseapp.com",
    databaseURL: "https://pratice-firebase-52fa1.firebaseio.com",
    projectId: "pratice-firebase-52fa1",
    storageBucket: "pratice-firebase-52fa1.appspot.com",
    messagingSenderId: "564169396974",
    appId: "1:564169396974:web:d6b997051cd10897"
  };
  // Initialize Firebase

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const provider = new firebase.auth.FacebookAuthProvider();
  
  
  export {
    firebaseApp,
    provider,  
  } 
  