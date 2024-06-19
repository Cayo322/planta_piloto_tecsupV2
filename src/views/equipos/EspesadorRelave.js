import React, { useState } from "react";
import espesadorRelaveImage from "assets/img/espesador.jpg";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Footer from "components/Footer/Footer.js";
import './ChancadoraQuijada.css';

function EspesadorRelave() {
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
          <img src={espesadorRelaveImage} alt="Espesador de Relave" />

          {/* Hover item 1 */}
          <div className="hover-item" style={{ top: '30%', left: '20%' }} onClick={() => handleTabClick('info')}>
            <svg className="hover-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.6 36h4.8V21.6h-4.8V36ZM24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0Zm0 43.2C13.44 43.2 4.8 34.56 4.8 24 4.8 13.44 13.44 4.8 24 4.8c10.56 0 19.2 8.64 19.2 19.2 0 10.56-8.64 19.2-19.2 19.2Zm-2.4-26.4h4.8V12h-4.8v4.8Z" fill="#fff" />
            </svg>
            <div className="hover-text">
              <h4>Información</h4>
              <p>El espesador de relave es un equipo utilizado para la concentración de sólidos en la suspensión de relaves, reduciendo el volumen de agua en el relave.</p>
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
                <li>Tanque de espesado</li>
                <li>Rastrillos</li>
                <li>Alimentador central</li>
                <li>Descarga de relave espesado</li>
                <li>Descarga de agua clarificada</li>
                <li>Motor y reductor</li>
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
                <li>Revisión y limpieza de los rastrillos</li>
                <li>Inspección del alimentador central</li>
                <li>Lubricación del motor y reductor</li>
                <li>Monitoreo de la descarga de relave y agua clarificada</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Div con texto adicional */}
        <div className="additional-text">
          <h3>Información</h3>
          <p>
            El espesador de relave en la planta piloto de procesamiento de minerales de TECSUP es fundamental para la gestión eficiente del relave, permitiendo una mayor recuperación de agua y una disposición más segura de los sólidos.
          </p>
          <h4>Capacidad del Espesador de Relave</h4>
          <p>
            El espesador de relave instalado tiene una capacidad nominal para procesar 1000 m³/h de pulpa de relave, logrando una alta eficiencia en la separación de sólidos y líquidos.
          </p>
          <h4>Consideraciones Operativas</h4>
          <ul>
            <li>Monitorizar la tasa de alimentación para evitar sobrecargas.</li>
            <li>Realizar mantenimientos regulares para asegurar el buen funcionamiento del equipo.</li>
            <li>Asegurar que los rastrillos estén siempre operativos y sin obstrucciones.</li>
            <li>Controlar la calidad del agua clarificada para su reutilización en el proceso.</li>
          </ul>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default EspesadorRelave;
