import './login.css';

import React ,{useState, useEffect, useRef}from 'react'
import { useAuth } from '../../contextos/AuthContext';
import { setUserProperties } from 'firebase/analytics';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import {auth} from '../firebaseConfig/index';
import Input from './Input'
import { Button } from 'react-bootstrap';

export default function Login(){
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()
  const onSubmit=async (data)=>{
      //Enviar datos a firebase
      console.log("Form",data)
      try{
          const responseUser = await auth.signInWithEmailAndPassword(data.email,data.password)
          console.log("responseUser",responseUser.user.uid)
          navigate('/')
      }catch(e){
          console.log(e)
      }
      
  }
  return (
    <div className="">
          <div className="login-wrap p-4 p-md-5">
            <div className="d-flex">
              <div className="w-100">
                <h3 className="mb-2">Acceder</h3>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="signin-form">
                <Input label="Email" type="email" register={{...register("email", { required: true })}} />
                {errors.email && <span>El campo nombre es obligatorio</span>}
                <Input label="Contraseña" type="password" register={{...register("password", { required: true })}} />
                {errors.password && <span>El campo nombre es obligatorio</span>}
                <Button type="submit" variant="primary">Ingresar</Button>
              
              {/*
              <div className="form-group mt-3">
                <input type="text" className="form-control" required></input>
                <label className="form-control-placeholder">Usuario</label>
              </div>
              <div className="form-group">
                <input id="password-field" type="password" className="form-control" required></input>
                <label className="form-control-placeholder">Contraseña</label>
                <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
              </div>

              <div className="form-group mt-5">
                <button type="submit" value="Acceder" className="form-control btn btn-primary rounded submit px-3 mb-2">Acceder</button>
              </div>
              */}
              
              <div className="form-group d-flex justify-content-between mt-4">
                <div className="text-right">
                  <a href="#">Olvidé mi contraseña?</a>
                </div>
              </div>
            </form>
            <div className="d-flex justify-content-between align-items-center">
              <button className='btn btn-outline-dark' id='botonAtras' onClick={() => navigate(-1)}>Atrás</button>
            </div>  
          </div>
        </div>
  );
}
