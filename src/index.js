import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'

// Global Axios interceptors to intercept requests/reponses sent/received to/from server

axios.interceptors.request.use(request => {
  // console.log(request)
  return request;
}, error => {
  console.log(error);           // we may log error globally here to a file for example
  return Promise.reject(error); // to pass the error back to caller
})

axios.interceptors.response.use(response => {
  // console.log(response)
  return response;
}, error => {
  console.log(error);           
  return Promise.reject(error);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
