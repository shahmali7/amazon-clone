import {initializeApp} from 'firebase/app'
import {getAuth, createUserWithEmailAndPassword,onAuthStateChanged,signOut, signInWithEmailAndPassword} from 'firebase/auth'
import { useEffect, useState } from 'react';
const firebaseConfig = {
    apiKey: "AIzaSyCnWUsVTtT9N2s_-vT1xgrCiRDJIinlFZc",
    authDomain: "clone-befed.firebaseapp.com",
    projectId: "clone-befed",
    storageBucket: "clone-befed.appspot.com",
    messagingSenderId: "341974781558",
    appId: "1:341974781558:web:81d19693a56150752ed957"
};
const app = initializeApp(firebaseConfig)
export const db = app
const auth = getAuth()

export function signUp(email, password){
   return createUserWithEmailAndPassword(auth,email,password)
}
export function login(email, password){
   return signInWithEmailAndPassword(auth,email,password)
}
export function useAuth(){
    const [currentUser,setCurrentUser]=useState()
    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,user=>setCurrentUser(user))
       return unSubscribe
    },[])
 return currentUser
}
export function logOut(){
   return signOut(auth)
}