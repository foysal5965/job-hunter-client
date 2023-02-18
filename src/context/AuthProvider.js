import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase';
const auth= getAuth(app)
export const AuthContext= createContext();
const googleProvider= new GoogleAuthProvider()


const AuthProvider = ({children}) => {
   const[user, setUser]=useState(null);
   const [loading, setLoading]= useState(true)
   const createUser= (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
   };
   const login=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email,password)
   };
   const googleSignin=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
   }
   const logOut=()=>{
    return signOut(auth)
   }

   useEffect(()=>{
    const unsubscribe= onAuthStateChanged(
        auth,
        currentUser=>{
            setUser(currentUser)
            setLoading(false)
        }
    )
    return()=>{
        return unsubscribe()
    }
   }
   ,[])
   const authInfo={createUser,login,googleSignin,user,loading,logOut}
   return(
    <div>
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    </div>
   )
};

export default AuthProvider;