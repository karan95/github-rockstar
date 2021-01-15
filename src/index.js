import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.css';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();