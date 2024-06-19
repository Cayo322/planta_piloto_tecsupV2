import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import epp from "assets/img/epp.png"; // Asegúrate de que la ruta a la imagen es correcta
import 'assets/css/Typography.css';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import seguridad from "assets/img/seguridad.jpg";
import logo from "assets/img/logo.png";
import tec from "assets/img/tec.png";
import ats from "assets/docs/seguriad.pdf";

function Typography() {
  const [selectedSection, setSelectedSection] = useState("seguridad-section");
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const handleSectionChange = (event) => {
    const section = event.target.value;
    setSelectedSection(section);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    
  };

  return (
    <Container fluid>
      <Row>
   
        <Col>
        <div className="pdf-container">
            <div className="pdf-wrapper">
              <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js`}>
                <Viewer fileUrl={ats} plugins={[defaultLayoutPluginInstance]} />
              </Worker>
            </div>
          </div>
          <div id="seguridad-section" className="image-containerr">
            <div className="overlay-text">
              <p>PREPARECE Y PREVENGA EN LUGAR DE REPARAR Y ARREPENTIRCE</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="top">
            <div className="container-top">
              <div className="column left">
                <div className="contentt">
                  <h2 className="title2">DESARROLLO SOSTENIBLE</h2>
                </div>
              </div>
              <div className="column">
                <div className="contentt">
                  <h2 className="title">SEGURIDAD Y SALUD</h2>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="m-0 mt-4 content-section">
        <Col xs={12} md={4} className="text-center">
          <img
            src={seguridad}
            alt="Logo"
            className="img-fluid animate__animated animate__slideInLeft"
          />
        </Col>
        <Col xs={12} md={8} className="text-container animate__animated animate__slideInRight">
          <h2>ASPECTOS GENERALES</h2>
          <p>
          La concentración de minerales abarca varios procesos que se llevan a cabo de manera secuencial. 
          Primero, se realiza la conminución, que consiste en el chancado y la molienda del mineral extraído, 
          reduciendo el tamaño de las partículas para facilitar los procesos posteriores. Luego, se realiza la flotación, 
          donde se utilizan reactivos químicos para separar el mineral valioso (mena) de la roca sin valor (ganga), basándose 
          en las propiedades físicas y químicas de los diferentes materiales. Una vez separada la mena, esta pasa al espesamiento, 
          donde se recupera una gran parte del agua utilizada en el proceso anterior. Posteriormente, el material espesado 
          pasa al filtrado, eliminando aún más el contenido de agua. Finalmente, el concentrado de mineral se somete al secado, 
          con el objetivo de reducir su contenido de agua a un nivel óptimo, generalmente entre 8% y 10%.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Typography;
