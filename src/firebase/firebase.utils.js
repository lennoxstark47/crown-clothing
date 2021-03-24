import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = 
    {
        apiKey: "AIzaSyC1BPpreNY-LiB4sXb_GH-yz92QEhJxSWg",
        authDomain: "crown-db-ccfe0.firebaseapp.com",
        projectId: "crown-db-ccfe0",
        storageBucket: "crown-db-ccfe0.appspot.com",
        messagingSenderId: "759192438634", 
        appId: "1:759192438634:web:19dac069007023d2000713",
        measurementId: "G-PB0ST5TX1F"
      };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot =await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set ({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log("error creating user", error.message)
    }
  }

  return userRef;
  // console.log(snapShot);
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;

