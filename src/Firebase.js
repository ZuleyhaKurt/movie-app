
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider,onAuthStateChanged,signInWithPopup, signOut} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCGFi_he0dZ1h5_hACZPr4tCN9r8ds_u44",
  authDomain: "movie-app-de02f.firebaseapp.com",
  projectId: "movie-app-de02f",
  storageBucket: "movie-app-de02f.appspot.com",
  messagingSenderId: "919124104098",
  appId: "1:919124104098:web:9c4a7e52a9678a59b058fb",
  measurementId: "G-4XDFMERJZV"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = (navigate) => {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result)
            navigate("/")
    }).catch((error) => {
        console.log(error)
    })
};

export const userObserver = (setCurrentUser) => {
    //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const { email, displayName, photoURL } = user;
            setCurrentUser({ email, displayName, photoURL });
            console.log(user);
        } else {
            setCurrentUser(false);
            console.log("user signed out");
        }
    })
}


export const logOut = () => {
    signOut(auth);
   
  };