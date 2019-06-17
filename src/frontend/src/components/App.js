import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

require('../styles/style.styl');

import Header from './layout/Header';

import Login from './accounts/Login';
import Register from './accounts/Register';

import PrivateRoute from './common/PrivateRoute';

import Events from './events/Events';
import Event from './events/Event';

import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Fragment>
                        <Header />
                        <Switch>
                            <Route exact path="/" component={Events} />
                            <PrivateRoute exact path="/events/:number" component={Event} />
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/login" component={Login} />
                        </Switch>
                    </Fragment>
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));