import React, { useState } from "react";
import zarandaVibratoriaImage from "assets/img/zaranda.jpg";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Footer from "components/Footer/Footer.js";
import './ChancadoraQuijada.css';

function ZarandaVibratoria() {
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
          <img src={zarandaVibratoriaImage} alt="Zaranda Vibratoria" />

          {/* Hover item 1 */}
          <div className="hover-item" style={{ top: '30%', left: '20%' }} onClick={() => handleTabClick('info')}>
            <svg className="hover-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.6 36h4.8V21.6h-4.8V36ZM24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0Zm0 43.2C13.44 43.2 4.8 34.56 4.8 24 4.8 13.44 13.44 4.8 24 4.8c10.56 0 19.2 8.64 19.2 19.2 0 10.56-8.64 19.2-19.2 19.2Zm-2.4-26.4h4.8V12h-4.8v4.8Z" fill="#fff" />
            </svg>
            <div className="hover-text">
              <h4>Información</h4>
              <p>La zaranda vibratoria es un equipo de separación de materiales que utiliza vibración para clasificar el mineral en diferentes tamaños.</p>
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
                <li>Mallas</li>
                <li>Motor vibrador</li>
                <li>Chasis</li>
                <li>Resortes</li>
                <li>Bandejas de alimentación</li>
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
                <li>Revisión de mallas</li>
                <li>Lubricación del motor vibrador</li>
                <li>Inspección de resortes</li>
                <li>Limpieza de bandejas</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Div con texto adicional */}
        <div className="additional-text">
          <h3>Información</h3>
          <p>
            La planta piloto de procesamiento de minerales de TECSUP cuenta con una zaranda vibratoria, que es esencial en la etapa de clasificación del mineral. Esta zaranda se encarga de separar el material en diferentes tamaños, asegurando una correcta alimentación para las etapas posteriores del proceso.
          </p>
          <h4>Capacidad de la Zaranda Vibratoria</h4>
          <p>
            La zaranda vibratoria instalada en la planta piloto tiene una capacidad nominal de 100 kg/h. Sin embargo, debido a limitaciones en la capacidad de los equipos posteriores, la alimentación real de la zaranda se ha restringido a 50 kg/h. Este ajuste asegura que el sistema opere de manera eficiente sin sobrecargar los componentes subsiguientes.
          </p>
          <h4>Consideraciones Operativas</h4>
          <ul>
            <li>Se debe monitorizar constantemente la tasa de alimentación desde la tolva, asegurando que no exceda los 50 kg/h.</li>
            <li>Es fundamental realizar un mantenimiento regular tanto de la zaranda como de las mallas, así como de los resortes y el motor vibrador, para evitar interrupciones en el proceso y asegurar un funcionamiento óptimo.</li>
            <li>La calibración de la zaranda debe realizarse periódicamente para asegurar que la clasificación del material se mantenga dentro de los parámetros deseados.</li>
          </ul>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default ZarandaVibratoria;
