import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return (
            <Fragment>
                <h1>Hello, world!</h1>
                <p>It's a beautiful day 😀</p>
            </Fragment>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);