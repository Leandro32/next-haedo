import '../src/style/style.css'
import Productos from './components/Productos/Productos';
import Marcas from './components/Marcas/Marcas';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import Slider from './components/Slider/Slider';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Slider />
      <Productos  />
      <Marcas />
      <Footer />
    </div>
  );
}

export default App;
