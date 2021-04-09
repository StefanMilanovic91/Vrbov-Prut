import React, { Fragment, useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';


import { ModalContext } from './ContextAPIs/ModalContext';

import Header from './components/UI/Header/Header';
import Footer from './components/UI/Footer/Footer';
import Modal from './components/UI/Modal/Modal';

import Home from './components/pages/Home/Home';
import AboutUs from './components/pages/AboutUs/AboutUs';
import Products from './components/pages/Products/Products';
import Contact from './components/pages/Contact/Contact'; 


const App = () => {

    const { showModal } = useContext(ModalContext);
    
    return (
        <Fragment>

            <Header />
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/početna" />} />
                <Route exact path="/početna" component={Home} />
                <Route exact path="/o-nama" component={AboutUs} />
                <Route exact path="/kontakt" component={Contact} />
                <Route exact path="/proizvodi/:id" component={Products} />
            </Switch>
            <Footer />

            {showModal && <Modal />}

        </Fragment>
    )
}

export default App
