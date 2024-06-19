import React, { useState } from "react";
import celdasScavengerImage from "assets/img/celdasScavenger.jpeg";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Footer from "components/Footer/Footer.js";
import './ChancadoraQuijada.css';

function CeldasScavenger() {
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
          <img src={celdasScavengerImage} alt="Celdas Scavenger" />

          {/* Hover item 1 */}
          <div className="hover-item" style={{ top: '30%', left: '20%' }} onClick={() => handleTabClick('info')}>
            <svg className="hover-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.6 36h4.8V21.6h-4.8V36ZM24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0Zm0 43.2C13.44 43.2 4.8 34.56 4.8 24 4.8 13.44 13.44 4.8 24 4.8c10.56 0 19.2 8.64 19.2 19.2 0 10.56-8.64 19.2-19.2 19.2Zm-2.4-26.4h4.8V12h-4.8v4.8Z" fill="#fff" />
            </svg>
            <div className="hover-text">
              <h4>Información</h4>
              <p>Las celdas scavenger se utilizan en la etapa de limpieza en el proceso de flotación para recuperar minerales valiosos que no fueron capturados en las etapas anteriores.</p>
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
                <li>Celda de flotación</li>
                <li>Rotor</li>
                <li>Estator</li>
                <li>Motor</li>
                <li>Sistema de aireación</li>
                <li>Tuberías de alimentación y descarga</li>
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
                <li>Inspección y limpieza del rotor y estator</li>
                <li>Verificación del sistema de aireación</li>
                <li>Lubricación del motor</li>
                <li>Reemplazo de partes desgastadas</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Div con texto adicional */}
        <div className="additional-text">
          <h3>Información</h3>
          <p>
            La planta piloto de procesamiento de minerales de TECSUP cuenta con celdas scavenger que son esenciales para la recuperación de minerales valiosos que no fueron capturados en las etapas iniciales de flotación. Estas celdas mejoran la eficiencia global del proceso de concentración.
          </p>
          <h4>Capacidad de las Celdas Scavenger</h4>
          <p>
            Las celdas scavenger instaladas en la planta piloto tienen una capacidad nominal de 100 litros por celda. Este equipo permite una recuperación eficiente de los minerales en la etapa de limpieza.
          </p>
          <h4>Consideraciones Operativas</h4>
          <ul>
            <li>Se debe monitorizar constantemente la tasa de alimentación y la aireación para asegurar una flotación eficiente.</li>
            <li>Es fundamental realizar un mantenimiento regular para evitar obstrucciones y desgastes en las partes internas.</li>
            <li>La calibración de las celdas scavenger debe realizarse periódicamente para asegurar que la flotación se mantenga dentro de los parámetros deseados.</li>
          </ul>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default CeldasScavenger;
