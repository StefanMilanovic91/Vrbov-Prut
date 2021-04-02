import React, { Fragment } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

import { ProductProvider } from './ContextAPIs/ProductContext';

import Header from './components/UI/Header/Header';
import Footer from './components/UI/Footer/Footer';

import Home from './components/pages/Home/Home';
import AboutUs from './components/pages/AboutUs/AboutUs';
import Products from './components/pages/Products/Products';


const App = () => {
    return (
        <Fragment>

            <Header />

            <Switch>

                <Route exact path="/" render={() => <Redirect to="/početna" />} />

                <Route path="/početna" component={Home} />
                <Route path="/o-nama" component={AboutUs} />
                <Route path="/proizvodi/:id" component={Products} />


            </Switch>
            
            <Footer />

        </Fragment>
    )
}

export default App
