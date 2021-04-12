import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 mb-7 mb-md-0">
                        <div className="Footer__links">
                            <h3 className="second-title text-center mb-3">Proizvodi</h3>
                            <ul className="Footer__links-holder">
                                <li className="Navbar__list-item"><Link className="Navbar__link" to="/proizvodi/korpe"># Korpe</Link></li>
                                <li className="Navbar__list-item"><Link className="Navbar__link" to="/proizvodi/baloni"># Baloni</Link></li>
                                <li className="Navbar__list-item"><Link className="Navbar__link" to="/proizvodi/flaše"># Flaše</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mb-7 mb-md-0">
                        <div className="Footer__contacts">
                            <h3 className="second-title text-center mb-3">Kontakt</h3>
                            <div className="Footer__contacts-holder">
                                <ul className="Navbar__list flex-column">
                                    <li className="Navbar-item">063 / 814 - 68 - 29</li>
                                    <li className="Navbar-item">035 / 275 - 201</li>
                                    <li className="Navbar-item">vrbovprut035@gmail.com</li>
                                    <a href='http://www.facebook.com' target="blank" className="Navbar-item">Facebook</a>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
