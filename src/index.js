import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import logo from './assets/webpack-logo.svg';
import './index.scss';

class App extends Component {
    render() {
        return (
            <Fragment>
                <h1>Hello, world!</h1>
                <p>It&apos;s a beautiful day <span role="img" aria-label="Smile emoji">😀</span></p>
                <p>Built with:</p>
                <a href="https://webpack.js.org" target="_blank" rel="noopener noreferrer">
                    <img src={logo} alt="Webpack"/>
                </a>
            </Fragment>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);