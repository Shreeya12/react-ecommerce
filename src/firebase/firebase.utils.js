import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC-UpgLA93jj73f5ErXFs1ni8Aasje_qWg",
    authDomain: "home-db-c1388.firebaseapp.com",
    databaseURL: "https://home-db-c1388.firebaseio.com",
    projectId: "home-db-c1388",
    storageBucket: "home-db-c1388.appspot.com",
    messagingSenderId: "748347826856",
    appId: "1:748347826856:web:73469022a1d6ab244b189d",
    measurementId: "G-3FBHYML26Z"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

   export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;
