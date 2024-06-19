import React, { useState } from "react";
import fajaTransportadora from "assets/img/fajaTransportadora.jpg";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Footer from "components/Footer/Footer.js";
import './ChancadoraQuijada.css';

function FajaTransportadora() {
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
          <img src={fajaTransportadora} alt="Faja Transportadora" />

          {/* Hover item 1 */}
          <div className="hover-item" style={{ top: '30%', left: '20%' }} onClick={() => handleTabClick('info')}>
            <svg className="hover-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.6 36h4.8V21.6h-4.8V36ZM24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0Zm0 43.2C13.44 43.2 4.8 34.56 4.8 24 4.8 13.44 13.44 4.8 24 4.8c10.56 0 19.2 8.64 19.2 19.2 0 10.56-8.64 19.2-19.2 19.2Zm-2.4-26.4h4.8V12h-4.8v4.8Z" fill="#fff" />
            </svg>
            <div className="hover-text">
              <h4>Información</h4>
              <p>La faja transportadora es un equipo utilizado para el transporte continuo de materiales a granel en diferentes etapas del proceso.</p>
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
                <li>Correa transportadora</li>
                <li>Tambores</li>
                <li>Rodillos de soporte</li>
                <li>Motor</li>
                <li>Reductores de velocidad</li>
                <li>Rascadores</li>
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
                <li>Revisión de la tensión de la correa</li>
                <li>Inspección y reemplazo de rodillos dañados</li>
                <li>Lubricación del motor y reductores</li>
                <li>Limpieza de rascadores</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Div con texto adicional */}
        <div className="additional-text">
          <h3>Información</h3>
          <p>
            La faja transportadora en la planta piloto de procesamiento de minerales de TECSUP es esencial para el transporte eficiente de materiales a granel entre diferentes etapas del proceso. Permite mover grandes volúmenes de material con un mínimo esfuerzo y tiempo.
          </p>
          <h4>Capacidad de la Faja Transportadora</h4>
          <p>
            La faja transportadora instalada en la planta piloto tiene una capacidad nominal de 500 kg/h, facilitando un flujo continuo y estable de material.
          </p>
          <h4>Consideraciones Operativas</h4>
          <ul>
            <li>Monitorizar constantemente la alineación de la correa para evitar desvíos y daños.</li>
            <li>Realizar inspecciones regulares para detectar y corregir problemas antes de que se conviertan en fallos mayores.</li>
            <li>Asegurar una lubricación adecuada de todas las partes móviles para prolongar la vida útil del equipo.</li>
          </ul>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default FajaTransportadora;
