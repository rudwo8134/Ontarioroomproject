import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import {sendPasswordResetEmail} from 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTODOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MESUREMENTID,
};

firebase.initializeApp(config);

export const createrentcondopost = async(data) =>{

  const rentconforef = await firestore.doc(`/rentcondo/${data.id}`)
  try{
    await rentconforef.set({
      ...data
    })
  }catch(err){
    console.log('error creating rentcondo',err.message);
  }

  return rentconforef
}

export const createUserProfileDocument = async (userauth, additionaldata) =>{
  if(!userauth) return;

  const userRef = await firestore.doc(`/users/${userauth.uid}`)
  const snapshot = await userRef.get();

  if(!snapshot.exists){

    const {displayName, email} = userauth;
    const  createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionaldata
      })
    }catch(err){
      console.log('error creating user', err.message)
    }
  }

    return userRef
  }

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};




export const Uploadimage = async(imagefile) =>{
  try{
    var storageRef =await  firebase.storage().ref("img/"+imagefile.name)
    var task = await storageRef.put(imagefile)
    var result = task.ref.getDownloadURL()
    return result;
  }catch(err){
    return err
  }
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();


console.log(auth);

export const Sendpasswordreset = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email, {
      url: 'http://onroom.ca/login',
    });
    console.log('success send');
  } catch (err) {
    return console.log(err);
  }
};


export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInwithgoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
