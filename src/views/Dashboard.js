import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import foto1 from "assets/img/exterior.jpg";
import foto2 from "assets/img/plantapi.jpg";
import foto3 from "assets/img/flotacioon.jpg";
import foto4 from "assets/img/foto4.jpg";
import logo from "assets/img/minetec.png";
import 'animate.css';
import  "assets/css/Dashboard.css";

function Dashboard() {
  return (
    <Container fluid className="p-0 dashboard-container">
      <Row className="m-0">
        <Col className="p-0">
          <Carousel data-bs-theme="dark" fade controls={false}>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src={foto1}
                alt="First slide"
              />
              <Carousel.Caption className="gaa">
                <h5>BIENVENIDOS A LA PLANTA PILOTO TECSUP</h5>
              </Carousel.Caption>
              <Carousel.Caption className="animated-caption animate__animated animate__fadeInUp">
            
                <h5>Donde convergen la ciencia y la ingeniería</h5>
                <p>convertimos minerales en recursos valiosos que impulsan el avance tecnológico y económico, uniendo el poder de la metalurgia con la visión del futuro.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src={foto2}
                alt="Second slide"
              />
              <Carousel.Caption className="animated-caption animate__animated animate__fadeInUp">
                <h5>Desbloqueamos el potencial del futuro</h5>
                <p>extrayendo recursos que impulsan el progreso y la sostenibilidad global con cada paso que damos.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src={foto3}
                alt="Third slide"
              />
              <Carousel.Caption className="animated-caption animate__animated animate__fadeInUp">
                <h5>Cada proceso es un reflejo de la habilidad humana</h5>
                <p> para transformar elementos en materiales que construyen el mañana, uniendo conocimiento, precisión y visión hacia un horizonte de innovación sin límites.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src={foto4}
                alt="Fourth slide"
              />
              <Carousel.Caption className="animated-caption animate__animated animate__fadeInUp">
                <h5>Fourth slide label</h5>
                <p>Vestibulum dapibus, dui at scelerisque congue.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      <Row className="m-0 mt-4 content-section">
        <Col xs={12} md={4} className="text-center">
          <img
            src={logo}
            alt="Logo"
            className="img-fluid animate__animated animate__slideInLeft"
          />
        </Col>
        <Col xs={12} md={8} className="text-container animate__animated animate__slideInRight">
          <h2>INTRODUCCION</h2>
          <p>
          La planta piloto de procesamiento de minerales de TECSUP es una instalación diseñada a escala que permite a los estudiantes de la carrera de Operaciones de Plantas de Procesamiento de Minerales adquirir experiencia práctica en el manejo y control de las operaciones involucradas en el beneficio de minerales. Esta planta piloto, que es una réplica en menora escala de una planta concentradora real.
          </p>
        </Col>
      </Row>

      <Row className="m-0 mt-4 background-section" >
        <Col xs={12} className="d-flex justify-content-center align-items-center">
          <div className="overlay-content">
            <h2>DESCRIPCION GENERAL</h2>
            <p>
            La concentración de minerales abarca varios procesos los cuales van desde la conminución: Chancado-Molienda ,donde se reduce el mineral room para la siguiente etapa, el cual es Flotación donde por medio de reactivos se separa la mena de la ganga, una vez realizado ello la carga valiosa llega Espesamiento donde se elimina gran parte el agua, la cual se sigue eliminando en Filtrado por medio de prensas, hasta llegar a Secado donde se procura tener de un 8-10% de H2O para evitar levantamiento de polvo (lamas).
            </p>
          </div>
        </Col>
      </Row>



    </Container>
  );
}

export default Dashboard;
