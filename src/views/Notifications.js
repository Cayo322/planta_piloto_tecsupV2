import React from 'react';
import  "assets/css/Notifications.css";

function Notifications() {
  return (
    <div className="notifications-page">
      <h1 className="h1-notifications">Nosotros</h1>
      <p>Somos un equipo apasionado por la innovación y la tecnología, dedicado a compartir información relevante sobre la planta procesadora.</p>
      <div className="team-container">
        <h2>Equipo</h2>
        <ul>
          <li>
            <img src="https://media-lim1-1.cdn.whatsapp.net/v/t61.24694-24/427448037_1628313774630823_3181444768720290477_n.jpg?ccb=11-4&oh=01_Q5AaIEktskMVFn1YRc0fRicip4v-L-XWhN8fpymcMZAEGe92&oe=667F3FC0&_nc_sid=e6ed6c&_nc_cat=101" alt="Abel" />
            <h3>Ccopa Barrios, Abel Flavio</h3>
            <p>6to ciclo-C24</p>
          </li>
          <li>
            <img src="https://media-lim1-1.cdn.whatsapp.net/v/t61.24694-24/419062471_343823002044062_5999420242615460474_n.jpg?ccb=11-4&oh=01_Q5AaIO7bgaXkUDPrEfLGHu31JtQSZBgqGX6BXrpkRq3s55JW&oe=666E2706&_nc_sid=e6ed6c&_nc_cat=105" alt="Cayo" />
            <h3>Phocco Machacca, Cayo Alberto</h3>
            <p>6to ciclo-C24</p>
          </li>
          <li>
            <img src="https://media-lim1-1.cdn.whatsapp.net/v/t61.24694-24/427987834_797725419093493_6562184216703744535_n.jpg?ccb=11-4&oh=01_Q5AaIIhJx_aALXpvaGHsE1ajWASea1bi2avdhMwx9Bx_bC_6&oe=667F6EE5&_nc_sid=e6ed6c&_nc_cat=107" alt="Karen" />
            <h3>Ramos Rodriguez, Karen Patricia Kristel</h3>
            <p>6to ciclo-C24</p>
          </li>
        </ul>
        <ul>
          <li>
            <img src="https://media-lim1-1.cdn.whatsapp.net/v/t61.24694-24/427448037_1628313774630823_3181444768720290477_n.jpg?ccb=11-4&oh=01_Q5AaIEktskMVFn1YRc0fRicip4v-L-XWhN8fpymcMZAEGe92&oe=667F3FC0&_nc_sid=e6ed6c&_nc_cat=101" alt="Abel" />
            <h3>Diaz Chambi, Eddy Giancarlo</h3>
            <p>6to ciclo-C19</p>
          </li>
          <li>
            <img src="https://media-lim1-1.cdn.whatsapp.net/v/t61.24694-24/419062471_343823002044062_5999420242615460474_n.jpg?ccb=11-4&oh=01_Q5AaIO7bgaXkUDPrEfLGHu31JtQSZBgqGX6BXrpkRq3s55JW&oe=666E2706&_nc_sid=e6ed6c&_nc_cat=105" alt="Cayo" />
            <h3>Suclle Ramos, Cristhian Carlos</h3>
            <p>6to ciclo-C19</p>
          </li>
          <li>
            <img src="https://media-lim1-1.cdn.whatsapp.net/v/t61.24694-24/427987834_797725419093493_6562184216703744535_n.jpg?ccb=11-4&oh=01_Q5AaIIhJx_aALXpvaGHsE1ajWASea1bi2avdhMwx9Bx_bC_6&oe=667F6EE5&_nc_sid=e6ed6c&_nc_cat=107" alt="Karen" />
            <h3>Umiyauri Magaño, Katia Stefany</h3>
            <p>6to ciclo-C19</p>
          </li>
        </ul>
      </div>
      <div className="mision-container">
        <h2>Misión</h2>
        <p>Nuestra misión es crear tecnologías que mejoren la vida de las personas y contribuyan a un futuro más sostenible. Creemos que la información es poder, y por eso nos esforzamos por proporcionarla de manera dinámica y accesible a todos. Nuestro objetivo es generar soluciones innovadoras que permitan a las personas tomar decisiones informadas y mejorar su calidad de vida.</p>
      </div>
      <div className="valores-container">
        <h2>Valores</h2>
        <ul>
          <li>
            <i className="fas fa-heart"></i>
            <p>Pasión por la innovación</p>
          </li>
          <li>
            <i className="fas fa-users"></i>
            <p>Trabajo en equipo</p>
          </li>
          <li>
            <i className="fas fa-recycle"></i>
            <p>Sostenibilidad</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Notifications;