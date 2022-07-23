import './login.css';
import logo from '../../assets/logo.png';

import React ,{useState, useEffect, useRef}from 'react'
import { useAuth } from '../../contextos/AuthContext';
import { setUserProperties } from 'firebase/analytics';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import LoginComponent from './LoginComponent'
import Signup from '../SignUp/SignUp';

export default function Login(){
    const navigate = useNavigate()
    const nombre = useRef()
    const password = useRef()
    const {ingresar} = useAuth()
    const [error,setError]=useState('')
    const [loading,setLoading] = useState(false)

    const handleSubmit = (e)=>{

        e.preventDefault()
        try {
            setLoading(true)
            ingresar(nombre.current.value,password.current.value).catch(error=>setError('Hubo un error al iniciar sesion'))
            navigate("/")
          } catch (error) {
            setError('Hubo un error al iniciar sesion')            
        }
      
  }
        return (
          <div className="justify-content-center mt-5 container">
            <Link to="/">
              <img src={logo} className="img mx-auto d-block mt-5" />
            </Link>
            <div className="row">
              <div className="col-12 col-md-6">
                <LoginComponent />
              </div>
              <div className="col-12 col-md-6">
                <Signup />
              </div>
            
            </div>
          </div>
        );
      }
