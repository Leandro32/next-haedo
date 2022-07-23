import '../../style/style.css';
import './style/mapa.css';

function Mapa() {
  return (
    <div className='mapa container mt-5'>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.346792321854!2d-58.594057884200545!3d-34.64594386724167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc78502afce47%3A0x9c9a272a824c8fd0!2s%40Nexthaedo!5e0!3m2!1sen!2sar!4v1649627000270!5m2!1sen!2sar" 
        width="1400" 
        height="400" 
        style={{ border: "0" }} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  );
}

export default Mapa;
