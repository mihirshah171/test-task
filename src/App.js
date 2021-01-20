import React from 'react';
import './App.scss';
import RouteLinks from "./router";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <RouteLinks />
    </div>
  );
}

export default App;

