import React, { useState } from "react";
import tolvaFinosImage from "assets/img/tolva.jpg";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Footer from "components/Footer/Footer.js";
import './ChancadoraQuijada.css';

function TolvaDeFinos() {
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
          <img src={tolvaFinosImage} alt="Tolva de Finos" />

          {/* Hover item 1 */}
          <div className="hover-item" style={{ top: '30%', left: '20%' }} onClick={() => handleTabClick('info')}>
            <svg className="hover-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.6 36h4.8V21.6h-4.8V36ZM24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0Zm0 43.2C13.44 43.2 4.8 34.56 4.8 24 4.8 13.44 13.44 4.8 24 4.8c10.56 0 19.2 8.64 19.2 19.2 0 10.56-8.64 19.2-19.2 19.2Zm-2.4-26.4h4.8V12h-4.8v4.8Z" fill="#fff" />
            </svg>
            <div className="hover-text">
              <h4>Información</h4>
              <p>La tolva de finos es un equipo de almacenamiento utilizado para contener y dosificar materiales finos en el proceso de producción.</p>
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
                <li>Cuerpo principal</li>
                <li>Compuertas de descarga</li>
                <li>Vibradores</li>
                <li>Soportes</li>
                <li>Sensores de nivel</li>
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
                <li>Limpieza periódica</li>
                <li>Inspección de compuertas</li>
                <li>Revisión de vibradores</li>
                <li>Verificación de sensores</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Div con texto adicional */}
        <div className="additional-text">
          <h3>Información</h3>
          <p>
            La planta piloto de procesamiento de minerales de TECSUP cuenta con una tolva de finos, que es esencial en la etapa de almacenamiento y dosificación de materiales finos. Esta tolva asegura una alimentación controlada y constante de los materiales hacia las siguientes etapas del proceso.
          </p>
          <h4>Capacidad de la Tolva de Finos</h4>
          <p>
            La tolva de finos instalada en la planta piloto tiene una capacidad nominal de 200 kg. Esta capacidad permite almacenar una cantidad significativa de material fino, asegurando una alimentación continua y sin interrupciones hacia los equipos posteriores.
          </p>
          <h4>Consideraciones Operativas</h4>
          <ul>
            <li>Se debe monitorizar constantemente el nivel de material dentro de la tolva, asegurando que no se exceda su capacidad máxima de 200 kg.</li>
            <li>Es fundamental realizar un mantenimiento regular tanto de la tolva como de las compuertas, vibradores y sensores de nivel, para evitar interrupciones en el proceso y asegurar un funcionamiento óptimo.</li>
            <li>La calibración de los equipos de dosificación debe realizarse periódicamente para asegurar que la tasa de alimentación se mantenga dentro de los parámetros deseados.</li>
          </ul>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default TolvaDeFinos;
