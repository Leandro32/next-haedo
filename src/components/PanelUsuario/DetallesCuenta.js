import React,{useState,useEffect} from "react"
import { useForm } from "react-hook-form";
import { collection,doc, getDoc } from "firebase/firestore";
import {db} from '../firebaseConfig'
import { useAuth } from '../../contextos/AuthContext';
import './panelUsuario.css'

function DetallesCuenta() {
    const {currentUser} = useAuth()
    const [usuario,setUsuario] = useState({})

    useEffect(()=>{
        const getData = async() => {
            // const docRef = doc(dbFS, "usuarios",currentUser._delegate.uid);
            const doc = db.collection('usuarios').doc(currentUser._delegate.uid)
            const querySnapshot = await doc.get()
            console.log(querySnapshot)
        }
        getData() 
    },[])
    // const cityRef = dbFS.collection('usuarios')
    // const doc =  cityRef.get();
    // if (!doc.exists) {
    // console.log('No such document!');
    // } else {
    // console.log('Document data:', doc.data());
    // }
    // useEffect(() => {
    //     const docSnap = getDoc(docRef);
    //     console.log(docRef)
    // })


    return (
        <>
            <h4 className='lineaSubrayado mt-5 mt-md-0 mb-4'>Detalles de la cuenta</h4>
            <form>
                {/* register your input into the hook by invoking the "register" function */}
                <div className="mb-3">
                    <label for="nombre" className="form-label">Nombre/s:</label>
                    <label for="nombre" className="form-label">Nombre/s</label>
                </div>
                <div className="mb-3">
                    <label for="apellidos" className="form-label">Apellido/s:</label>
                    <label for="apellidos" className="form-label">Apellido/s</label>
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Correo electrónico:</label>
                    <label for="email" className="form-label">Correo electrónico</label>
                </div>
                {/* <button className='btn btn-dark mt-2' type="submit" value="Guardar Cambios">Guardar Cambios</button> */}
            </form>
        </>
    )
}

export default DetallesCuenta