import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App title={"Relevent Persons"} />, document.getElementById('root'));
registerServiceWorker();
