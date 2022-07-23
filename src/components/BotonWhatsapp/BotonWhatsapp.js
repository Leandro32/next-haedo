import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function BotonWhatsapp() {
  return (
    <a href="https://wa.me/+541159240239?&text=Buenos%20d%C3%ADas!%20Quer%C3%ADa%20realizarte%20una%20consulta.%20" className="float d-flex justify-content-center" target="_blank">    
    <FontAwesomeIcon className='align-self-center' icon={faWhatsapp} size="lg" />
    </a>
  )
}

export default BotonWhatsapp