import firebase from 'firebase';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCsWavzaadnUeR4mqP8Ub8GTkk5XKqZ6Nc',
  authDomain: 'e-commerce-e04a9.firebaseapp.com',
  databaseURL: 'https://e-commerce-e04a9.firebaseio.com',
  projectId: 'e-commerce-e04a9',
  storageBucket: 'e-commerce-e04a9.appspot.com',
  messagingSenderId: '46305094530',
  appId: '1:46305094530:web:bdda32ddc2ba3debb43d9b',
  measurementId: 'G-0EMMFN9KTY'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      alert(err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
