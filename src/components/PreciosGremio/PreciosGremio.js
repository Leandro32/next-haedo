import React ,{useState, useEffect, useRef}from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import {useAuth} from '../../contextos/AuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercent} from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Alert } from 'react-bootstrap';

function PreciosGremio() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [alertVisibility, setAlertVisibility] = useState(false)
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors }
    } = useForm();
    const form = useRef();
    
    const sendEmail = () => {
      emailjs.sendForm('service_8d25vfq', 'template_rrab8zg', form.current, 'u6T9P4zVWVj_ZxnPC')
      setAlertVisibility(true) //muestra la alerta al enviar el formulario
      setTimeout(() => {
        reset() //resetea el formulario
        setAlertVisibility(false) //deja de mostrar la alerta
        handleClose() // cierra el modal
      }, 4000);
    }

    return (
      <>
        <Button id='botonMargen' className='nav-link izquierdo fontTitulo d-flex' variant="primary" onClick={handleShow}>
          <FontAwesomeIcon icon={faPercent} className='align-self-center' inverse/>    
          <span className='nav-link fontTitulo' >Precios Gremio</span>
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Pedinos tus precios de gremio</Modal.Title>
          </Modal.Header>
          <Form ref={form} onSubmit={handleSubmit(sendEmail)} noValidate>
            <Modal.Body>
                  <Form.Group className="mb-3">
                      <Form.Label >Nombre APE</Form.Label>
                      <Form.Control
                        required  
                        type="text" 
                        placeholder="Ingresa el nombre APE" 
                        name="name"
                        {...register('name', {
                          required: { value: true, message: 'Por favor ingrese el Nombre APE' }
                        })}
                      />
                      {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                  </Form.Group>
                  <Form.Group className="mb-3">
                      <Form.Label >Empresa</Form.Label>
                      <Form.Control 
                        required  
                        type="text" 
                        placeholder="Ingresa el nombre de la empresa" 
                        name="empresa"
                        {...register('empresa', {
                          required: { value: true, message: 'Por favor ingrese su empresa' }
                        })}
                        />
                        {errors.name && <span className='errorMessage'>{errors.empresa.message}</span>}
                  </Form.Group>
                  <Form.Group className="mb-3">
                      <Form.Label >Telefono</Form.Label>
                      <Form.Control 
                        required  
                        type="number" 
                        placeholder="Ingresa un teléfono al que podamos contactarnos"
                        name="telefono"
                        {...register('telefono', {
                          required: { value: true, message: 'Por favor ingrese un teléfono' }
                        })}
                      />
                      {errors.name && <span className='errorMessage'>{errors.telefono.message}</span>}
                  </Form.Group>
                  <Form.Group className="mb-3">
                      <Form.Label >Correo Electrónico</Form.Label>
                      <Form.Control 
                        required  
                        type='email'
                        name='email'
                        placeholder="Ingresa un correo eléctronico"
                        {...register('email', {
                          required: true,
                          pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                        })} 
                      />
                      {errors.email && (
                        <span className='errorMessage'>Por favor ingresar un correo electrónico valido.</span>
                      )}
                  </Form.Group>
            </Modal.Body>
            { 
              alertVisibility && 
                <Alert variant='success'>
                  Formulario enviado! En breve nos contactaremos. Gracias!
                </Alert>
            } 
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
  }
export default PreciosGremio