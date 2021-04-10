import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleDDMenu, setToggleDDMenu] = useState(false);

    
    useEffect(() => {
        if (!toggleMenu) setToggleDDMenu(false);
    }, [toggleMenu]);

    return (
        <header className={ !toggleMenu ? 'Header' : 'Header Header__navbar-show'}>
            <div className="Header__holder container">
                <Link className="Header__brand-name" to="/početna">Vrbov Prut</Link>
                <div className="Header__hambMenu" onClick={() => setToggleMenu(!toggleMenu)}>
                    <div className="Header__hambMenu__item"></div>
                    <div className="Header__hambMenu__item"></div>
                    <div className="Header__hambMenu__item"></div>
                </div>
                <nav className={!toggleMenu ? 'Navbar' : 'Navbar__show' }>
                    <ul className="Navbar__list" >
                        <li className="Navbar__list-item">
                            <NavLink activeClassName="Navbar__link__active" onClick={() => setToggleMenu(false)} to="/početna" className="Navbar__link">Početna</NavLink></li>
                        <li className="Navbar__list-item">
                            <NavLink activeClassName="Navbar__link__active" onClick={() => setToggleMenu(false)} to="/o-nama" className="Navbar__link">O Nama</NavLink>
                        </li>
                        <li className="Navbar__list-item Navbar__dropdown">
                            <div onClick={() => setToggleDDMenu(!toggleDDMenu)} className={toggleDDMenu ? "Navbar__link Navbar__link__active" : "Navbar__link"}>Proizvodi</div>
                            <span className={!toggleDDMenu ? 'Navbar__dropdown__marker-1' : 'Navbar__dropdown__marker-2'}></span>
                            <ul className={!toggleDDMenu ? 'Navbar__dropdown__list' : 'Navbar__dropdown__list Navbar__dropdown__list-show' }>
                                <li className="Navbar__list-item">
                                    <NavLink activeClassName="Navbar__link__active" onClick={() => {setToggleMenu(false); setToggleDDMenu(false)}} to="/proizvodi/korpe" className="Navbar__link">Korpe</NavLink>
                                </li>
                                <li className="Navbar__list-item">
                                    <NavLink activeClassName="Navbar__link__active" onClick={() => {setToggleMenu(false); setToggleDDMenu(false)}} to="/proizvodi/baloni" className="Navbar__link">Baloni</NavLink>
                                </li>
                                <li className="Navbar__list-item">
                                    <NavLink activeClassName="Navbar__link__active" onClick={() => {setToggleMenu(false); setToggleDDMenu(false)}} to="/proizvodi/flaše" className="Navbar__link">Flaše</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="Navbar__list-item">
                            <NavLink activeClassName="Navbar__link__active" onClick={() => setToggleMenu(false)} to="/kontakt" className="Navbar__link">Kontakt</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
