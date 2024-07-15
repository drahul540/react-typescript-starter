import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import RoutesConfig from './RoutesConfig';
import Header from './layouts/Header';

function App() {
  return (
    <div className="App">
      <RoutesConfig />
    </div>
  );
}

export default App;
