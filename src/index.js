import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

Amplify.configure({
  API: {
    endpoints: [{
      name: 'photos',
      endpoint: 'https://ievwidpg2g.execute-api.ap-southeast-1.amazonaws.com/Prod',
      region: 'ap-southeast-1',
    }]
  },
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
