import React, { Fragment } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/UI/Header/Header';

import Home from './components/pages/Home/Home';
import AboutUs from './components/pages/AboutUs/AboutUs';
import Footer from './components/UI/Footer/Footer';

const App = () => {
    return (
        <Fragment>

            <Header />

            <Switch>

                <Route exact path="/" render={() => <Redirect to="/početna" />} />

                <Route path="/početna" component={Home} />
                <Route path="/onama" component={AboutUs} />

            </Switch>
            
            <Footer />

        </Fragment>
    )
}

export default App
