import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const ForProba = () => {
    return (
        <div className="container">
            <App/>
        </div>
    );
}

ReactDOM.render(<ForProba/>, document.getElementById('root')); 