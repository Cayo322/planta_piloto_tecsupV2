import React, { useState } from "react";
import filtroTamborImage from "assets/img/filtrado.jpg";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Footer from "components/Footer/Footer.js";
import './ChancadoraQuijada.css';

function FiltroTambor() {
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
          <img src={filtroTamborImage} alt="Filtro Tambor" />

          {/* Hover item 1 */}
          <div className="hover-item" style={{ top: '30%', left: '20%' }} onClick={() => handleTabClick('info')}>
            <svg className="hover-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.6 36h4.8V21.6h-4.8V36ZM24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0Zm0 43.2C13.44 43.2 4.8 34.56 4.8 24 4.8 13.44 13.44 4.8 24 4.8c10.56 0 19.2 8.64 19.2 19.2 0 10.56-8.64 19.2-19.2 19.2Zm-2.4-26.4h4.8V12h-4.8v4.8Z" fill="#fff" />
            </svg>
            <div className="hover-text">
              <h4>Información</h4>
              <p>El filtro tambor es un equipo utilizado para la separación de sólidos y líquidos mediante un tambor giratorio con medios filtrantes.</p>
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
                <li>Tambor giratorio</li>
                <li>Medios filtrantes</li>
                <li>Bomba de vacío</li>
                <li>Raspador</li>
                <li>Tuberías y válvulas</li>
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
                <li>Inspección y limpieza del tambor y medios filtrantes</li>
                <li>Revisión y ajuste del raspador</li>
                <li>Lubricación del motor y reductor</li>
                <li>Monitoreo de la bomba de vacío y válvulas</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Div con texto adicional */}
        <div className="additional-text">
          <h3>Información</h3>
          <p>
            El filtro tambor en la planta piloto de procesamiento de minerales de TECSUP es esencial para la separación eficiente de sólidos y líquidos, facilitando el manejo y disposición de los residuos.
          </p>
          <h4>Capacidad del Filtro Tambor</h4>
          <p>
            El filtro tambor instalado tiene una capacidad nominal de 500 litros por hora, asegurando una alta eficiencia en la separación de sólidos y líquidos.
          </p>
          <h4>Consideraciones Operativas</h4>
          <ul>
            <li>Monitorizar la tasa de alimentación para evitar sobrecargas.</li>
            <li>Realizar mantenimientos regulares para asegurar el buen funcionamiento del equipo.</li>
            <li>Asegurar que los medios filtrantes estén limpios y sin obstrucciones.</li>
            <li>Controlar el vacío y las válvulas para una operación eficiente.</li>
          </ul>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default FiltroTambor;
