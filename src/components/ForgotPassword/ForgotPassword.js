
import React ,{useState, useEffect, useRef}from 'react'
import {Form,Button,Card, Alert} from 'react-bootstrap';
import { useAuth } from '../../contextos/AuthContext';
import { setUserProperties } from 'firebase/analytics';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';



export default function ForgotPassword(){
    const navigate = useNavigate()
    const mail = useRef()
    const password = useRef()
    const repetirPassword = useRef()
    const telefono = useRef()
    const empresa = useRef()
    const MotivoContacto = useRef()
    const {resetPassword} = useAuth()
    const [error,setError]=useState('')
    const [loading,setLoading] = useState(false)

    let errorBoolean = false
    const handleSubmit = (e)=>{
        e.preventDefault()
        setLoading(true)
        try{
          resetPassword(mail.current.value)
        }catch(error){
          setError('Error usuario no registrado')
        }
        setLoading(false)
    }
    return (
      <div className="">
        <div className="login-wrap p-4 p-md-5">
          <div className="d-flex">
            <div className="w-100">
              <h3 className="mb-2">Reiniciar Contraseña</h3>
            </div>
          </div>
          {error && <Alert className='mb-5' variant='danger'>{error}</Alert>}
          <form onSubmit={handleSubmit} className="signin-form signup">
            <div className="form-group mt-3">
              <input ref={mail} type="text" name='mail' className="form-control" required></input>
              <label className="form-control-placeholder">Email</label>
            </div>
        
            <div className="form-group mt-5">
              <button type="submit" value="Registrarse" className="form-control btn btn-primary rounded submit px-3 mb-2">Cambiar contraseña</button>
            </div>
          </form>
        </div>
      </div>
    )
}