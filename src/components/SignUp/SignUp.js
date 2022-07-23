
import React ,{useState, useEffect, useRef}from 'react'
import {Form,Button,Card, Alert,Spinner} from 'react-bootstrap';
import { useAuth } from '../../contextos/AuthContext';
import { setUserProperties } from 'firebase/analytics';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';



export default function Signup(){
    const navigate = useNavigate()
    const mail = useRef()
    const password = useRef()
    const repetirPassword = useRef()
    const telefono = useRef()
    const empresa = useRef()
    const MotivoContacto = useRef()
    const {registrarse} = useAuth()
    const [error,setError]=useState('')
    const [loading,setLoading] = useState(false)

    function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    let errorBoolean = false 
    const handleSubmit = async (e)=>{
        e.preventDefault()
        let booleanError = false 
        setLoading(true)
        // if(!validateEmail(mail.current.value)){
        //   return setError('el Email ingresado no es valido')
        // }
        if(password.current.value !== repetirPassword.current.value){
            return setError('Las contraseñas no son iguales')
        }

        if(!telefono){
          return setError('Falta completar el telefono') 
        }
        
        if(!empresa){
          return setError('Falta completar la empresa') 
        }
    
      
          registrarse(
              mail.current.value,
              password.current.value,
              telefono.current.value,
              empresa.current.value,
              MotivoContacto.current.value
            ).then(()=>"").catch((error)=> {console.log(error);booleanError=true;setError("Hubo un error al registrarse, la contraseña debe ser de tener un minimo de 6 letras , incluir una letra mayuscula y numeros")})

            setTimeout(()=>{
              console.log("asdsa",booleanError)
              if(!booleanError){
                navigate('/')
              }else{
                booleanError = false 
              }
              setLoading(false)
            },1500)
    }
    return (
      <div className="">
        <div className="login-wrap p-4 p-md-5">
          <div className="d-flex">
            <div className="w-100">
              <h3 className="mb-2">Registrarse</h3>
            </div>
          </div>
          {error && <Alert className='mb-5' variant='danger'>{error}</Alert>}
          <form onSubmit={handleSubmit} className="signin-form signup">
            <div className="form-group mt-3">
              <input ref={mail} type="text" name='mail' className="form-control" required></input>
              <label className="form-control-placeholder">Correo electrónico</label>
            </div>
            <div className="form-group">
              <input ref={password} type="password" name='password' className="form-control" required></input>
              <label className="form-control-placeholder">Contraseña</label>
              <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
            </div>
            <div className="form-group">
              <input ref={repetirPassword}  type="password" className="form-control" name='repetirPassword' required></input>
              <label className="form-control-placeholder">Repetir Contraseña</label>
              <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
            </div>
            <div className="form-group">
              <input ref={telefono}  type="number" className="form-control" name='telefono' required></input>
              <label className="form-control-placeholder">Teléfono</label>
            </div>
            <div className="form-group">
              <input ref={empresa}  type="text" className="form-control" name='empresa' required></input>
              <label className="form-control-placeholder">Empresa</label>
            </div>
            <div className="form-group mt-2">
              <input ref={MotivoContacto}  type="text" className="form-control" name='MotivoContacto'></input>
              <label className="form-control-placeholder">Motivo de Contacto (opcional)</label>
            </div>
            <div className="form-group mt-4">
              {loading && <div  className="d-flex justify-content-center"> <Spinner animation="border" /></div> }
              { !loading && <button type="submit" value="Registrarse" className="form-control btn btn-primary rounded submit px-3 mb-2">Registrarse</button>}
            </div>
          </form>
        </div>
      </div>
    )
}

/* NOMBRE Y APELLIDO (obligatorio)
EMPRESA(obligatorio)
TELEFONO (obligatorio)
MAIL (obligatorio)
MOTIVO DE CONTACTO
PRODUCTO DE INTERES */