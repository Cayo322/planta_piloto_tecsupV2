import React, { useState } from "react";
import bombaDeColasImage from "assets/img/bombaDeColas.jpeg";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Footer from "components/Footer/Footer.js";
import './ChancadoraQuijada.css';

function BombaColas() {
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
          <img src={bombaDeColasImage} alt="Bomba de Colas" />

          {/* Hover item 1 */}
          <div className="hover-item" style={{ top: '30%', left: '20%' }} onClick={() => handleTabClick('info')}>
            <svg className="hover-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.6 36h4.8V21.6h-4.8V36ZM24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0Zm0 43.2C13.44 43.2 4.8 34.56 4.8 24 4.8 13.44 13.44 4.8 24 4.8c10.56 0 19.2 8.64 19.2 19.2 0 10.56-8.64 19.2-19.2 19.2Zm-2.4-26.4h4.8V12h-4.8v4.8Z" fill="#fff" />
            </svg>
            <div className="hover-text">
              <h4>Información</h4>
              <p>La bomba de colas es utilizada para transportar los residuos sólidos y líquidos después del proceso de separación de minerales.</p>
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
                <li>Voluta</li>
                <li>Eje</li>
                <li>Sellos</li>
                <li>Motor</li>
                <li>Tuberías de succión y descarga</li>
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
                <li>Inspección y limpieza del impulsor</li>
                <li>Verificación de sellos</li>
                <li>Lubricación de rodamientos</li>
                <li>Reemplazo de partes desgastadas</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Div con texto adicional */}
        <div className="additional-text">
          <h3>Información</h3>
          <p>
            La planta piloto de procesamiento de minerales de TECSUP cuenta con bombas de colas que son esenciales para el manejo eficiente de los residuos generados durante el procesamiento de minerales. Estas bombas aseguran un transporte seguro y efectivo de los lodos residuales hacia las áreas de disposición.
          </p>
          <h4>Capacidad de la Bomba de Colas</h4>
          <p>
            La bomba de colas instalada en la planta piloto tiene una capacidad nominal de 800 litros por hora, permitiendo el manejo eficiente de grandes volúmenes de residuos.
          </p>
          <h4>Consideraciones Operativas</h4>
          <ul>
            <li>Monitorizar constantemente la tasa de alimentación para evitar sobrecargas.</li>
            <li>Realizar mantenimiento regular para asegurar un funcionamiento óptimo y prolongar la vida útil del equipo.</li>
            <li>Verificar periódicamente el estado de los sellos y rodamientos para evitar fugas y fallos.</li>
          </ul>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default BombaColas;
