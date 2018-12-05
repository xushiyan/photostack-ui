import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';
import Amplify from 'aws-amplify';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';

Amplify.configure({
  API: {
    endpoints: [
      {
        name: 'photos',
        endpoint: 'https://ievwidpg2g.execute-api.ap-southeast-1.amazonaws.com/Prod',
        region: 'ap-southeast-1',
      },
    ],
  },
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(promise)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
