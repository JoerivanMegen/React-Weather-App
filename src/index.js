import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './components/Weather';
import "./index.css";


ReactDOM.render(
  <div className="index">
    <Weather city = "Maastricht" lat="50.8483" lon="5.6889"/>
    <Weather city = "Marseille" lat="43.3333" lon="5.5" />
  </div>,
  document.getElementById('root')
);
