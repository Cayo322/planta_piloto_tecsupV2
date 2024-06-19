import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import manual from "assets/docs/manual.pdf"; // Asegúrate de que la ruta al PDF es correcta
import "assets/css/Epp.css";

function Mantenimiento() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="gaaa text-center">
            <h2>Revisa el manual de mantenimiento de la planta piloto</h2>
            
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="pdf-container">
            <div className="pdf-wrapper">
              <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js`}>
                <Viewer fileUrl={manual} plugins={[defaultLayoutPluginInstance]} />
              </Worker>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Mantenimiento;