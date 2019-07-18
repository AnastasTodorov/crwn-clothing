import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD9nYo3kGe4Fb4EyWvrCzZu9iam9jgm1WY",
  authDomain: "crwn-db-de250.firebaseapp.com",
  databaseURL: "https://crwn-db-de250.firebaseio.com",
  projectId: "crwn-db-de250",
  storageBucket: "",
  messagingSenderId: "553678043360",
  appId: "1:553678043360:web:3751c0eb8ec90c18"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;