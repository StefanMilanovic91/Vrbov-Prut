import React, { Fragment } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/UI/Header/Header';

import Home from './components/pages/Home/Home';

const App = () => {
    return (
        <Fragment>

            <Header />

            <Switch>

                <Route exact path="/" render={() => <Redirect to="/početna" />} />

                <Route path="/početna" component={Home} />

            </Switch>
            

        </Fragment>
    )
}

export default App
