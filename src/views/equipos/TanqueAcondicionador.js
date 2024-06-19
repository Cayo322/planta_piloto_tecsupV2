import React, { useState } from "react";
import tanqueAcondicionadorImage from "assets/img/tanqueAcondicionador.jpg";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Footer from "components/Footer/Footer.js";
import './ChancadoraQuijada.css';

function TanqueAcondicionador() {
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
          <img src={tanqueAcondicionadorImage} alt="Tanque Acondicionador" />

          {/* Hover item 1 */}
          <div className="hover-item" style={{ top: '30%', left: '20%' }} onClick={() => handleTabClick('info')}>
            <svg className="hover-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.6 36h4.8V21.6h-4.8V36ZM24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0Zm0 43.2C13.44 43.2 4.8 34.56 4.8 24 4.8 13.44 13.44 4.8 24 4.8c10.56 0 19.2 8.64 19.2 19.2 0 10.56-8.64 19.2-19.2 19.2Zm-2.4-26.4h4.8V12h-4.8v4.8Z" fill="#fff" />
            </svg>
            <div className="hover-text">
              <h4>Información</h4>
              <p>El tanque acondicionador se utiliza para preparar y acondicionar las pulpas minerales antes del proceso de flotación, asegurando una adecuada mezcla y homogeneización de los reactivos.</p>
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
                <li>Impulsor</li>
                <li>Baffle</li>
                <li>Eje</li>
                <li>Motor</li>
                <li>Tanque</li>
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
                <li>Inspección de desgastes en el impulsor</li>
                <li>Limpieza del tanque y baffles</li>
                <li>Verificación de alineación del eje</li>
                <li>Reemplazo de partes desgastadas</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Div con texto adicional */}
        <div className="additional-text">
          <h3>Información</h3>
          <p>
            La planta piloto de procesamiento de minerales de TECSUP cuenta con un tanque acondicionador que es fundamental para preparar y acondicionar las pulpas minerales antes del proceso de flotación. Este equipo asegura una adecuada mezcla y homogeneización de los reactivos.
          </p>
          <h4>Capacidad del Tanque Acondicionador</h4>
          <p>
            El tanque acondicionador instalado en la planta piloto tiene una capacidad nominal de 200 litros. Este equipo permite una preparación óptima de las pulpas minerales para los procesos subsiguientes.
          </p>
          <h4>Consideraciones Operativas</h4>
          <ul>
            <li>Se debe monitorizar constantemente la velocidad del impulsor para asegurar una mezcla eficiente.</li>
            <li>Es fundamental realizar un mantenimiento regular para evitar obstrucciones y desgastes en las partes internas.</li>
            <li>La calibración del tanque acondicionador debe realizarse periódicamente para asegurar que la mezcla de reactivos se mantenga dentro de los parámetros deseados.</li>
          </ul>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default TanqueAcondicionador;
