import React, { useState } from "react";
import chancadoraRodillosImage from "assets/img/chancadora.jpg";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Footer from "components/Footer/Footer.js";
import './ChancadoraQuijada.css';

function ChancadoraRodillos() {
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
          <img src={chancadoraRodillosImage} alt="Chancadora de Rodillos" />

          {/* Hover item 1 */}
          <div className="hover-item" style={{ top: '30%', left: '20%' }} onClick={() => handleTabClick('info')}>
            <svg className="hover-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.6 36h4.8V21.6h-4.8V36ZM24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0Zm0 43.2C13.44 43.2 4.8 34.56 4.8 24 4.8 13.44 13.44 4.8 24 4.8c10.56 0 19.2 8.64 19.2 19.2 0 10.56-8.64 19.2-19.2 19.2Zm-2.4-26.4h4.8V12h-4.8v4.8Z" fill="#fff" />
            </svg>
            <div className="hover-text">
              <h4>Información</h4>
              <p>La chancadora de rodillos es un equipo de trituración que utiliza dos rodillos giratorios para comprimir y romper el material.</p>
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
                <li>Rodillos</li>
                <li>Rodamientos</li>
                <li>Motor</li>
                <li>Fajas</li>
                <li>Chasis</li>
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
                <li>Revisión de rodillos</li>
                <li>Lubricación de rodamientos</li>
                <li>Inspección y tensado de fajas</li>
                <li>Mantenimiento del motor</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Div con texto adicional */}
        <div className="additional-text">
            <h3>Información</h3>
            <p>
              La planta piloto de procesamiento de minerales de TECSUP cuenta con una chancadora de rodillos, que es fundamental en la etapa de trituración secundaria del mineral. Esta chancadora se encarga de reducir aún más el tamaño de las partículas del mineral después de la trituración primaria, facilitando así su posterior procesamiento en las siguientes etapas.
            </p>
            <h4>Capacidad de la Chancadora de Rodillos</h4>
            <p>
              La chancadora de rodillos instalada en la planta piloto tiene una capacidad nominal de 30 kg/h. Sin embargo, debido a limitaciones en la capacidad de la zaranda y las fajas transportadoras, la alimentación real de la chancadora se ha restringido a 15 kg/h. Este ajuste asegura que el sistema opere de manera eficiente sin sobrecargar los componentes subsiguientes.
            </p>
            <h4>Consideraciones Operativas</h4>
            <ul>
              <li>Se debe monitorizar constantemente la tasa de alimentación desde la tolva, asegurando que no exceda los 15 kg/h.</li>
              <li>Es fundamental realizar un mantenimiento regular tanto de la tolva como de la chancadora, así como de las zarandas y fajas transportadoras, para evitar interrupciones en el proceso y asegurar un funcionamiento óptimo.</li>
              <li>La calibración de la chancadora debe realizarse periódicamente para asegurar que la dimensión de salida del material triturado se mantenga dentro de los parámetros deseados.</li>
            </ul>
          </div>

      </div>
      <Footer />
    </>
  );
}

export default ChancadoraRodillos;
