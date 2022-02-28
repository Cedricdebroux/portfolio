import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from './components/features/footer/footer';
import registerServiceWorker from 'react-service-worker';

const appSW = registerServiceWorker()

ReactDOM.render(<App appServiceWorker={appSW} />, document.getElementById('root'));
ReactDOM.render(
  
  <Footer appServiceWorker={appSW} />
  ,
  document.getElementById('footer')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
