import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleDDMenu, setToggleDDMenu] = useState(false);

    useEffect(() => {
        if (!toggleMenu) setToggleDDMenu(false);
    }, [toggleMenu])

    

    return (
        <header className={ !toggleMenu ? 'Header' : 'Header Header__navbar-show'}>
            <div className="Header__holder container">
                <Link className="Header__brand-name" to="/">Vrbov Prut</Link>
                <div className="Header__hambMenu" onClick={() => setToggleMenu(!toggleMenu)}>
                    <div className="Header__hambMenu__item"></div>
                    <div className="Header__hambMenu__item"></div>
                    <div className="Header__hambMenu__item"></div>
                </div>
                <nav className={!toggleMenu ? 'Navbar' : 'Navbar__show' }>
                    <ul className="Navbar__list" >
                        <li className="Navbar__list-item">
                            <NavLink onClick={() => setToggleMenu(false)} to="/početna" className="Navbar__link">Početna</NavLink></li>
                        <li className="Navbar__list-item">
                            <NavLink onClick={() => setToggleMenu(false)} to="/test" className="Navbar__link">O Nama</NavLink>
                        </li>
                        <li className="Navbar__list-item Navbar__dropdown">
                            <NavLink onClick={() => setToggleDDMenu(!toggleDDMenu)} to="" className="Navbar__link">Proizvodi</NavLink>
                            <span className={!toggleDDMenu ? 'Navbar__dropdown__marker-1' : 'Navbar__dropdown__marker-2'}></span>
                            <ul className={!toggleDDMenu ? 'Navbar__dropdown__list' : 'Navbar__dropdown__list Navbar__dropdown__list-show' }>
                                <li className="Navbar__list-item">
                                    <NavLink onClick={() => setToggleMenu(false)} to="/" className="Navbar__link">Korpe</NavLink>
                                </li>
                                <li className="Navbar__list-item">
                                    <NavLink onClick={() => setToggleMenu(false)} to="/" className="Navbar__link">Baloni</NavLink>
                                </li>
                                <li className="Navbar__list-item">
                                    <NavLink onClick={() => setToggleMenu(false)} to="/" className="Navbar__link">Flase</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="Navbar__list-item">
                            <NavLink onClick={() => setToggleMenu(false)} to="/" className="Navbar__link">Kontakt</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
