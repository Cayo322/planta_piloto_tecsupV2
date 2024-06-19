import React from "react";
import { Link } from "react-router-dom";
import { Card, Table, Container, Row, Col } from "react-bootstrap";

function EquipoChancado() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Equipos de Chancado</Card.Title>
                <p className="card-category">Aquí se muestran los equipos en orden A-Z</p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Nombre</th>
                      <th className="border-0">Área</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td><Link to="/equipo/chancadora-quijada">CHANCADORA DE QUIJADA</Link></td>
                      <td>CHANCADO</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td><Link to="/equipo/zaranda-vibratoria">ZARANDA VIBRATORIA</Link></td>
                      <td>CHANCADO</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td><Link to="/equipo/chancadora-rodillos">CHANCADORA DE RODILLOS</Link></td>
                      <td>CHANCADO</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td><Link to="/equipo/faja-sacrificio">FAJA TRANSPORTADORA N°1-SACRIFICIO</Link></td>
                      <td>CHANCADO</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td><Link to="/equipo/faja-transportadora">FAJA TRANSPORTADORA</Link></td>
                      <td>CHANCADO</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td><Link to="/equipo/faja-transportadora-2">FAJA TRANSPORTADORA</Link></td>
                      <td>CHANCADO</td>
                    </tr>
                    {/* Continúa con el resto de los equipos */}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default EquipoChancado;
