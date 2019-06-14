import React, { Component } from 'react';
import ReactDOM from 'react-dom';

require('../styles/style.styl');

import Header from './layout/Header';

import Events from './events/Events';

import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Header />
                <Events />
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));