import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
        <footer className="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="social-icon">
          <li className="social-icon__item"><Link className="social-icon__link" to="#">
              <ion-icon name="logo-facebook"></ion-icon>
            </Link></li>
          <li className="social-icon__item"><Link className="social-icon__link" to="#">
              <ion-icon name="logo-twitter"></ion-icon>
            </Link></li>
          <li className="social-icon__item"><Link className="social-icon__link" to="#">
              <ion-icon name="logo-linkedin"></ion-icon>
            </Link></li>
          <li className="social-icon__item"><Link className="social-icon__link" to="#">
              <ion-icon name="logo-instagram"></ion-icon>
            </Link></li>
        </ul>
        <ul className="menu">
          <li className="menu__item"><Link className="menu__link" to="/">Home</Link></li>
          <li className="menu__item"><Link className="menu__link" to="/about">About</Link></li>
          <li className="menu__item"><Link className="menu__link" to="#">Services</Link></li>
          <li className="menu__item"><Link className="menu__link" to="/user">Team</Link></li>
          <li className="menu__item"><Link className="menu__link" to="/contact">Contact Us</Link></li>
    
        </ul>
        <p>&copy;2021 Nadine Coelho | All Rights Reserved</p>
      </footer>
        </div>
    );
};

export default Footer;