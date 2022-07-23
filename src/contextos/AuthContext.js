
import React ,{useState, useEffect,useContext}from 'react'
import {auth, db,dbFS} from '../components/firebaseConfig/index'
import { collection, addDoc } from "firebase/firestore";

const AuthContext = React.createContext()
export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){
    const [currentUser,setCurrentUser] = useState(() => {
        const user = auth.currentUser;
        return user;
      });
    const [loading,setLoading] = useState(true)

    function logOut(){
        return auth.signOut()
    }
    function ingresar(email,contraseña){
        return auth.signInWithEmailAndPassword(email,contraseña)
    }

    function resetPassword(email){
        return auth.sendPasswordResetEmail(email)
    }
    async function ingresarDatos(
        email,
        nombre,
        telefono,
        empresa,
    ){
      const registroExtra = {
          email,
          nombre,
          telefono,
          empresa
      }  

        await addDoc(collection(db, "usuarios"), {
            ...registroExtra
        })     
    }

    async function registrarse(
            email,
            contraseña,
            telefono,
            empresa,
            MotivoContacto=undefined
        ){
          const registroExtra = {
              telefono,
              empresa
          }  
          if(MotivoContacto) registroExtra.MotivoContacto = MotivoContacto;

        let cred = await auth.createUserWithEmailAndPassword(email,contraseña)
        console.log(cred.user._delegate.uid)
        const newDoc = await addDoc(collection(dbFS,"usuarios"), {
            id:cred.user._delegate.uid,
            ...registroExtra
        })   
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user=>{
            // await setCurrentUser(user)
            setCurrentUser(user)
            setLoading(false)
        })
        
        return unsubscribe
    },[])
    
    const value = {
        currentUser,
        registrarse,
        ingresar,
        logOut,
        resetPassword,
        ingresarDatos
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}