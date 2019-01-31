import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import TestStrap from './Test';
/*mport 'semantic-ui-react/dist/umd/semantic-ui-react.min.js'*/
/*import 'semantic-ui-css/semantic.min.css'*/


ReactDOM.render(<TestStrap />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
