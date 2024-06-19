import React, { useState } from "react";
import molinoBolasImage from "assets/img/molino.jpg";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Footer from "components/Footer/Footer.js";
import './ChancadoraQuijada.css';

function MolinoBolas() {
  const [activeTab, setActiveTab] = useState('');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <AdminNavbar />
      <div className="chancadora-container">
        {/* Contenedor de la imagen y hover items */}
        <div className="image-container">
          <img src={molinoBolasImage} alt="Molino de Bolas" />

          {/* Hover item 1 */}
          <div className="hover-item" style={{ top: '30%', left: '20%' }} onClick={() => handleTabClick('info')}>
            <svg className="hover-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.6 36h4.8V21.6h-4.8V36ZM24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0Zm0 43.2C13.44 43.2 4.8 34.56 4.8 24 4.8 13.44 13.44 4.8 24 4.8c10.56 0 19.2 8.64 19.2 19.2 0 10.56-8.64 19.2-19.2 19.2Zm-2.4-26.4h4.8V12h-4.8v4.8Z" fill="#fff" />
            </svg>
            <div className="hover-text">
              <h4>Información</h4>
              <p>El molino de bolas es un equipo clave para la molienda de materiales tras el proceso de trituración.</p>
            </div>
          </div>

          {/* Hover item 2 */}
          <div className="hover-item" style={{ top: '70%', left: '40%' }} onClick={() => handleTabClick('parts')}>
            <svg className="hover-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.6 36h4.8V21.6h-4.8V36ZM24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0Zm0 43.2C13.44 43.2 4.8 34.56 4.8 24 4.8 13.44 13.44 4.8 24 4.8c10.56 0 19.2 8.64 19.2 19.2 0 10.56-8.64 19.2-19.2 19.2Zm-2.4-26.4h4.8V12h-4.8v4.8Z" fill="#fff" />
            </svg>
            <div className="hover-text">
              <h4>Partes</h4>
              <ul>
                <li>Cuerpo del molino</li>
                <li>Revestimientos</li>
                <li>Bolas de molienda</li>
                <li>Motor</li>
                <li>Reductor de velocidad</li>
                <li>Colector de polvo</li>
              </ul>
            </div>
          </div>

          {/* Hover item 3 */}
          <div className="hover-item" style={{ top: '8%', left: '60%' }} onClick={() => handleTabClick('maintenance')}>
            <svg className="hover-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.6 36h4.8V21.6h-4.8V36ZM24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0Zm0 43.2C13.44 43.2 4.8 34.56 4.8 24 4.8 13.44 13.44 4.8 24 4.8c10.56 0 19.2 8.64 19.2 19.2 0 10.56-8.64 19.2-19.2 19.2Zm-2.4-26.4h4.8V12h-4.8v4.8Z" fill="#fff" />
            </svg>
            <div className="hover-text">
              <h4>Mantenimiento</h4>
              <ul>
                <li>Revisión de revestimientos</li>
                <li>Lubricación de rodamientos</li>
                <li>Inspección del motor</li>
                <li>Verificación del reductor</li>
                <li>Limpieza del colector de polvo</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Div con texto adicional */}
        <div className="additional-text">
          <h3>Información</h3>
          <p>
            La planta piloto de procesamiento de minerales de TECSUP cuenta con un molino de bolas, que es fundamental en la etapa de molienda del mineral. Este equipo permite la reducción del tamaño del material a través de la rotación de un cilindro con bolas de acero.
          </p>
          <h4>Capacidad del Molino de Bolas</h4>
          <p>
            El molino de bolas instalado en la planta piloto tiene una capacidad nominal de 50 kg/h. Este equipo es capaz de moler una gran variedad de materiales, asegurando una molienda fina y uniforme.
          </p>
          <h4>Consideraciones Operativas</h4>
          <ul>
            <li>Se debe monitorizar constantemente la tasa de alimentación, asegurando que no exceda los 50 kg/h.</li>
            <li>Es fundamental realizar un mantenimiento regular tanto del molino como de sus componentes, para evitar interrupciones en el proceso y asegurar un funcionamiento óptimo.</li>
            <li>La calibración del molino debe realizarse periódicamente para asegurar que el tamaño de partícula se mantenga dentro de los parámetros deseados.</li>
          </ul>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default MolinoBolas;
