import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'

// Default Axios global configuration
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com' 
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN'
axios.defaults.headers.post['Content-Type'] = 'application/json'

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
