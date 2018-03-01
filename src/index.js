import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import logo from './assets/webpack-logo.svg';
import './index.scss';

class App extends Component {
    render() {
        return (
            <Fragment>
                <h1>Hello, world!</h1>
                <p>It's a beautiful day 😀</p>
                <p>Built with:</p>
                <img src={logo} alt="Webpack"/>
            </Fragment>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);