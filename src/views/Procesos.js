import React, { useState, useEffect } from "react";
import 'assets/css/Procesos.css';
import Achancado from "assets/img/Achancado.jpg";
import Amolienda from "assets/img/Amolienda.jpg";
import Aflotacion from "assets/img/Aflotacion.jpg";
import Aespesadomiento from "assets/img/Aespesamiento.jpg"

import procesos from "assets/img/tec2.png";
import "animate.css/animate.min.css";

import { Link } from 'react-router-dom';

function Procesos() {
  const [activeTab, setActiveTab] = useState('London');

  const handleTabClick = (city) => {
    setActiveTab(city);
  };

  useEffect(() => {
    document.getElementById("defaultOpen").click();
  }, []);

  return (
    <div className="animate__animated animate__backInRight" style={{ position: 'elative' }}>
      <div className="imagecontainer">
        <img src={procesos} alt="procesos" className="animated-image animate__animated animate__fadeInRightBig" />
        <div className="overlay">
          <div>
            <h1>PROCESOS</h1>
            <p>En la planta piloto de TECSUP, el proceso comienza con el chancado del mineral en una chancadora de quijada. Luego, el mineral triturado alimenta un molino de bolas, cuya pulpa se bombea al hidrociclón. El overflow va a flotación y el underflow regresa a molienda. En flotación, se añaden reactivos y se recoge el concentrado en un cajón de espuma. La espuma de concentrado se filtra para separar el agua del sólido. Finalmente, el relave se espesa para recuperar agua y el lodo se descarga al ducto final.</p>
          </div>
        </div>
        </div>
      <div className="tab" >
        <button className={`tablinks ${activeTab === 'Área de Chancado' ? 'active' : ''}`} onClick={() => handleTabClick('Área de Chancado')} id="defaultOpen">Área de Chancado</button>
        <button className={`tablinks ${activeTab === 'Área de Molienda' ? 'active' : ''}`} onClick={() => handleTabClick('Área de Molienda')}>Área de Molienda</button>
        <button className={`tablinks ${activeTab === 'Área de Flotación' ? 'active' : ''}`} onClick={() => handleTabClick('Área de Flotación')}>Área de Flotación</button>
        <button className={`tablinks ${activeTab === 'Área de Relaves y Concentrados' ? 'active' : ''}`} onClick={() => handleTabClick('Área de Relaves y Concentrados')}>Área de Relaves y Concentrados</button>
      </div>

      <div id="Área de Chancado" className="tabcontent" style={{ display: activeTab === 'Área de Chancado' ? 'block' : 'none'}} >
        <h3>Área de Chancado:</h3>
        <img src={Achancado} alt="Achancado" className={`animated-image animate__animated animate__fadeInRightBig`} />
        <p>El área de chancado, también conocida como planta de chancado o trituración, es una sección fundamental dentro de la industria minera y de procesamiento de agregados. Su función principal es reducir el tamaño de las rocas extraídas a un tamaño adecuado para las siguientes etapas del proceso, ya sea la molienda, la concentración o la clasificación.</p>
        <h3>Equipos:</h3>
        <table>
          <tr>
            <Link to="/equipo/chancadora-quijada">
            <div id="sixth" class="buttonBox" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCX7hBt6WABfNnlbemx_bx0pBEh5upC_aYpw&s")',
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundRepeat: 'no-repeat',
            }}>
              <button>Chancadora de Quijada</button>
              <div class="border"></div>
              <div class="border"></div>
              <div class="border"></div>
              <div class="border"></div>      
            </div>
            </Link>
            <td><p>Rompe rocas y minerales en pedazos más pequeños utilizando dos mandíbulas que se abren y cierran.</p></td> 
          </tr>
          <tr>
          <Link to="/equipo/zaranda-vibratoria">
            <div id="sixth" class="buttonBox"  style={{ backgroundImage: 'url("https://m.jinpengmineria.com/Public/upload/2017-05-06/590d3dc382d5b.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}>
              <button>Zaranda Vibratoria</button>
              <div class="border"></div>
              <div class="border"></div>
              <div class="border"></div>
              <div class="border"></div>      
            </div>
            </Link>
            <td><p>Separa materiales de diferentes tamaños por vibración.</p></td> 
          </tr>
          <tr>
          <Link to="/equipo/chancadora-rodillos">
            <div id="sixth" class="buttonBox"  style={{ backgroundImage: 'url("https://www.911metallurgist.com/equipment/wp-content/uploads/2020/11/Roll-Crusher-1-1.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}>
              <button>Chancadora de Rodillos</button>
              <div class="border"></div>
              <div class="border"></div>
              <div class="border"></div>
              <div class="border"></div>      
            </div>
            </Link>
            <td><p>Tritura materiales mediante dos rodillos giratorios que presionan entre sí.</p></td> 
          </tr>
          <tr>
          <Link to="/equipo/faja-transportadora">
            <div id="sixth" class="buttonBox"  style={{ backgroundImage: 'url("https://cdnespecial.elcomercio.pe/wp-content/uploads/sites/28/2020/10/Abridora-1.jpg?x59916")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}>
              <button>Faja Transportadora</button>
              <div class="border"></div>
              <div class="border"></div>
              <div class="border"></div>
              <div class="border"></div>      
            </div>
            </Link>
            <td><p>Transporta materiales a granel sobre una banda móvil.</p></td> 
          </tr>
        </table>
      </div>

      <div id="Área de Molienda" className="tabcontent" style={{ display: activeTab === 'Área de Molienda' ? 'block' : 'none' }}>
        <h3>Área de Molienda:</h3>
        <img src={Amolienda} alt="Amolienda" className={`animated-image animate__animated animate__fadeInRightBig`} />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h3>Equipos:</h3>
        <table>
          <tr>
          <Link to="/equipo/tolva-finos">
            <div id="sixth" class="buttonBox" style={{ backgroundImage: 'url("https://irontec.equipment/wp-content/uploads/2021/05/alimentador-ruedas-positivo.jpg")',
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundRepeat: 'no-repeat',
            }}>
              <button>Tolva de Finos</button>
              <div class="border"></div>
              <div class="border"></div>
              <div class="border"></div>
              <div class="border"></div>      
            </div>
            </Link>
            <td><p>Almacena material fino ya triturado para su posterior procesamiento.</p></td> 
          </tr>

          <tr>
          <Link to="/equipo/molino-bolas">
            <div id="sixth" class="buttonBox" style={{ backgroundImage: 'url("https://gcpat.mx/sites/default/files/media_image_upload/ball_mill_plant%20900X600.jpg")',
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundRepeat: 'no-repeat',
            }}>
              <button>Molino de Bolas</button>
              <div class="border"></div>
              <div class="border"></div>
              <div class="border"></div>
              <div class="border"></div>      
            </div>
            </Link>
            <td><p>Tritura y pulveriza materiales mediante bolas de molienda que giran en un tambor cilíndrico.</p></td> 
          </tr>

          <tr>
          <Link to="/equipo/bomba-lodos">
            <div id="sixth" class="buttonBox" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc8LMyyDMlML_ZtTfVcxdx78AUeJTwNxWApg&s")',
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundRepeat: 'no-repeat',
            }}>
              <button>Bomba de Lodos</button>
              <div class="border"></div>
              <div class="border"></div>
              <div class="border"></div>
              <div class="border"></div>      
            </div>
            </Link>
            <td><p>Transporta mezclas de líquidos y sólidos (lodos) a través de tuberías.</p></td> 
          </tr>

          <tr>
          <Link to="/equipo/hidrociclon">
            <div id="sixth" class="buttonBox" style={{ backgroundImage: 'url("https://media.licdn.com/dms/image/C5612AQGtOBH-VxPhlw/article-cover_image-shrink_600_2000/0/1530497991392?e=2147483647&v=beta&t=oz-QBA6RcuTN_0jUuI_GAWZo7ZKWhQDr03pYsTz18XM")',
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundRepeat: 'no-repeat',
            }}>
              <button>Hidrociclón</button>
              <div class="border"></div>
              <div class="border"></div>
              <div class="border"></div>
              <div class="border"></div>      
            </div>
            </Link>
            <td><p>Separa partículas sólidas de diferentes tamaños en una suspensión líquida.</p></td> 
          </tr>
        </table>
      </div>

      <div id="Área de Flotación" className="tabcontent" style={{ display: activeTab === 'Área de Flotación' ? 'block' : 'none' }}>
        <h3>Área de Flotación:</h3>
        <img src={Aflotacion} alt="Aflotacion" className={`animated-image animate__animated animate__fadeInRightBig`} />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h3>Equipos:</h3>
        <table>
          <tr>
            <Link to="/equipo/tanque-acondicionador">
              <div id="sixth" class="buttonBox" style={{ backgroundImage: 'url("https://smatminerals.com/wp-content/uploads/2018/08/tanque2.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              }}>
                <button>Tanque Acondicionador</button>
                <div class="border"></div>
                <div class="border"></div>
                <div class="border"></div>
                <div class="border"></div>      
              </div>
              </Link>
            <td><p>Mezcla y prepara la pulpa mineral con agua, reactivos y agentes químicos antes de la flotación.</p></td> 
          </tr>

          <tr>
            <Link to="/equipo/celdas-rougher">
              <div id="sixth" class="buttonBox" style={{ backgroundImage: 'url("https://tecnologiaminera.com/imgPosts/1708468504p7d3HM5o.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              }}>
                <button>Celdas Rougher</button>
                <div class="border"></div>
                <div class="border"></div>
                <div class="border"></div>
                <div class="border"></div>      
              </div>
              </Link>
            <td><p>Separan los minerales valiosos de la ganga (material no deseado) en una flotación inicial.</p></td> 
          </tr>

          <tr>
            <Link to="/equipo/celdas-scavenger">
              <div id="sixth" class="buttonBox" style={{ backgroundImage: 'url("https://servingsa.com/images/services/celdasConvencionales-1.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              }}>
                <button>Celdas Scavenger</button>
                <div class="border"></div>
                <div class="border"></div>
                <div class="border"></div>
                <div class="border"></div>      
              </div>
              </Link>
            <td><p>Recuperan minerales valiosos que no se capturaron en las celdas rougher de la etapa anterior.</p></td> 
          </tr>

          <tr>
            <Link to="/equipo/celdas-cleaner">
              <div id="sixth" class="buttonBox" style={{ backgroundImage: 'url("https://www.mch.cl/wp-content/uploads/2022/08/2022_07_25_Celdas-de-flotaci%C3%B3n-DELKOR-BQR-de-nueva-generaci%C3%B3n-instaladas-en-una-mina-de-oro-en-Australia.-2-scaled.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              }}>
                <button>Celdas Cleaner</button>
                <div class="border"></div>
                <div class="border"></div>
                <div class="border"></div>
                <div class="border"></div>      
              </div>
              </Link>
            <td><p>Mejoran la ley (concentración) del concentrado mineral obtenido en las etapas anteriores.</p></td> 
          </tr>

          <tr>
            <Link to="/equipo/bomba-colas">
              <div id="sixth" class="buttonBox" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcP4JeuLEdI26EKX6sy6cd-wNRRwqzz4I-mA&s")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              }}>
                <button>Bomba De Colas</button>
                <div class="border"></div>
                <div class="border"></div>
                <div class="border"></div>
                <div class="border"></div>      
              </div>
              </Link>
            <td><p>Transporta los desechos de la flotación (colas) fuera del circuito de procesamiento.</p></td> 
          </tr>
        </table>
      </div>
      
      <div id="Área de Relaves y Concentrados" className="tabcontent" style={{ display: activeTab === 'Área de Relaves y Concentrados' ? 'block' : 'none' }}>
        <h3>Área de Relaves y Concentrados:</h3>
        <img src={Aespesadomiento} alt="Aespesadomiento" className={`animated-image animate__animated animate__fadeInRightBig`} />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h3>Equipos:</h3>
        <table>
          <tr>
            <Link to="/equipo/espesador-relave">
            <div id="sixth" class="buttonBox" style={{ backgroundImage: 'url("https://peru.angloamerican.com/~/media/Images/A/Anglo-American-Group-v5/Peru/modules/Publications/Quellaveco/El-Proyecto/Uno-de-los-espesadores-mas-grande/Quellaveco-EP-Uno-de-los-espesadores-mas-grandes-01.jpg?h=600&w=1200")',
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundRepeat: 'no-repeat',
            }}>
              <button>Espesador de Relave</button>
              <div class="border"></div>
              <div class="border"></div>
              <div class="border"></div>
              <div class="border"></div>      
            </div>
            </Link>
            <td><p>Separa los sólidos (relaves) del agua en una suspensión mediante la sedimentación.</p></td> 
          </tr>
          <tr>
          <Link to="/equipo/filtro-tambor">
            <div id="sixth" class="buttonBox"  style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9RZkI4kCU68HUDpDnk61nBEnEV1m1CQo5Aw&s")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}>
              <button>Filtro Tambor</button>
              <div class="border"></div>
              <div class="border"></div>
              <div class="border"></div>
              <div class="border"></div>      
            </div>
            </Link>
            <td><p> Separa los sólidos de un líquido mediante una torta formada sobre un tambor rotatorio.</p></td> 
          </tr>
        </table>
      </div>
      </div>
  );
}

export default Procesos;
