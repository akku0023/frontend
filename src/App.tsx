import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './navigation/routes';
import './global.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
